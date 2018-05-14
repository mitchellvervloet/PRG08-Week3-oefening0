class SpaceBall extends Ball {

    public behavioiur: Movement

    constructor (minwidth:number, maxwidth:number) {
        super(minwidth, maxwidth)
        this.behavioiur = new Floating(this)
    }

    public update() : void {
        this.behavioiur.update()
        this.draw()
    }
}