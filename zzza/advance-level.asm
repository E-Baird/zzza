; -----------------------------------------------------------------------------
; SUBROUTINE: ADVANCE_LEVEL
; - goes through the 34-byte 'LEVEL_DATA' array, shuffling all elements by 2
; - so LEVEL_DATA[2] will be placed in LEVEL_DATA[0], etc
; - the data in LEVEL_DATA[0] and LEVEL_DATA[1] is lost as it is no longer needed
; - the data in LEVEL_DATA[32] and LEVEL_DATA[33] is generated using the LFSR
; - additionally, calculates the deltas that will be stored in LEVEL_DELTAS
; - the deltas are essentially a representation of which parts of the screen need to animate
;   and which will stay the same 
;
; - NOTE: technically, LEVEL_DELTA is defined as being 34 bytes long even though it only holds
;         32 bytes of 'good' data however, the code to deal with LEVEL_DATA and LEVEL_DELTA 
;         being different lengths takes up way more than 2 bytes, so it's better for 
;         LEVEL_DELTA to just be too long.
; -----------------------------------------------------------------------------
advance_level

    ; this causes the 'advance_level' subroutine to only be called once every n game loops
    ; currently only setup to work with multiples of 2
    lda     #$03                        ; for now, run advance_level once every 4 loops
    and     ANIMATION_FRAME             ; calculate (acc AND frame) to check if the low bit pattern matches a multiple of 4
    bne     advance_exit                ; if the AND operation didn't zero out, frame is not a multiple of 4. leave subroutine.

    ldy     #0                          ; initialize loop counter
    lda     #2                          ; we need an offset that is always 2 ahead of y
    sta     LOOP_CTR                    ; but won't have enough registers to keep it in x

advance_loop
    ; get the first half of the delta XOR operation
    ldx     LEVEL_DATA,y                ; get the strip number at position LEVEL_DATA[y]
    lda     STRIPS,x                    ; lookup the strip data
    sta     LEVEL_DELTA,y               ; this is the first half of the data we need to find the delta

    ; shuffle the data array over by 2
    ldx     LOOP_CTR                    ; now x should be y+2
    lda     LEVEL_DATA,x                ; get the byte currently stored at LEVEL_DATA[x], which is LEVEL_DATA[y+2]
    sta     LEVEL_DATA,y                ; store it at LEVEL_DATA[y]

    ; get the 2nd half of the delta XOR operation
    tax                                 ; put the level data in x so we can index into the STRIPS
    lda     STRIPS,x                    ; go get the second half of the data needed to calculate delta
    eor     LEVEL_DELTA,y               ; XOR the patterns 
    sta     LEVEL_DELTA,y               ; this is the delta of which parts of LEVEL_DATA[y] need to be animated

    iny                                 ; update both loop counters
    inc     LOOP_CTR 

advance_test
    cpy     #34    
    bne     advance_loop                ; as long as y is not yet 34, jump up to top of loop

advance_new                             ; this section is responsible for filling in the last 2 array elements
    dey                                 ; bring y back down to 33

    lda     LFSR_ADDR                   ; we will use the lfsr to generate new data for the end of the array
    and     #$0f                        ; bitmask out the high nibble, leaving us with 0 <= a < 16
    sta     LEVEL_DATA,y                ; store it in LEVEL_DATA[33]

    dey                                 ; bring y down to 32

    cmp     #0                          ; check if accumulator is already 0
    beq     advance_final               ; if it is already 0, don't decrement
    sbc     #1                          ; otherwise, dec by 1

advance_final                           ; fill in the final piece of level data
    sta     LEVEL_DATA,y                ; store it in LEVEL_DATA[32]

advance_exit
    rts
