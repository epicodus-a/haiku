// export {Haiku};

class Haiku{
  constructor(a='', b='', c=''){
    this.a = a;
    this.b = b;
    this.c = c;
  }

  inputArr(aStr){
    // aStr: a string
    // return: an array
    return aStr.split(" ");
  }

  //count vowels
  countVows(aStr){
    return aStr.match(/[aeiou]/gi).length;
  }

  //subtract 1 if e were at the end a word
  subtractOneForE(aStr){
    let vowelsCount = this.countVows(aStr);
    if(aStr.endsWith('e')){
      vowelsCount --;
    }
    return vowelsCount;

  }

 //return the number of vowels in a string, with one subtracted if there were two consecutive vowels
  subtractOneFConstVowel(aStr){
    let vowelCount = this.subtractOneForE(aStr);
    if(aStr.match(/aa|oo|ee|ii|uu/gi)){
      return vowelCount - aStr.match(/aa|oo|ee|ii|uu/gi).length
    }else{
      return vowelCount;
    }
  }

  //re turn the number vowels in a string with one added if there were two consecutive consonants
  addOneForConsecConst(aStr){
    let count1 = this.subtractOneFConstVowel(aStr);
    let count2 = 0;
    for(let i = 0; i < aStr.length - 1; i++){
      if(aStr[i].match(/[bcdfghjklmnpqrstvwxz]/gi) && aStr[i] === aStr[i+1]){
        count2 ++;
      }
    }
    return count1 + count2;
  }

  countInASentence(aSentence){
    let count = 0;
    let sentenceArr = this.inputArr(aSentence);
    sentenceArr.forEach(word => {
      count += this.addOneForConsecConst(word);
    });
    return count;
  }

  // check is_haiku
  isHaiku(){
    return this.countInASentence(this.a) === 5 && this.countInASentence(this.b)=== 7 && this.countInASentence(this.c) === 5;
  }
}

export {Haiku};
