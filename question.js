class Question {

    constructor() {
      this.title = createElement("h1");
      this.button = createButton('submit');
      this.input1=createInput("name");
      this.input2=createInput("answer");
      this.question=createElement("h3")
      this.option1=createElement("h4")
      this.option2=createElement("h4")
      this.option3=createElement("h4")
      this.option4=createElement("h4")
}
hide(){
    this.title.hide();
    this.button.hide();
    this.input1.hide();
    this.input2.hide();
}
display(){
this.title.html("myQuizGame")
this.title.position(350,0)

this.question.html("which word is spelled hardest in the dictionary")
this.question.position(150,80);

this.option1.html('1.difficult');
this.option1.position(150,100);

this.option2.html('2.hardest');
this.option2.position(150,120);

this.option3.html('3.dog');
this.option3.position(150,140);

this.option4.html('4.pneumonia');
this.option4.position(150,160);

this.button.mousePressed(()=>{
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.title.hide();
    
    contestant.name = this.input.value();
    contestantCount+=1;
    contestant.index = playerCount;
    contestant.update();
    contestantCount.updateCount(contestantCount)
  
})


}
}
