class Form {
  constructor() {
    this.input=createInput("")
    this.playbutton=createButton("playbutton")
    this.title=createImg("assets/title.png")
    this.greeting=createElement("h2")
  }
setElementposition(){
  this.title.position(120,80)
  this.input.position(width/2-100,height/2-80)
  this.playbutton.position(width/2-100,height/2-20)
  this.greeting.position(width/2-100,height/2-90)
}
display(){
  this.setElementposition()
  this.handlemousePressed()
}
handlemousePressed(){
  this.playbutton.mousePressed(()=>{
    this.input.hide()
    this.playbutton.hide()
    var message=`hello ${this.input.value()} wait for another player to join`
    this.greeting.html(message)
  })
}
}

