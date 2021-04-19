class Bear{
    constructor(){
        
        this.bearimage = loadImage("bear.png")
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.bearimage, 0, 0, this.width, this.height);
        pop();
      }
}