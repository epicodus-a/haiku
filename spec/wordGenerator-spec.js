import { HaikuGenerator } from '../src/HaikuGenerator';

describe("HaikuGenerator", function(){
  let reuseableWord;
  beforeEach(function(){
    reuseableWord = new HaikuGenerator(5, 7, 5);
});

  it("should assign a letter string value to a char code.", function(){
    expect(reuseableWord.one).toEqual(5);
  });

  it("should generate a lowercase letter from a to z", function(){
    expect(reuseableWord.generateLetter()).toEqual(jasmine.stringMatching(/[a-z]/));
  });

  it("should return number from one to ten", function(){
    // expect(reuseableWord.generateWordLength()).toBeNumber();
    expect(reuseableWord.generateWordLength()).toBeLessThan(11);
    expect(reuseableWord.generateWordLength()).toBeGreaterThan(0);
  });

  it("should generate word between length of one to 10", function(){
    // expect(reuseableWord.generateWord()).toBeShorterThan("abcdefghijk");
    expect(Array.isArray(reuseableWord.generateWord())).toBe(false);

  });

  it("should return number from three to thirteen", function(){
    // expect(reuseableWord.generateWordLength()).toBeNumber();
    expect(reuseableWord.generateSentenceLength()).toBeLessThan(14);
    expect(reuseableWord.generateSentenceLength()).toBeGreaterThan(2);
  });

  it("should generate a sentence between length of three to thirteen", function(){
    expect(typeof reuseableWord.generateSentence()).toEqual('string');

  });

  it("should return an array of length of three", function(){
    expect(reuseableWord.generateHaiku().length).toEqual(3);
  })
});
