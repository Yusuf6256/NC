class Bob
{
    constructor(x, y, radius)
    {
        var options=
        {
    
            'restitution': 1.0,
            'friction':0,
            'density':0.5

        }
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;
        World.add(world,this.body);

    }
    display()
    {
        
        push();
        translate(this.body.position.x, this.body.position.y);
    
        ellipseMode(CENTER);
        fill(200,100,40)
        ellipse(0, 0, this.radius);
        pop();
    }
}