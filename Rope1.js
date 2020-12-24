class Rope{
    constructor(body1,point1){
        var options ={
            bodyA : body1,
            pointB : point1
        }
        
        this.rope1 = Constraint.create(options);
        World.add(world,this.rope1);
    }
    display(){
        var pointA = this.rope1.bodyA.position;
        var pointB = this.rope1.pointB;


		line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
}