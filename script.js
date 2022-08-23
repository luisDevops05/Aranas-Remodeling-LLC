let phoneNumber = document.getElementById('phone')

let email = document.getElementById('m')

phoneNumber.addEventListener('click',function(){
  event.preventDefault()
})
email.addEventListener('click',function(){
  event.preventDefault()
})







document.querySelectorAll('.image-container img').forEach(image =>{
  image.onclick =()=>{
    document.querySelector('.popup-image').style.display = 'block'
    document.querySelector('.popup-image img').src = image.getAttribute('src')
  }
})

document.querySelector('.popup-image span').onclick = ()=>{
    document.querySelector('.popup-image').style.display='none'
}