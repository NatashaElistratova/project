const numbers = [];
const bmwPrice = ['1 000 000', '2 000 000', '3 000 000', '4 000 000'];
const audiPrice = [5000, 6000, 7000, 8000];

const clearInput = (input) => {
    input.value = '';
}

const showResult = () => {
    const resultBlock = document.getElementById('result');
    numbers.sort();

    resultBlock.innerHTML = numbers.sort((a, b) => b - a).join(' - ');
}

const addNumber = () => {
    const input = document.getElementById('testInput');
    numbers.push(Number(input.value));
    clearInput(input);
    console.log(numbers);
    showResult();
}

const setPrice = (el) => {
    const priceSelect = document.getElementById('price');
    let resultString = '';

    if(el.value === 'bmw') {
        bmwPrice.forEach(item => {
            resultString += `<option value="${item}">${item}</option>`
        })
    } else if (el.value === 'audi') {
        audiPrice.forEach(item => {
            resultString += `<option value="${item}">${item}</option>`
        }) 
    }

    priceSelect.innerHTML = resultString;
}

const calcPrice = (el) => {
    const resultBlock = document.getElementById('result');
    resultBlock.innerHTML = Number(el.value) * 2;
}








