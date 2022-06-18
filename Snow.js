class Snow{
    constructor(x,y){
      this.snow=Bodies.circle(x,y,15)
      this.radius=15
      var rand=Math.round(random(1,2))
      var img
      if(rand==1){
         img="snow4.webp"
      }
      else{
          img="snow5.webp"
      }
      this.image=loadImage(img)
      World.add(world,this.snow)
    }
    display(){
      Matter.Body.setPosition(this.snow,{x:random(0,800),y:random(0,800)})
      imageMode(CENTER)
      image(this.image,this.snow.position.x,this.snow.position.y ,15,15)
    }
}
//