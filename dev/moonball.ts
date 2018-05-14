class MoonBall extends Ball {

    public behaviour: Movement

    constructor (minwidth:number, maxwidth:number) {
        super(minwidth, maxwidth)
        this.behaviour = new Bouncing(this)
    }

    public update() : void {
        this.behaviour.update()
        this.draw()
    }
}