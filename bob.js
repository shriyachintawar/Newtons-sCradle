class bob{
    constructor(x,y){
        var options = {
            
            restitution: 0.8,
            density:1,
            friction:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        
        fill("orange");
        ellipse(pos.x,pos.y,50);
       
    }
}