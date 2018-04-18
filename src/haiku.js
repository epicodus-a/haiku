// export {Haiku};

export class Haiku{
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line2 = line3;
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
    let coutn1 = this.subtractOneFConstVowel(aStr);
    let count2 = 0;
    for(let i = 0; i < aStr.length - 1; i++){
      if(aStr[i].match(/[bcdfghjklmnpqrstvwxz]/gi) && aStr[i] === aStr[i+1]){
        count2 ++;
      }
    }
    return coutn1 + count2;
  }

  countInASentence(aSentence){
    let count = 0;
    let sentenceArr = this.inputArr(aSentence);
    sentenceArr.forEach(word => {
      count += this.addOneForConsecConst(word);
    });
    return count;
  }


  // doubleCons(start=0, aWord='appe'){
  //   // aWord: a string with one pair of consecutive consonants
  //   // return: an array of words which does not contain consecutive consonants
  //   debugger;
  //   let consonants = "bcdfghjklmnpqrstvwxz";
  //   let singleConsWordsArr = [];
  //   let doubleConsonant = false;
  //   for(let i = start; i < aWord.length - 1 ; i ++){
  //     if(consonants.indexOf(aWord[i]) !== -1 ){
  //       if(consonants.indexOf(aWord[i+1]) !== -1){
  //         singleConsWordsArr.push(aWord.substring(0, i+1));
  //         start = aWord.substring(0, i+1).length;
  //         // aWord = aWord.substring(i+1);
  //         // doubleCons(start, aWord);
  //         // singleConsWordsArr.push(aWord.substring(i+1));
  //         doubleConsonant = true;
  //       }
  //     }
  //   }
  //   if(!doubleConsonant){
  //     singleConsWordsArr.push(aWord);
  //   }
  //
  //   return [singleConsWordsArr, start];
  // }
  //
  //
  // mutliDoubleCons(start, aWord){
  //   // aWord: a string with more than one pair of consecutive consonants
  //   // return : an array of words which does not contain consecutive consonants
  //   let res = [];
  //   let returnVal;
  //   while(start < aWord.length){
  //     returnVal = doubleCons(start, aWord));
  //     start = returnVal[1];
  //     res.extend(returnVal[0]);
  //   }
  //   return res;
  // }

}
