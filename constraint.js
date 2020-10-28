class Chain{
    constructor(y,z){
        var chainOptions={
            length: 30,
            stiffness: 0.04,
            pointA: z,
            bodyB: y,
           }
        var chain = Matter.Constraint.create(chainOptions);
        World.add(world,chain);
    
    }


}