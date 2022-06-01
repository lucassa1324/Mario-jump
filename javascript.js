const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds1');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 550)

}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //acessa o estilo que foi computado do mario
    // o + vai converter a string para number e o 
    
    
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'image/game-over.png' 
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
        //para o loop  
    }
    
}, 10);

document.addEventListener('keydown', jump);