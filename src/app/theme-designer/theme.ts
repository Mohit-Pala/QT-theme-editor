export class theme {
    public backR: number = 0;
    public backG: number = 0;
    public backB: number = 0;

    public foreR: number = 0;
    public foreG: number = 0;
    public foreB: number = 0;

    public buttonR: number = 0;
    public buttonG: number = 0;
    public buttonB: number = 0;

    public borderR: number = 0;
    public borderG: number = 0;
    public borderB: number = 0;

    public makeRGB(redColor: number, greenColor: number, blueColor: number): String {
        return 'RGB(' + redColor.toString() + ', ' + greenColor.toString() + ', ' + blueColor.toString() + ')';
    }

    public backColor: String = this.makeRGB(this.backR, this.backG, this.backB);
    public foreColor: String = this.makeRGB(this.foreR, this.foreG, this.foreB);
    public buttonColor: String = this.makeRGB(this.buttonR, this.buttonG, this.buttonB);
    public borderColor: String = this.makeRGB(this.borderR, this.borderG, this.borderB);

}