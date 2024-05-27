let name = prompt("What is your name?");
let intolerance = prompt("Are you lactose intolerant?");
//let dairy = prompt("What is your favourite ice cream? Chocolate/Strawberry/Vanilla");
//let sorbet = prompt("What is your favourite ice cream? Mango/Lemon/Papaya");

function greeting(){
  return `Hi ${name}!`
}

console.log(greeting())

function lactoseIntolerance(){
  if (intolerance == "yes"){
    let sorbet = prompt("What is your favourite ice cream? Mango/Lemon/Papaya");
    return sorbet;
  }else{
    let dairy = prompt("What is your favourite ice cream? Chocolate/Strawberry/Vanilla");
    return dairy;
  }
}

let result = lactoseIntolerance();

//Function to choose which switch statement runs
function choosingSwitch(){
  if(intolerance == 'yes'){
    return sorbetIcecream(result);
  }else{
    dairyIcecream(result);
  }
}

function sorbetIcecream(){
  switch(result){
    case 'Mango':
      console.log('Mango is sooo good!');
      break;
    case 'Lemon':
      console.log('Lemon is too much for me!');
      break;
    case 'Papaya':
      console.log("You like papaya icecream? I love it's colour!");
      break;
    default: 
      console.log("I dont think that is an icecream I suggested...")
  }
}
  
function dairyIcecream(){
  switch(result){
    case 'Chocolate':
      console.log('Chocolate is mine too!');
      break;
    case 'Strawberry':
      console.log('Strawberry is good too!');
      break;
    case 'Vanilla':
      console.log('You like vanilla icecream? I love a vanilla milkshake!');
      break;
    default: 
      console.log("I dont think that is an icecream I suggested...")
  }
}

choosingSwitch();