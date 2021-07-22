var button

var r 
var a
var b
var bulls = 0
var cows = 0
var wordResult
var cowResult
var bullResult

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  button = createButton("Submit")
  button.position(400,300)
  button.mousePressed()
  button.style("backgroundColor", "grey")
  button.style("borderRadius", "100px")
  button.style("width", "100px")
  button.style("height", "100px")
  button.style("color", "midnightblue")
  button.style("fontWeight", "bold")
  button.style("fontSize", "25px")

  inp = createInput().attribute("placeholder", "Word")
  inp.position(125,325)
  inp.style("borderRadius", "25px")
  inp.style("height", "50px")
  inp.style("textAlign", "center")
  inp.style("fontSize", "20px")
  inp.style("color", "midnightblue")

  Word = createElement("h1")
  Word.html("Word")
  Word.position(600,100)

  Bulls = createElement("h1")
  Bulls.html("Bulls")
  Bulls.position(900,100)

  Cows = createElement("h1")
  Cows.html("Cows")
  Cows.position(1200,100)


  r = Math.round(random(0, s.length-1))
  console.log(r)
  a=s[r]
  console.log(a)

  button.mousePressed(result)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  line(750, 100, 750,700)
  line(1050, 100, 1050, 700)


}



function result(){
  if(inp.value().length!=4){
    alert("PLEASE enter a 4 letter word.")
  }
  b=inp.value().toLowerCase()
  console.log(b)
//these are for bulls
  if(a.charAt(0)===b.charAt(0)){
    bulls +=1
  } if(a.charAt(1)===b.charAt(1)){
    bulls +=1
  }if(a.charAt(2)===b.charAt(2)){
    bulls+=1
  }if(a.charAt(3)===b.charAt(3)){
    bulls+=1
  }

  //these are for cows
  if(a.charAt(0)===b.charAt(1) || a.charAt(0)===b.charAt(2) || a.charAt(0)===b.charAt(3)){
    cows+=1
  }if(a.charAt(1)===b.charAt(0) || a.charAt(1)===b.charAt(2) || a.charAt(1)===b.charAt(3)){
    cows+=1
  }if(a.charAt(2)===b.charAt(0)||a.charAt(2)===b.charAt(1)||a.charAt(2)===b.charAt(3)){
    cows+=1
  }if(a.charAt(3)===b.charAt(0)||a.charAt(3)===b.charAt(1)||a.charAt(3)===b.charAt(2)){
    cows+=1
  }

  if(inp.value().length===4){
    for(var i = 0; i<s.length; i++  ){
      if(s[i].includes(b)){break}
    }
    if(i<s.length){
      wordResult = createElement("h4")
      wordResult.html(b)
      wordResult.position(600,100)

      bullResult = createElement("h4")
      bullResult.html(bulls)
      bullResult.position(900,100)

      cowsResult = createElement("h4")
      cowsResult.html(bulls)
      cowsResult.position(1200,100)
    }
  }
}