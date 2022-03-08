
var i = 0;text;
text = "I’m Osman Bah Freelance Graphics UI/UX Designer and Front-end Developer"
function typing() {
    if (i<text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,150); 
    }
}

typing();

const typeWriter = function(txtElment, words, wait=3000) {
    this.txtElment = txtElment;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

typeWriter.prototype.type=function () {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    }else{
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

        this.txtElment.innerHTML =  `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed /=2
        }

        if (!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait;
            this.isDeleting = true
            
        }else if(this.isDeleting && this.txt == ''){
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 200;
        }
    setTimeout(() => this.type(), 200)
    
}


document.addEventListener('DOMContentLoaded', init);


function init() {
    const txtElment = document.querySelector('.txt-type');
    const words = JSON.parse(txtElment.getAttribute('data-words'));
    const wait = txtElment.getAttribute('data-wait');

    new typeWriter(txtElment, words, wait)
    
}



