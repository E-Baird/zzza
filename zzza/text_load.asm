; -----------------------------------------------------------------------------
; SUBROUTINE: level_display
; - draws the numbers for the current level on screen
; - used for the the "ORDER UP" screen to display the level
;
; -----------------------------------------------------------------------------

level_display
    lda     CURRENT_LEVEL               ; load the current level into A register
    clc                                 ; clear carry
    adc     #1                          ; we index levels from 0 (BECAUSE WE LIVE IN A SOCIETY!), so add 1
    cmp     #10                         ; check if the 10s digit needs to be set
    bmi     single_digit                ; if value is minus, only the 1s digit is set

    ldx     #49                         ; char value for 1
    sta     $1e97                       ; store in the 10s place
    sec                                 ; set carry for subtraction
    sbc     #10                         ; subtract 10 to setup for dealing with 1s position

single_digit
    clc
    adc     #48                         ; 48 is the char 0, we add it to our desired value to get our character
    sta     $1e98                       ; store it on the screen

    rts