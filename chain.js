class Chain {
     constructor(bodyA,bodyB){
          var options={
               bodyA:bodyA,
               bodyB:bodyB,
               stiffness:0.04,
               length:10
           }
   //options are used to create your constraint
     this.chain=Constraint.create(options);
     World.add(world,this.chain);
     
     }



display (){
     
//bodies belong to chain constraint
var posA=this.chain.bodyA.position;
var posB=this.chain.bodyB.position;

push ();

strokeWeight(6);
line (posA.x,posA.y,posB.x,posB.y);

pop ();
}

}