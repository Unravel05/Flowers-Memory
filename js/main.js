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

const back = ["https://thumbs.dreamstime.com/b/basket-isolated-illustration-white-background-33516377.jpg",
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

// const cards = document.querySelectorAll('.flowers');

// var rows = 4;
// var columns = 4;

var flippedCard = [];


const card = document.querySelectorAll('flores')
const imageContainer =  document.querySelector('.image-container');
// const button = document.querySelectorAll('button')

shufflecards();



for (let i = 0; i < images.length; i++) {
    let card = document.createElement('img')
    card.src = images[i];
    card.classList.add("flowers");
    imageContainer.appendChild(card)
}

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

// for (let i = 0; i < images.length; i++) {
//     let card = document.createElement('img')
//     card.src = back[i];
//     card.classList.add("flowers");
//     imageContainer.appendChild(card)
// }

window.onload = function() {
}


// function shufflecard() 
// {
//         for (let i = 0; i < images.length; i++) {
//                 let j = Math.floor(Math.random() * images.length);
//                 let temp = images[i]; 
//                 images[i] = images[j];
//                 images[j] = temp;
//             }
//         }    
        
        
for (let i = 0; i < images.length; i++) {
    card.dataset.id = i;
    card.style.backgroundImage = `url('${back}')`;
    card.addEventListener('click', flipCard);
    imageContainer.appendChild(card);
    }

    function flipCard() {
        if (flippedCards.length < 2) {
            let card = event.target;
            card.style.backgroundImage = `url('${images[card.dataset.id]}')`;
            flippedCards.push(card);
            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 1000);
            }
        }
    }

    function checkForMatch() {
        if (flippedCards[0].dataset.id === flippedCards[1].dataset.id) {
            matchedCards.push(flippedCards[0]);
            matchedCards.push(flippedCards[1]);
            flippedCards = [];
        } else {
            flippedCards[0].style.backgroundImage = `url('${back}')`;
            flippedCards[1].style.backgroundImage = `url('${back}')`;
            flippedCards = [];
        }
    }
    
    function shufflecards() {
        for (let i = 0; i < images.length; i++) {
            let j = Math.floor(Math.random() * images.length);
            let temp = images[i]; 
            images[i] = images[j];
            images[j] = temp;
        }
    }