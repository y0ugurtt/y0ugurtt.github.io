document.body.onclick = (event) => {
    const elem = event.target;
    if (elem.classList.contains('copy')){
        console.log(elem);
        navigator.clipboard.writeText('0x1244f74C9e9B8B2422691B9958bAD7a860014b05')
    }
}