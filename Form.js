class Form{
    constructor(){
    this.input=createInput("Name");
    this.button = createButton("SUBMIT");
    this.greet = createElement('h3');
    this.title=createElement('h2')
    this.input2=createInput("correct option number")
    this.ques=createElement("h3")
    this.op=createElement("h4")
    this.stat=createElement("h3")
    this.op2=createElement("h4")
    this.op3=createElement("h4")
    this.op4=createElement("h4")
    this.reset = createButton('Reset');
    }

    display(){
        this.title.html("Uncommon Sense Challenge");
        this.title.position(300,30);
       
        this.input.position(100,300);

        this.input2.position(300,300);

        this.reset.position(100, 500);

      
 this. op3.html("c) cold")
  this.op3.position(150,190)

  
  this.op4.html("d) water")
  this.op4.position(150,210)

        
        this.button.position(250,350);

        this.op2.html("b) cupcake")
  this.op2.position(150,170)


        this.op.html("a) tennis ball ")
  this.op.position(150,150)

        this.ques.html("Questions ")
        this.ques.position(150,100)

        this.stat.html("Q1) What can always be cought but never thrown?")
        this.stat.position(150,120)


        this.button.mousePressed(()=>{
            this.input.hide();
            this.input2.hide();
            this.button.hide();
            player.name=this.input.value();
            player.answer=this.input2.value();
            playerCount=playerCount+1;
            player.update();
            player.updateCount(playerCount);
            player.index=playerCount;

        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            player.updateCount(0);
            game.update(0);
    
        });

    }
    hide (){
        this.greet.hide();
        this.input2.hide();
        this.input.hide();
        this.button.hide();
    }
}
