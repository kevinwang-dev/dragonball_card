const gokuBtn = document.querySelector('.player1 button')
const vegeBtn = document.querySelector('.player2 button')
const resetBtn = document.getElementById('reset')
const goku = document.querySelector('.player1 img')
const vegeta = document.querySelector('.player2 img')
const ghealth = document.getElementById('ghealth')
const vhealthy = document.getElementById('vhealth')

let gokuLife = document.querySelector('.g-score');
let vegeLife = document.querySelector('.v-score')

const randAttack = () => {
    return Math.floor(Math.random() * 10) + 1;
}


const gokuAttack = () =>{
    // let randAttack = Math.floor(Math.random() * 10) + 1;
    vegeLife.textContent -= randAttack()
    vegeta.classList.toggle('effect')
    vhealth.value -= randAttack()

    if(vegeLife.textContent <= 0){
        vegeLife.textContent = 0;
        alert('Goku Won')
    }
}

const vegeAttack = () => {
    // let randAttack = Math.floor(Math.random() * 10) + 1;
    gokuLife.textContent -= randAttack()
    ghealth.value -= randAttack()
    goku.classList.toggle('effect')
    if(gokuLife.textContent <= 0){
        gokuLife.textContent = 0;
        alert('Vegeta Won')
    }
    
}

gokuBtn.addEventListener('click', gokuAttack)
vegeBtn.addEventListener('click', vegeAttack)
resetBtn.addEventListener('click', () => {
    gokuLife.textContent = 100;
    vegeLife.textContent = 100;
})

