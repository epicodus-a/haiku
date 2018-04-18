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
  //
  // seperateDoubleConsonant(aWord){
  //   let consonants = "bcdfghjklmnpqrstvwxz";
  //   this.inputArr(aWord).forEach()
  // }
}
