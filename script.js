const test = document.getElementById('pruebas');

// con estas constantes se muestran los verbos 
const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

// con estas constantes ayudamos a mandar a llamar los verbos  
const next = document.getElementById("next");
const verbsCounter = document.getElementById("verbs-counter");
const allRightCounter = document.getElementById("all-right-answers");
const verbsContainer = document.getElementById("verbs-container");
// opciones de respuesta 
const first = document.getElementById("first-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");
const fourth = document.getElementById("fourth-verb");

// constante para saber cuantos verbos tenemos 
const numberOfVerbs = verbs.length;
// con esto, hacemos un patron de una respuesta correcta y tres incorrectas 
let answerRoullete = [0,1,1,1];

let everyNumberOfVerbs = [];

let rightAnswer;
let rightAnswersCounter = 0;

// Oyente de botón de reproducción de inicio SVG
next.addEventListener("click",function(){
  ponerVerbo();
  next.style.display = 'none';
});


// aqui se crea una lista aleatoria para mostrar los verbos 
makeRandomList();
let lastPosition = everyNumberOfVerbs.length-1;
function makeRandomList(){
  // aqui se crea un array con el mismo número de elementos que verbos
  for (var i = 0; i < numberOfVerbs; i++){
    everyNumberOfVerbs.push(i);
  }
  // aqui se hace una mezcla con los verbos que tenemos para mostrarlos en la pantalla 
  everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
}


// =========================================
// aqui se crea una funcion de if para los botones de respuesta 
// =========================================

function buttonEffect(itsRight,button){
  if (itsRight){
    button.classList.add('rightAnswer');
    setTimeout(function(){
      button.classList.remove('rightAnswer');
    },1000);
    rightAnswersCounter = rightAnswersCounter+1;
  }else{
    button.classList.add('wrongAnswer');
    setTimeout(function(){
      button.classList.remove('wrongAnswer');
    },1000);
  }
  setTimeout(function(){
    ponerVerbo();
  },500);
}

// primero boton de escucha 
first.addEventListener("click",function(){
  buttonEffect(isItRight_(first.innerHTML),this);
});

// segundo boton de escucha 
second.addEventListener("click", function(){
  buttonEffect(isItRight_(second.innerHTML),this);
});

// tercer boton de escucha 
third.addEventListener("click", function(){
  buttonEffect(isItRight_(third.innerHTML),this);
});

// cuarto boton de escucha 
fourth.addEventListener("click", function(){
  buttonEffect(isItRight_(fourth.innerHTML),this);
});




// se dan diferentes opciones para mostrar las respuestas 

function shuffleAnswers(array) {
  let numberOfAnswerButtons = array.length;
  let randomIndex;

  while (numberOfAnswerButtons != 0) {
    randomIndex = Math.floor(Math.random() * numberOfAnswerButtons);
    numberOfAnswerButtons--;
    [array[numberOfAnswerButtons], array[randomIndex]] = [
    array[randomIndex], array[numberOfAnswerButtons]];
  }

  return array;
}


// aqui verifica que la respuesta sea correcta 
function isItRight_(answer){
  return answer==rightAnswer?true:false;
}


// aqui se hace la funcion por si se selecciona una respuesta incorrecta 
function randomVerbo(notThisOne){
  theOne = Math.floor(Math.random()*verbos.length);

  return theOne == notThisOne?randomVerbo(notThisOne):theOne;
}

function ponerVerbo(){


  answerRoullete = shuffleAnswers(answerRoullete);

  let randomPosition = everyNumberOfVerbs[lastPosition];
  let imgText = "<img src='img/"+verbs[randomPosition]+".jpg' height:'140px' width='100px'>";

  // ===================================
  // aqui le damos estilo a los botones 
  // ===================================
  first.classList.add("btn","btn-outline-primary","btn-md");
  second.classList.add("btn","btn-outline-primary","btn-md");
  third.classList.add("btn","btn-outline-primary","btn-md");
  fourth.classList.add("btn","btn-outline-primary","btn-md");

  if (lastPosition >= 0){
    var just_position = lastPosition+1;
    verbsCounter.innerHTML = ""+just_position+" / "+numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: "+rightAnswersCounter;
    showVerb.innerHTML = verbs[randomPosition];
    showImage.innerHTML = imgText;

    showAudio.src = "audio/"+verbs[randomPosition]+".mp3";
    showAudio.play();

    first.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    second.innerHTML = !answerRoullete[1]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    third.innerHTML = !answerRoullete[2]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    fourth.innerHTML = !answerRoullete[3]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];

    rightAnswer = verbos[randomPosition];
    lastPosition =lastPosition - 1;
  }else{
    
    verbsCounter.innerHTML = "0 / "+numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: "+rightAnswersCounter;
    showVerb.innerHTML = "Thank you !";

    verbsContainer.innerHTML = "";
  }
}

