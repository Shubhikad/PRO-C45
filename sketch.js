var bgImg;
var gameState
var cheese, vegetab, peppo, sprite, fanta, coke
var toppingCount = 0
var clicke = 1

function preload(){
  bgImg1 = loadImage("Order 1.jpg")
  bgImg2 = loadImage("Order 2.jpg")
  bgImg3 = loadImage("Order 3.jpg")
  gameState = 0
  cookingStatImg = loadImage("cookingStation.png")
  backgroundIm = bgImg1
  doughImg = loadImage("dough.png")
  VegeImg = loadImage("dough.png")
  PeppImg = loadImage("pepperoni.png")
  cheeseImg = loadImage("cheese.png")
  sauceImg = loadImage("sauce.png")
  pizzaState = "dough"
  
}
  
function setup(){
  createCanvas(1400,1000)
  cheese = createSprite(1030,570,100,100)
  cheese.visible = false
  vegetab = createSprite(1030,680,100,100)
  vegetab.visible = false
  peppo = createSprite(1040,820,100,100)
  peppo.visible = false
  sprite = createSprite(1200,570,100,100)
  sprite.visible = false
  fanta = createSprite(1220,687,100,100)
  fanta.visible = false
  coke = createSprite(1240,820,100,100)
  coke.visible = false
  cheese1 = createSprite(400,100,150,300)
  cheese1.visible = false
  sauce1 = createSprite(150,100,300,300)
  sauce1.visible = false
  vegetab1 = createSprite(1280,500,150,900)
  vegetab1.visible = false
  peppo1 = createSprite(600,100,150,200)
  peppo1.visible = false
  coke1 = createSprite(99,430,100,150)
  coke1.visible = false
  fanta1 = createSprite(210,430,100,150)
  fanta1.visible = false
  sprite1 = createSprite(150,620,100,150)
  sprite1.visible = false
}




function draw(){
  
  background(backgroundIm)
    if(gameState === 0){
      if(mousePressedOver(cheese)){
        gameState = 1
        backgroundIm = bgImg1
      }
    }
      if(gameState === 1)
      {

       
        backgroundIm = cookingStatImg
        dough = createSprite(520,600,100,150)
        dough.addImage(doughImg)

        dough.scale = 0.4
        
        PIZZA = createSprite(520,600,100,150)
        fill("black")
        textSize(40)
        text("Ingredients needed are Sauce, Cheese",700,980)
        text("Number of toppings used:" + toppingCount,700,900)
        
        if(pizzaState === "dough" ){
          PIZZA.visible = false
          clicke = 1
          
        }
        else{
          PIZZA.visible = true
          clicke = 0
        }
        
        if(mousePressedOver(sauce1) && clicke == 1)
        {
          toppingCount = toppingCount + 1
          clicke = 0
          console.log(clicke)
          pizzaState = "sauce"
          clicke = clicke + 1
          console.log(clicke)
         
        }

        if(pizzaState === "sauce"){
          
          PIZZA.addImage(sauceImg)
          PIZZA.scale = 0.4
          
        }

        clickf()
        if(mousePressedOver(cheese1) && clicke == 1)
        {
          toppingCount = toppingCount + 1
          clicke = 0
          console.log(clicke)
          pizzaState = "cheese"
          clicke = clicke + 1
          console.log(clicke)
        }

        if(pizzaState == "cheese"){
          
          PIZZA.addImage(cheeseImg)
          
          PIZZA.scale = 0.4
         
        }
        if(mousePressedOver(vegetab1) || mousePressedOver(peppo1) || mousePressedOver(fanta1) 
        || mousePressedOver(sprite1) ||mousePressedOver(coke1)){
          gameState = 9
        }
        if(gameState === 9){
          GameOver()
        }
        

       /* if(mousePressedOver(vegetab1))
        {
          PIZZA = createSprite(520,600,100,150)
          PIZZA.addImage(VegeImg)
        }
        if(mousePressedOver(peppo1))
        {
          PIZZA = createSprite(520,600,100,150)
          PIZZA.addImage(PeppImg)
        }
        if(mousePressedOver(fanta1))
        {
          console.log("working")
        }
        if(mousePressedOver(sprite1)){

          console.log("working")
        }
        if(mousePressedOver(coke1))
        {
          console.log("working")
        }*/

       
         /*if(pizzaState === "vegetab"){
          PIZZA.addImage(vegetab1)
        }*/
       
      }
      
    
  
  

  
   drawSprites()
}
function GameOver(){
  
}

function clickf(){
   clicke = clicke +1 
}