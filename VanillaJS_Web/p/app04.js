// const loginForm = document.getElementById("login-form");    
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     // console.dir("Hello " + loginInput.value);
//     if(username === "") {
//         alert("plz write U'r name :) ");
//     }else if(username.length > 15){
//         alert("U'r name is TOO LONG XD");
//     }
// }
// loginButton.addEventListener("click",onLoginBtnClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// //--LINK
// const link = document.querySelector("a");

// function onLoginSubmit(){
//     const username = loginInput.value;
//     console.log(username);
// }

function onLoginSubmit(event){
    event.preventDefault(); // BLOCK REFRESH
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY,username); //name of item, value
    // greeting.innerText = `Hello ${username}!`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // greeting.innerText = `Hello ${savedUsername}!`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}


// //--LINK default동작을 막고 function을 실행한후 default동작 실행함
// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
//     alert("CLICKED");
// }


// //--LINK
// link.addEventListener("click",handleLinkClick);
