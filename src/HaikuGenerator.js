
class HaikuGenerator {
  constructor (one, two, three) {
  this.one = one;
  this.two = two;
  this.three = three;
  }

  generateLetter(){
    return String.fromCharCode(Math.floor(Math.random()*26 + 97));
  }

  generateWordLength(){
    return Math.floor(Math.random()*10+1);
  }

  generateWord(){
    let res = "";
    let vow = "aeiou";
    let len = this.generateWordLength();
    for(let i = 0; i < len; i++){
      res += this.generateLetter();
    }

    if(res.match(/[a-z]/gi)){
      res += vow[Math.floor(Math.random()*5)];
    }

    return res;
  }

  generateSentenceLength(){
    return Math.floor(Math.random()*10+3);
  }

  generateSentence(){
    let sen = "";
    let len = this.generateSentenceLength();
    for(let i = 0; i < len; i++){
      sen += this.generateWord() + " ";
    }
    return sen;
  }

  generateHaiku(){
    debugger;
    let haiku = [];
    for(let i = 0; i < 3; i++){
      haiku.push(this.generateSentence());
    }
    return haiku;
  }

}



export { HaikuGenerator };
