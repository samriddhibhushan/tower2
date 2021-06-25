class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      
     
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.Visibility=255;
      World.add(world, this.body);
      
    }
    display(){
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      
      
        console.log(this.body.speed);
        if(this.body.speed < 5){
          this.Visibility=255; 
          World.add(world, this.body);
          
       }else{
         World.remove(world,this.body);
         push();
         this.Visibility=this.Visibility-5;
         tint(255,this.Visibility);
         imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height);
         pop();
     }
    }
}