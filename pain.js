const op = document.querySelector('.open')
const m = document.querySelector('.m')
const yes = document.querySelector('.yes')
const no = document.querySelector('.no')
op.addEventListener('click' , function(){
    m.classList.remove('hide')
    m.classList.add('show')

})

yes.addEventListener('click' , function(){
    m.classList.remove('show')
    m.classList.add('hide')
})

no.addEventListener('click' , function(){
    m.classList.remove('show')
    m.classList.add('hide')
})