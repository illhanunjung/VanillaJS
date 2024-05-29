const clock = document.querySelector("h2#clock");

// 시간형태 2자리씩 채워주기
function getClock() {
    const date = new Date();
    const hours = (String(date.getHours()).padStart(2,"0"));
    const APm  = (hours < 13) ? "AM":"PM";
    const Hours = (hours < 13) ? hours : (hours-12) ;
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Hours}:${Minutes}:${Seconds} ${APm}`;
}
getClock()
setInterval(getClock,1000);



// // Interval 5초마다
// function sayHello(){
//     console.log("hello");
// }
// setInterval(sayHello, 5000);


// // timeout 3초후 실행
// function sayHello(){
//     console.log("hello");
// }
// setTimeout(sayHello,3000);


// function getClock() {
//     const date = new Date();
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// getClock()
// setInterval(getClock,1000);

