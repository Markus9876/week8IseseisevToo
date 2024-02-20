const userInput = document.querySelector('#userInput');
const btnPrint = document.querySelector('button');
const resultList = document.querySelector('#resultPrints');

btnPrint.addEventListener('click', () => {
    resultList.innerHTML = '';
    const userInputToPrint = "I am awesome!";

    for(let i = 0; i < 10; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = `${i + 1}. ${userInputToPrint}`;
        resultList.appendChild(newLi);
    }
    
});