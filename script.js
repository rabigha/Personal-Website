var personInfo = 
{
  firstname: "Rabigh",
  lastname: "Ahmed",
  age: 16,
  favoriteFood: "Chicken",
  haveBirthday: function() 
  {
    this.age = this.age + 1;
    return this.age;
  }
};

function clickParagraph(whatWasClicked)
{
  alert(whatWasClicked);
}

function welcomeFunction()
{
  var text = "";
  var i = 3;
  while (i > 0) 
  {
    text += i + " ";
    i--;
  }
  alert(text);

  var a = 'I am ';
  var b = 1;
  var c = 6;
  var d = ' years.';
  var age = (a + b + c + d);
  document.getElementById('yes').innerHTML = age;

  var nameToOutput = personInfo.firstname + ' ' + personInfo.lastname;
  document.getElementById('my_name').innerHTML = nameToOutput;

  var vary_1= 'Hello there. This is a page about me. Enjoy!'
  alert(vary_1)  
}

var coinTossHistory = [];

function coinToss()
{
  var rng = Math.random();
  if(rng > 0.5)
  {
    coinTossHistory.push(' H');
    alert("heads");
  }
  else
  {
    coinTossHistory.push(' T');
    alert('tails');
  }
  document.getElementById('coin_toss_history').innerHTML = coinTossHistory;
  setCoinFlipText();
}

function cheatTheCoinFlips()
{
  coinTossHistory.fill(' Boom!');
  document.getElementById('coin_toss_history').innerHTML = coinTossHistory;
  setCoinFlipText();
}

function addSomeHeads()
{
  coinTossHistory.splice(3,1);
  document.getElementById('coin_toss_history').innerHTML = coinTossHistory;
  setCoinFlipText();
}

function setCoinFlipText()
{
  
  var allHeads = 1;
  var allTails = 1;

  for(i=0; i<coinTossHistory.length; i++)
  {
    if(coinTossHistory[i] == ' T')
    {
      allHeads = 0;
    }
    if(coinTossHistory[i] == ' H')
    {
      allTails = 0;
    }
  }

  if(allHeads == 1)
  {
    document.getElementById('coin_flip_text').innerHTML = 'All heads';
  }
  else if(allTails == 1)
  {
    document.getElementById('coin_flip_text').innerHTML = 'All tails';
  }
  else
  {
    document.getElementById('coin_flip_text').innerHTML = 'A mix of heads and tails';
  }
}

function chooseGame()
{
  var gamer = document.getElementsByName('games');
  for (i=0; i<gamer.length; i++) 
  {
    if (gamer[0].checked) 
    {
      document.getElementById("gameResult").innerHTML = "Close, definitely top 5.";
    }
    else if (gamer[1].checked) 
    {
      document.getElementById("gameResult").innerHTML = "This is something I picked up recently.";
    }
    else if (gamer[2].checked) 
    {
      document.getElementById("gameResult").innerHTML = "Well done!";
    }
     else 
    {
      document.getElementById("gameResult").innerHTML = "Hey! That's not cool, man. Choose something.";
    }
  }
}

function checkPoint()
{
 
  if(document.getElementById('cube').checked == true)
  {
    alert("Good choice!")
  }
  
  else
  {
    alert("Shame...")
  }
}

function FavColor()  
{
  var selectColor = document.getElementById('color');
  var i = selectColor.selectedIndex;
  alert('Your favorite color is ' + selectColor.options[i].text);
}

function alphanumFunction() {
  var res = "";
  res = res + isNaN(2) + ": It does<br>";
   document.getElementById("numero").innerHTML = res;
}

function pickNum() 
{
  var a = document.getElementById("num").value;

  
  if (isNaN(a)){
    alert("Error- It isn't a Number");
  }
  
  else{
    alert("Below is the number you picked");
  }
}

function numerical() 
{
  var b = document.getElementById("num").value;
  var c = parseFloat(b);
  document.getElementById("numeric").innerHTML = "Your favorite number is " + c;
}