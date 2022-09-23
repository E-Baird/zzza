; KERNAL [sic] routines
CHROUT = $ffd2

; OFFSETS of important ram
GRAPHICS_ADDR = $1e00
COLOR_ADDR = $9600
COLOR_2_ADDR = $9616
COPY_START = $100d

CHARSET_CTRL = $9005
DEFAULT_CHAR_ADDR = 32768
CUSTOM_CHAR_ADDR = $1c00

    processor 6502
    org $1001
    
    dc.w stubend ; define a constant to be address @ stubend
    dc.w 12345 
    dc.b $9e, "4109", 0
stubend
    dc.w 0

; change the location of the charset
    lda #255 ; set location of charset to 7168 ($1c00)
    sta CHARSET_CTRL ; store in register controlling base charset 

; load custom characters into charset location

    ldx #0
    lda #$3c 
    sta CUSTOM_CHAR_ADDR,x
    inx
    lda #$42 
    sta CUSTOM_CHAR_ADDR,x
    inx
    lda #$a5 
    sta CUSTOM_CHAR_ADDR,x
    inx
    lda #$81 
    sta CUSTOM_CHAR_ADDR,x
    inx
    lda #$a5 
    sta CUSTOM_CHAR_ADDR,x
    inx
    lda #$99 
    sta CUSTOM_CHAR_ADDR,x
    inx
    lda #$42 
    sta CUSTOM_CHAR_ADDR,x
    inx
    lda #$3c 
    sta CUSTOM_CHAR_ADDR,x

; character 2

    lda #$0f
    sta $1c08
    lda #$10
    sta $1c09
    lda #$29
    sta $1c0a
    lda #$20
    sta $1c0b
    lda #$29
    sta $1c0c
    lda #$26
    sta $1c0d
    lda #$10
    sta $1c0e
    lda #$0f
    sta $1c0f

; character
        lda #$03
        sta $1c10
        lda #$04
        sta $1c11
        lda #$0a
        sta $1c12
        lda #$08
        sta $1c13
        lda #$0a
        sta $1c14
        lda #$09
        sta $1c15
        lda #$04
        sta $1c16
        lda #$03
        sta $1c17

; character
        lda #$00
        sta $1c18
        lda #$01
        sta $1c19
        lda #$02
        sta $1c1a
        lda #$02
        sta $1c1b
        lda #$02
        sta $1c1c
        lda #$02
        sta $1c1d
        lda #$01
        sta $1c1e
        lda #$00
        sta $1c1f
; character
        lda #$f0
        sta $1c20
        lda #$08
        sta $1c21
        lda #$94
        sta $1c22
        lda #$04
        sta $1c23
        lda #$94
        sta $1c24
        lda #$64
        sta $1c25
        lda #$08
        sta $1c26
        lda #$f0
        sta $1c27

; character
        lda #$c0
        sta $1c28
        lda #$20
        sta $1c29
        lda #$50
        sta $1c2a
        lda #$10
        sta $1c2b
        lda #$50
        sta $1c2c
        lda #$90
        sta $1c2d
        lda #$20
        sta $1c2e
        lda #$c0
        sta $1c2f


; character
        lda #$00
        sta $1c30
        lda #$80
        sta $1c31
        lda #$40
        sta $1c32
        lda #$40
        sta $1c33
        lda #$40
        sta $1c34
        lda #$40
        sta $1c35
        lda #$80
        sta $1c36
        lda #$00
        sta $1c37

    lda #255
    sta $0000
    ldx #0
wipe
    lda #1
    sta COLOR_ADDR,x
    inx
    cpx $0000
    bne wipe


    lda #4
    sta $0000
    ldx #0
color
    lda #4
    sta COLOR_ADDR,x
    sta COLOR_2_ADDR,x
    inx
    cpx $0000
    bne color

loop
    lda #0
    sta $1e00
    lda #1
    sta $1e01
    lda #2
    sta $1e02
    lda #3
    sta $1e03

    lda #4
    sta $1e16
    lda #5
    sta $1e17
    lda #6
    sta $1e18
    jmp loop
