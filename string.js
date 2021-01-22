class String {

    constructor(bodyA, pointB){
        var options = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness : 0.03,
           length : 350
        }

       


        this.string = Constraint.create(options)
        this.pointB = pointB
        
        

        World.add(world,this.string)

    }

    display() {
        strokeWeight(10)
        line(this.string.bodyA.position.x, this.string.bodyA.position.y,this.pointB.x ,this.pointB.y )
    }

}