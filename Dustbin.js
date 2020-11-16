class Dustbin{
    constructor(x,y,width,height){
    
    var options = {
    isStatic : true
    }
    
    
    this.body = Bodies.rectangle(x-
        5,y-5,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    
    }
    
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red")
    rect(pos.x,pos.y,this.width,this.height)
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    }
    