let button = document.querySelector('button');
let adviceID = document.querySelector('h4');
let advice = document.querySelector('p');

const getAdvice = async function() {

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);

    adviceID.innerHTML = `advice #${data.slip.id}`;
    advice.innerHTML = `"${data.slip.advice}"`;
} 


button.addEventListener('click', getAdvice);

window.onload(getAdvice());

