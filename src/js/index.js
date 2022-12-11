const buttonAbout = document.querySelector('.about__button');
const buttonFooter = document.querySelector('.footer__button');
const pageWidht = document.documentElement.scrollWidth;

if(pageWidht < 767) {
    buttonAbout.innerHTML = String.fromCodePoint(0x1F44C)
    buttonFooter.innerHTML = String.fromCodePoint(0x1F44C)
}

function submitMessage() {
    if(pageWidht < 767) {
        this.innerHTML = String.fromCodePoint(0x1F192)
    } else {
        this.textContent = 'Круто, спасибо за доверие!';
    }
};

buttonAbout.addEventListener('click', submitMessage);
buttonFooter.addEventListener('click', submitMessage);
