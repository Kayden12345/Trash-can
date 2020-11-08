class Dusbin {
    constructor(x, y, height, angle) {
    
      this.body = Bodies.rectangle(x, y, 20, height,);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      Matter.Body.setStatic(this.body, true);
	   
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  };