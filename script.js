const inputPoem = document.getElementById('poem-input');
const buttonPoem = document.getElementById('poem-btn');
const poem = document.getElementById('poem');

const inputIdea = document.getElementById('idea-input');
const buttonIdea = document.getElementById('idea-btn');
const idea = document.getElementById('idea')


const apiURL = 'https://random-word-api.herokuapp.com/all'


// FUNCTIONS

// Get API
async function getWords() {
    const res = await fetch(`${apiURL}`);
    const data = await res.json();

    console.log(data)
    return data
}

function writePoem(poemArray){

    poemArray.forEach((word, id) => {
        if([id +1]% 5 !== 0) {
            poem.innerHTML += `${word} `;
        }else {
            poem.innerHTML += `${word}, <br />`;
        }
        
    })
}


// Get random word from data/array
function getRandom() {

    getWords();
    let poemLength = inputPoem.value;
    let poemArray = [];

    for(let i = 0; i < poemLength; i++){
        let word = data[Math.floor(Math.random() * data.length)]  // random element froom array
        poemArray.push(word);
    }
    console.log(poemLength)
    console.log(poemArray)
    writePoem(poemArray);  
}

// Events
//button for poem
buttonPoem.addEventListener('click', getRandom)

// button for idea
// buttonIdea.addEventListener('click', )


