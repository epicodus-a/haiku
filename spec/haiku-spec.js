import {Haiku} from "../src/Haiku";

describe("Haiku", function(){
  debugger;
  let reuseableHaiku;
  beforeEach(function(){
    reuseableHaiku = new Haiku("toward those short trees", "we saw a hawk briliant", "On a day in ring");
  });

  // it("should have three lines when one instance created", function(){
  //   // let haiku = new Haiku('apple ', "banana", "orange");
  //   expect(reuseableHaiku.a).toEqual("apple");
  //   expect(reuseableHaiku.b).toEqual("banana");
  //   expect(reuseableHaiku.c).toEqual("orange");

  // });


  it("should return an array when a string provided", function () {
    // let reuseableHaiku = new Haiku("apple ", "banana", "orange");
    expect(Array.isArray(reuseableHaiku.inputArr(reuseableHaiku.a))).toBe(true);
  });

  it("should return the number of vowels in a string", function() {
    expect(reuseableHaiku.countVows('tea')).toEqual(2);
  });

  it("should return the number of vowels in a string, with one subtracted if there were an 'e' at the end'", function(){
    expect(reuseableHaiku.subtractOneForE('same')).toEqual(1);
  });


  it("should return the number of vowels in a string, with one subtracted if there were two consecutive vowels", function(){
    expect(reuseableHaiku.subtractOneFConstVowel("footqqaaii")).toEqual(3);
  });
  //
  it("should return the number of vowels in a string, with one added if there were two consecutive consonants", function(){
    expect(reuseableHaiku.addOneForConsecConst("appluue")).toEqual(3);
  });


  it("should return syllable count when a sentence is provided", function(){
    expect(reuseableHaiku.countInASentence("I am steven")).toEqual(4);
  });

  it("should return true if input is haiku", function(){
    expect(reuseableHaiku.isHaiku()).toBe(false);
  })

});
