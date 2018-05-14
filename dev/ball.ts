abstract class Ball {

    public readonly gravity    : number = 0.1
    public readonly friction   : number = 0.9

    public htmlElement : HTMLElement

    public x           : number = 0
    public y           : number = 0
    public speedX      : number = 5
    public speedY      : number = -3
    public minWidth    : number = 0
    public maxWidth    : number = 0
    public maxHeight   : number = 0

    constructor(minWidth : number, maxWidth : number, type:string = "ball") {

        let content = document.getElementsByTagName("content")[0]
        this.htmlElement = document.createElement(type)
        content.appendChild(this.htmlElement)

        maxWidth -= this.htmlElement.clientWidth
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
        this.y = 100

        this.minWidth   = minWidth
        this.maxWidth   = maxWidth
        this.maxHeight  = window.innerHeight    - this.htmlElement.clientHeight
    }

    abstract update() : void

    public draw() {
        this.htmlElement.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}