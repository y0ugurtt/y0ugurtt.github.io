document.body.onclick = (event) => {
    const elem = event.target;
    if (elem.classList.contains('copy')){
        console.log(elem);
        navigator.clipboard.writeText('0x1244f74C9e9B8B2422691B9958bAD7a860014b05')
    }
}
// let tg = window.Telegram.WebApp;
// let send = document.getElementsByClassName("button_submit");

// send.addEventListener("click", () => {
//     document.getElementById("form").style.display = "none";
//     console.log(tg.initDataUnsafe.user.first_name)
// })
document.body.onclick = (event) => {
    const elem = event.target;
    if (elem.classList.contains('button_submit')){
        console.log(elem);
        alert("Error") 
    }
}
document.getElementsByClassName('button_submit').onclick=function(){ alert("text") }