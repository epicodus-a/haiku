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


  doubleCons(aWord){
    // aWord: a string
    // return: an array of words which does not contain consecutive consonants
    debugger;
    let consonants = "bcdfghjklmnpqrstvwxz";
    let singleConsWordsArr = [];
    let doubleCons = false;
    for(let i = 0; i < aWord.length - 1 ; i ++){
      if(consonants.indexOf(aWord[i]) !== -1 ){
        if(consonants.indexOf(aWord[i+1]) !== -1){
          singleConsWordsArr.push(aWord.substring(0, i+1));
          singleConsWordsArr.push(aWord.substring(i+1));
          doubleCons = true;
        }
      }
    }
    if(!doubleCons){
      singleConsWordsArr.push(aWord);
    }
    return singleConsWordsArr;
  }

}
