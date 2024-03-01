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
const imageContainer = document.querySelector('.image-container');
const flipCard = document.querySelector('.flip-card');
const flipCardInner = document.querySelector('.flip-card-inner');
const flipCardFront = document.querySelector('.flip-card-front');
const flipCardBack = document.querySelector('.flip-card-back');

shufflecards();

let timerDuration = 60000;
let timerStarted = false;
let timerId;

function startTimer() {
    let endTime = Date.now() + timerDuration;
    timerId = setInterval(function () {
        let remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(timerId);
            timerDisplay.innerText = "Time's up!";
        } else {
            timerDisplay.innerText = `Timer: ${Math.ceil(remainingTime / 1000)} seconds`;        }
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
    backcard.setAttribute('id', `basket${[i]}`);
    backcard.classList.add("flowers");
    backcard.classList.add("flip-card-back");
    imageContainer.appendChild(div)
    div.appendChild(img)
    div.appendChild(backcard)
}


const flipCards = document.querySelectorAll('.flip-card-inner');


flipCards.forEach((flipCard) => {
    flipCard.addEventListener('click', function () {
        flipCard.classList.add('cardselected')
    });
});

let cardClickedCount = 0

let matches = 0
let getCards1 
let getCards2


const flowers = document.querySelectorAll('.flip-card-inner');
flowers.forEach((flower) => {
    flower.addEventListener('click', function () {
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }
        trackCardClick(flower)
    });
});


function trackCardClick(flower) {
    console.log('inside track click')
    cardClickedCount++;
    if (cardClickedCount % 2 === 0) {
        matching(flower);
    } else {
        getCards1 = flower
    }
}

function matching(flower) {
    getCards2 = flower.children[0].getAttribute('src')
    
    if (getCards1.children[0].getAttribute('src') === getCards2) {
        matches++;
            if (matches === 8) {
                showResult(true); 
                clearInterval(timerId);
            }
            } else {
                setTimeout(function () {
                    flower.classList.remove('cardselected')
                    getCards1.classList.remove('cardselected')
                }, 1000);
            }
    reset();
}

function reset() {
    if (getCards1 !== undefined && getCards2 !== undefined) {
    }
}

result();

function showResult(won) {
    const pickFlower = document.getElementById('pickFlower');
    const flawless = document.getElementById('flawless');

    if (won) {
        pickFlower.style.display = 'none';
        flawless.style.display = 'block';
    } else {
        pickFlower.style.display = 'block';
        flawless.style.display = 'none';
    }
}


showResult(false);

function shufflecards() {
    for (let i = 0; i < images.length; i++) {
        let j = Math.floor(Math.random() * images.length);
        let temp = images[i];
        images[i] = images[j];
        images[j] = temp;
    }
}
