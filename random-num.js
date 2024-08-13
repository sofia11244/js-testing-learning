const myButton = document.getElementById("random-num-button");
const myLabel = document.getElementById("random-num-label");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function () {
    randomNum = Math.floor(Math.random() * (max - min)) + min;
    myLabel.textContent = randomNum;
}









// let randomNum = Math.floor(Math.random() * (max - min)) + min;






// let randomNum = Math.random();
// THIS WILL GIVE YOU RANDOM NUM 0-1


// let randomNum = Math.random()*6;
// TO GIVE US A NUMBER BETWEEN 1-6


// let randomNum = Math.floor(Math.random()*6);
// TO GIVE US WITHOUT DECIMAL PORTION

// let randomNum = Math.floor(Math.random()*6)+1;
// ITS GONNA BE BETWEEN 0-5. IF YOU NEED 1-6 ADD MIN BE 1.


// let randomNum = Math.floor(Math.random() * 100) + 1;
// TO BE BETWEEN 1-100 ADD *100






// **TO MAKE NUM BETWEEN IN "CERTAIN" RANGE**
// add const min and const max


// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * max) + min;
//  ADDING MANTH.RANDOM.MAX PLUS MINN MAKES YOUR ANSWER FAR THEN YOUR RANGE

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);


