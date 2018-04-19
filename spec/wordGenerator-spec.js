import { WordGenerator } from '../src/wordGenerator';

describe("WordGenerator", function(){
  let reuseableWord;
  beforeEach(function(){
    reuseableWord = new WordGenerator(5, 7, 5);
});


it("should assign a letter string value to a char code.", function(){
  expect(reuseableWord.one).toEqual(5);
});

});
