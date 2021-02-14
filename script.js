const number = document.querySelector('#number');
const prevBtn = document.querySelector('#prev-btn');
const resetBtn = document.querySelector('#reset-btn');
const nextBtn = document.querySelector('#next-btn');

let count = 0;

prevBtn.addEventListener('click', () => {
    count = modifyCount(count, subtraction);
    number.textContent = count;
    let color = colorMod(count);
    number.style.color = color;
})

resetBtn.addEventListener('click', () => {
    count = 0;
    number.textContent = count;
    let color = colorMod(count);
    number.style.color = color;
})

nextBtn.addEventListener('click', () => {
    count = modifyCount(count, addition);
    number.textContent = count;
    let color = colorMod(count);
    number.style.color = color;
})

const subtraction = (number) => {
    return number - 1;
}

const addition = (number) => {
    return number + 1;
}

const modifyCount = (number, func) => {
    return func(number);
}

const colorMod = (number) => {
    if (number < 0) {
        return 'red'
    } else if (number > 0) {
        return 'green'
    } else {
        return 'black'
    }
}