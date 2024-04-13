const openNav = document.querySelector('.sideNav')
const menuNav = document.querySelector('.menu')
const closeNav = document.querySelector('.close')

menuNav.addEventListener('click', () =>{
   openNav.classList.add('sideview')
   closeNav.classList.add('closenow')
})

closeNav.addEventListener('click', () =>{
    openNav.classList.remove('sideview')
    closeNav.classList.remove('closenow')
 })


//display pictures for larger screen
 const bigpic = document.querySelector('#biggerpic')
 const smallImgs = document.querySelectorAll('.smallimg')


  smallImgs[0].onclick = function(){
     bigpic.src = smallImgs[0].src
  }

  smallImgs[1].onclick = function(){
    bigpic.src = smallImgs[1].src
   
 }

 smallImgs[2].onclick = function(){
    bigpic.src = smallImgs[2].src
 }

    
 smallImgs[3].onclick = function(){
    bigpic.src = smallImgs[3].src
 }


/*const nextpic = document.querySelector('.next')

nextpic.addEventListener('click', () =>{
   bigpic.src = smallImgs[0].src + 1
   }
   
})*/



//display pictures for mobile screen
const myImages = [
   './images/image-product1.jpg',
   './images/image-product2.jpg',
   './images/image-product3.jpg',
   './images/image-product4.jpg',
]

let currentIndex = 0
const nextpic = document.querySelector('.next')
const previouspic = document.querySelector('.previous')
const gallerypic = document.getElementById('biggerpic')


function displayPicture(){
   gallerypic.src = myImages[currentIndex]
}

function nextpicDisplay(){
   currentIndex = (currentIndex + 1) % myImages.length
   displayPicture()
}


function previouspicDisplay(){
   currentIndex = (currentIndex - 1 + myImages.length) % myImages.length
   displayPicture()
}

previouspic.addEventListener('click', previouspicDisplay)
nextpic.addEventListener('click', nextpicDisplay)

//displayPicture()

//-, + and number event functionalities

const decreaseMe = document.getElementById('decreaseNow')
const increaseMe = document.getElementById('increaseNow')
const numberCounter = document.getElementById('nums')


increaseMe.addEventListener('click', countingUp)
decreaseMe.addEventListener('click', countingDown)

function countingUp(){
   //numberCounter.textContent = parseInt(numberCounter.textContent) + 1
   numberCounter.innerHTML = parseInt(numberCounter.innerHTML) + 1
}

function countingDown(){
   if (numberCounter.textContent>0) {
      numberCounter.innerHTML = numberCounter.innerHTML - 1
      //numberCounter.textContent = numberCounter.textContent - 1
   } else {
      numberCounter.innerHTML = 0
   }
}

const cartprocess = document.querySelector('.cartinfoDisplay')
const pricetag = document.querySelector('.amounttopay')
const cartbutton = document.querySelector('.cart-button')
const cartdiv = document.querySelector('.cart-Mart')
const cartCounter = document.querySelector('.cart-counter')
const numcounter2 = document.querySelector('.center-0')


cartbutton.addEventListener('click', addItems)
cartdiv.addEventListener('click', cartdivDisplay)

function addItems(){
 cartCounter.textContent=parseInt(cartCounter.textContent)+parseInt(numcounter2.textContent)
 console.log(cartCounter.textContent)
 numcounter2.textContent===parseInt(numcounter2.textContent)
 pricetag.textContent===parseInt(pricetag.textContent)
 cartCounter.textContent===parseInt(cartCounter.textContent)

 let totalamountpaid = parseInt(pricetag.textContent) * parseInt(numcounter2.textContent)

 const cartshowdiv = document.createElement('div')
 cartshowdiv.className = 'cart-information '
 cartshowdiv.innerHTML = `
 <div class="smalldisplay"></div>
 <div class="myinfo">
     <p class="info-text">fall limited Edition sneakers</p>

     <p>$<span class="amounttopay">125</span>X<span class="itemselected">${numcounter2}</span> <span class="freespace">$<span class="totalprice">${totalamountpaid}</span></span></p>

     <div class="delete">
         <img src="./images/icon-delete.svg" alt="">
     </div>`

     cartprocess.appendChild(cartshowdiv)

     if (cartCounter.textContent) {
      cartCounter.textContent = 0
     } else {
      cartCounter.textContent = parseInt(cartCounter.textContent) +  parseInt(numcounter2.textContent)
     }

}



/*function cartdivDisplay(){
   const cartemptynow = document.querySelector('.cart-scanty')
const cartModalDiv = document.querySelector('#cart-modalbox')
const container = document.querySelector('#container-cover')

container.addEventListener('click', carttakeAway)
function carttakeAway(){
   container.style.display = 'none'
}

if (cartCounter.textContent > 0) {
   cartModalDiv.style.display = 'block'
   cartprocess.style.display = 'block'
   cartemptynow.style.display = 'none'
} else {
   cartModalDiv.style.display = 'block'
   cartprocess.style.display = 'none'
   cartemptynow.style.display = 'block'
}

}*/