const showVerbs = document.getElementById('showVerbs');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-counter');
const verbsContainer = document.getElementById('verbs-container');
 
 const first = document.getElementById('first-verb');
 const second = document.getElementById('second-verb');
 const third = document.getElementById('third-verb');
 const fourth = document.getElementById('fourth-verb');


//const numberOfVerbs = verbs.lenght;

let answerRoullete = [0,1,1,1];
let everyNumberOfVerbs = [];
let rightAnswer;
let allRightAnswer;

next.addEventListener('click', function(){
    //ponerVerbo();
    //next.style.display = 'none'
    alert('Buenas, Buenaaaaaas')
});

function ponerVerbo(){
    showVerb.innerHTML = "Deposita 200 bitcoins para jugar"
};