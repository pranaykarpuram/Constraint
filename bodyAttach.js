class Chain2{
    constructor(y,z){
        var chainOptions={
            length: 50,
            stiffness: 0.04,
            bodyA: z,
            bodyB: y,
           }
        var chain = Matter.Constraint.create(chainOptions);
        World.add(world,chain);
    
    }


}