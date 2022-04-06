(function(){

const sliders = [...document.querySelectorAll('.proyects__body')];

const buttonNext = document.querySelector('#next');
 
const buttonBefore = document.querySelector('#before');

buttonNext.addEventListener('click', ()=>{
    changePosition(1);
});

buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
});

const changePosition = (add)=>{
    const currentProyects = document.querySelector('.proyects__body--show').dataset.id;
    value = Number(currentProyects);
    value+= add;

    sliders[Number(currentProyects)-1].classList.remove('proyects__body--show');

    if(value === sliders.length+1 || value === 0){
        value = value ===0 ? sliders.length : 1;
    }

    sliders[value-1].classList.add('proyects__body--show');





}

})();