const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvjWlgY3x7LVEdvOtzwP6MpSXYVQmeVXF0A&usqp=CAU", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvjWlgY3x7LVEdvOtzwP6MpSXYVQmeVXF0A&usqp=CAU",
                "https://static.vecteezy.com/system/resources/previews/005/411/290/non_2x/the-hibiscus-flower-isolated-on-white-background-free-photo.jpg",
                "https://static.vecteezy.com/system/resources/previews/005/411/290/non_2x/the-hibiscus-flower-isolated-on-white-background-free-photo.jpg",
                "https://media.istockphoto.com/id/1251528600/photo/white-camellia-flower-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kv67J3GcLEg6nwB74albY5DJ7MctZQTZFPpERIFX1Wk=",
                "https://media.istockphoto.com/id/1251528600/photo/white-camellia-flower-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kv67J3GcLEg6nwB74albY5DJ7MctZQTZFPpERIFX1Wk=",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xGk4yY5kjJ9h-6UGEoPNGn8Vkj1i76oU9A&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xGk4yY5kjJ9h-6UGEoPNGn8Vkj1i76oU9A&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_KYlFycKUgpjGLrDIBgajehBJ9f2Qa5ngg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_KYlFycKUgpjGLrDIBgajehBJ9f2Qa5ngg&usqp=CAU",
                "https://media.istockphoto.com/id/923267332/photo/chrysanthemum-isolated-on-white-deep-focus-no-dust-no-pollen.jpg?s=612x612&w=0&k=20&c=-PUevX7S_ByaYGx4hZv5zpLtzLDuEp_ZlKgmgo1064k=",
                "https://media.istockphoto.com/id/923267332/photo/chrysanthemum-isolated-on-white-deep-focus-no-dust-no-pollen.jpg?s=612x612&w=0&k=20&c=-PUevX7S_ByaYGx4hZv5zpLtzLDuEp_ZlKgmgo1064k=",
                "https://static6.depositphotos.com/1011812/635/i/450/depositphotos_6354967-stock-photo-pink-flower.jpg",
                "https://static6.depositphotos.com/1011812/635/i/450/depositphotos_6354967-stock-photo-pink-flower.jpg",
                "https://t4.ftcdn.net/jpg/02/38/34/81/360_F_238348192_6X6SHydlB62fxJCTJZJunMhtQCddEzdB.jpg",
                "https://t4.ftcdn.net/jpg/02/38/34/81/360_F_238348192_6X6SHydlB62fxJCTJZJunMhtQCddEzdB.jpg",
                ]

const backgroundImage = ["https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
            "https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg"
] 


let card 
const imageContainer =  document.querySelector('.image-container');
const flipCard = document.querySelector('.flip-card');
const flipCardInner = document.querySelector('.flip-card-inner');
const flipCardFront = document.querySelector('.flip-card-front');
const flipCardBack = document.querySelector('.flip-card-back');

let cardSet
let board = []
let rows = 4
let columns = 4

shufflecards();

let timerDuration = 60000; 
let timerStarted = false; 
let timerId; 

function startTimer() {
    let endTime = Date.now() + timerDuration;
    timerId = setInterval(function() {
        let remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(timerId);
            console.log("Time's up! You lose.");
        } else {
            console.log(`Time remaining: ${Math.ceil(remainingTime / 1000)} seconds`);
        }
    }, 1000);
}


for (let i = 0; i < images.length; i++) {
    div = document.createElement('div')
    div = document.createElement('div')
    img = document.createElement('img')
    backcard = document.createElement('img')
    img.src = images[i];
    backcard.src = backgroundImage[i];
    div.classList.add("flip-card-inner")
    img.classList.add("flowers");
    img.classList.add("flip-card-front");
    backcard.classList.add("flowers");
    backcard.classList.add("flip-card-back");
    imageContainer.appendChild(div)
    div.appendChild(img)
    div.appendChild(backcard)
    }




// for (let i = 0; i < images.length; i++) {
//     div = document.createElement('div') //flip-card = flowers
//         div = document.createElement('div') //flip-card-inner, 
//             div = document.createElement('div') //flip-card-front, fback
//                 backcard = document.createElement('img')
//             div = document.createElement('div') //flip-card-back, flowers
//                 imgs = document.createElement('img')

//     imgs.src = images[i];
//     backcard.src = backgroundImage[i];

//     div.classList.add("flip-card")
//         div.classList.add("flip-card-inner")
//         div.classList.add("flip-card-front")
//             backcard.classList.add("fback")
//         div.classList.add("flip-card-back")
//             imgs.classList.add("flowers")

//     imageContainer.appendChild(div) 
//     flipCard.appendChild(div) //flipinner ->flipcard
//     flipCardInner.appendChild(div) // flipcardfront -> flipinner
//     flipCardFront.appendChild(backcard) //fback.img -> flipcardfront
//     flipCardInner.appendChild(div) //flip-card-back -> flipinner
//     flipCardBack.appendChild(imgs)

    // backcard.classList.add("flowers");
    // div.appendChild(backcard)

    // }


    // function startGame() {
    //     for (let r = 0; r < rows; r++) {
    //         let row = [];
    //         for (let c = 0; c < columns; c++) {
    //             let images = cardSet.pop();
    //             row.push(images)
    //         }
    //     }
    // }

    let matches = 0
    let getCards1 
    let getCards2 
    
    const flowers = document.querySelectorAll('.flowers');
    flowers.forEach((flower) => {
        flower.addEventListener('click', function() {
            if (!timerStarted) {
                startTimer();
                timerStarted = true; 
            }

        if (getCards1 === undefined) {
            getCards1 = flower.getAttribute('src')
            console.log("Pick another!")
        } else {
            getCards2 = flower.getAttribute('src')
        }

                if (getCards1 === getCards2) {
                    matches++;
                    updateMatchCount();           
                    if (matches === 8) {
                        console.log('Winner') 
                        clearInterval(timerId);
                    } else {
                        console.log('keep trying')
                    }
                } 
                
                reset();         
        });
    });
            
        
        function reset() {
            if (getCards1 !== undefined && getCards2 !== undefined) {
               getCards1 = undefined;
               getCards2 = undefined;
            }
        }
        function updateMatchCount() {
            console.log(`Matches: ${matches}/8`)
        }


// var cards = document.querySelectorAll('.card');

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });



// window.onload = function() {
// }


// function shufflecard() 
// {
        // for (let i = 0; i < images.length; i++) {
        //         let j = Math.floor(Math.random() * images.length);
        //         let temp = images[i]; 
        //         images[i] = images[j];
        //         images[j] = temp;
        //     }
//         }    
        
        
// for (let i = 0; i < images.length; i++) {
//     console.log(imageContainer)
//     card.dataset.id = i;
//     card.style.backgroundImage = `url('${back}')`;
//     card.addEventListener('click',  function () {
//         console.log("click")
        // if (flippedCards.length < 2) {
        //     let card = event.target;
        //     card.style.backgroundImage = `url('${images[card.dataset.id]}')`;
        //     flippedCards.push(card);
        //     if (flippedCards.length === 2) {
        //         setTimeout(checkForMatch, 1000);
        //     }
        // }
    // })

    // imageContainer.appendChild(card);
    // }
    // function flipCard() {
    //     console.log()
        // if (flippedCards.length < 2) {
        //     let card = event.target;
        //     card.style.backgroundImage = `url('${images[card.dataset.id]}')`;
        //     flippedCards.push(card);
        //     if (flippedCards.length === 2) {
        //         setTimeout(checkForMatch, 1000);
        //     }
        // }
    // }


    // function checkForMatch() {
    //     if (flippedCards[0].dataset.id === flippedCards[1].dataset.id) {
    //         matchedCards.push(flippedCards[0]);
    //         matchedCards.push(flippedCards[1]);
    //         flippedCards = [];
    //     } else {
    //         flippedCards[0].style.backgroundImage = `url('${back}')`;
    //         flippedCards[1].style.backgroundImage = `url('${back}')`;
    //         flippedCards = [];
    //     }
    // }
    
    function shufflecards() {
        for (let i = 0; i < images.length; i++) {
            let j = Math.floor(Math.random() * images.length);
            let temp = images[i]; 
            images[i] = images[j];
            images[j] = temp;
        }
    }