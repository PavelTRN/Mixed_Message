// Function random number
const randomNum = (num) => {
    return Math.floor(Math.random() * num);
};

// Message object
const message = {
    day : ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    mood : ['good', 'funny', 'bad', 'evil', 'neutral', 'calm', 'concerned'],
    advice : ['to drink coffe', 'eat', 'relax', 'to see a movie', 'take a walk in the park', 'talk to a friend', 'read to book']
};

const randomMessage = () => {
    let randomDay = randomNum(7);
    let randomMood = randomNum(7);
    let randomAdvice = randomNum(7);
    return  `It's ${message.day[randomDay]} and you're in a ${message.mood[randomMood]} mood? Then I advise you to ${message.advice[randomAdvice]}`;
};
console.log(randomMessage());