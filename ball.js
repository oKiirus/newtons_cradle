class Ball {

    constructor(x, y, r){
        var options = {
            restitution : 1,
            friction: 0,
            density: 0.5
        }

       


        this.body = Bodies.circle(x,y,r,options)

        this.r = r
        

        World.add(world,this.body)

    }

    display() {
        ellipseMode(RADIUS)
        fill("green")
        ellipse(this.body.position.x, this.body.position.y, this.r)
    }

}