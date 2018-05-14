class Main {

    private balls : Ball[] = []
    
    constructor() {
        
        this.balls.push(new MoonBall())
        this.balls.push(new SpaceBall())

        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }
        
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())