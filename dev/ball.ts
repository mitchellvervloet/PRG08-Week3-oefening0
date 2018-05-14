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

    constructor() {
        let content = document.getElementsByTagName("content")[0]
        this.htmlElement = document.createElement("ball")
        content.appendChild(this.htmlElement)

        this.maxHeight = window.innerHeight - this.htmlElement.clientHeight
        this.maxWidth = window.innerWidth - this.htmlElement.clientWidth
        
        this.x = Math.random() * this.maxWidth
        this.y = 100
    }

    abstract update() : void

    public draw() {
        this.htmlElement.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}