// let username;
// username = window.prompt("whats your usename?");

// console.log(username);
// CLASSIC WINDOW PROMPT WAY

// PROFESSIONAL WAY=

let username;

document.getElementById("mySubmit").onclick = function () {
    // everything gonna act if you click submit button
    username = document.getElementById("myText").value;
    document.getElementById("welcome").textContent = `Hello ${username}`;
console.log
}