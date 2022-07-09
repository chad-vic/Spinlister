// getting elements
const modal = document.querySelector('.mobile-modal')
const closeBtn = document.querySelector('.close-modal-btn')
const openBtn = document.querySelector('.open-home-modal-btn')
const rentText = document.querySelector('.bg-text')
const backgroundImage = document.querySelector('.home-hero')
const backgroundBtns = document.querySelectorAll('.bg-btn')

// open modal function
openBtn.addEventListener('click', () => {
    modal.style.display = "block"
})

// close modal function
closeBtn.addEventListener('click', () => {
    modal.style.display = "none"
})

// background carousel
backgroundBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (btn.classList.contains('bike')) {
            clearAll()
            backgroundImage.style.backgroundImage = 'url(./images/bike.jpg)'
            e.currentTarget.classList.add('active-bg')
            rentText.innerHTML = "Bike"
        }
        else if (btn.classList.contains('surf')) {
            clearAll()
            backgroundImage.style.backgroundImage = 'url(./images/sup.jpg)'
            e.currentTarget.classList.add('active-bg')
            rentText.innerHTML = "sup"
        }
        else if (btn.classList.contains('snow')) {
            clearAll()
            backgroundImage.style.backgroundImage = 'url(./images/board.jpg)'
            e.currentTarget.classList.add('active-bg')
            rentText.innerHTML = "board"
        }
    })
})

//set all to regular
const clearAll = () => {
    backgroundBtns.forEach((btn) => {
        btn.classList.remove('active-bg')
    })
}


