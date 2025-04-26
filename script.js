let switchBtn = document.querySelector('#btn')
let body = document.querySelector('#body')

switchBtn.addEventListener('click', ()=>{
   if(body.classList.contains('switch') === false) {
   switchBtn.style.color = 'white'
   body.classList.add('switch')

} else if(body.classList.contains('switch') === true) {
   switchBtn.style.color = 'black'
      body.classList.remove('switch')
   
}

})
