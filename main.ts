namespace oledssd1306 {

    //% blockId=oledssd1306_Calliope
    //% row.min=0 row.max=5 
    //% column.min=0 column.max=13
    //% block="zeichne Calliope Mini 4x4 an Zeile %row| und Spalte %column"
    export function CalliopeMini(row: number, column: number): void {
        oledssd1306.setTextXY(row, column)
        oledssd1306.writeCustomChar("\x00\x00\x00\x00\x00\x00\x00\xFC") //1
        oledssd1306.writeCustomChar("\xFA\xFE\xFC\x78\xF8\x78\xF0\x70") //2
        oledssd1306.writeCustomChar("\xF0\x70\xF0\x78\xF8\xFC\xFE\xFA") //3
        oledssd1306.writeCustomChar("\xFC\x00\x00\x00\x00\x00\x00\x00") //4
        oledssd1306.setTextXY(row + 1, column)
        oledssd1306.writeCustomChar("\xC0\x40\xF0\xF8\xFC\xFE\xFF\xFF") //5
        oledssd1306.writeCustomChar("\xFF\xFF\xFF\x55\xFF\x55\xFF\x55") //6
        oledssd1306.writeCustomChar("\xFF\x55\xFF\x55\xFF\xFF\xFF\xFF") //7
        oledssd1306.writeCustomChar("\xFF\xFF\xFE\xFC\xF8\xF0\x40\xC0") //8
        oledssd1306.setTextXY(row + 2, column)
        oledssd1306.writeCustomChar("\x01\x03\x03\x07\x0F\x1F\x7F\xFF") //9
        oledssd1306.writeCustomChar("\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF") //10
        oledssd1306.writeCustomChar("\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF") //11
        oledssd1306.writeCustomChar("\xFF\x7F\x1F\x0F\x07\x03\x03\x01") //12
        oledssd1306.setTextXY(row + 3, column)
        oledssd1306.writeCustomChar("\x00\x00\x00\x00\x00\x00\x00\x3F") //13
        oledssd1306.writeCustomChar("\x2F\x3F\x1F\x0F\x0F\x0F\x07\x03") //14
        oledssd1306.writeCustomChar("\x03\x07\x0F\x0F\x0F\x1F\x3F\x2F") //15
        oledssd1306.writeCustomChar("\x3F\x00\x00\x00\x00\x00\x00\x00") //16
    }
    //% blockId=oledssd1306_emptyheart
    //% row.min=0 row.max=7 
    //% column.min=0 column.max=15
    //% block="zeichne leeres Herz an Zeile %row| und Spalte %column"
    export function Herz(row: number, column: number): void {
        oledssd1306.setTextXY(row, column)
        oledssd1306.writeCustomChar("\x0E\x11\x21\x42\x21\x11\x0E\x00")
    }
    //% blockId=oledssd1306_heartempty
    //% row.min=0 row.max=7 
    //% column.min=0 column.max=15
    //% block="zeichne Herz an Zeile %row| und Spalte %column"
    export function Herzgefuellt(row: number, column: number): void {
        oledssd1306.setTextXY(row, column)
        oledssd1306.writeCustomChar("\x0E\x1F\x3F\x7E\x3F\x1F\x0E\x00")
    }

    //% blockId=oledssd1306_heartcatcherfull
    //% row.min=0 row.max=7 
    //% column.min=0 column.max=15
    //% block="zeichne Herzfängervoll an Zeile %row| und Spalte %column"
    export function Herzfaengervoll(row: number, column: number): void {
        oledssd1306.setTextXY(row, column)
        oledssd1306.writeCustomChar("\x6E\x9F\xBF\xFE\xBF\x9F\x6E\x00")
    }
    //% blockId=oledssd1306_heartcatcherempty
    //% row.min=0 row.max=7 
    //% column.min=0 column.max=15
    //% block="zeichne Herzfängerleer an Zeile %row| und Spalte %column"
    export function Herzfaengerleer(row: number, column: number): void {
        oledssd1306.setTextXY(row, column)
        oledssd1306.writeCustomChar("\x60\x80\x80\x80\x80\x80\x60\x00")
    }
}
