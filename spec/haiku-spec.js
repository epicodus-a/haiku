import {Haiku} from "../src/Haiku";

describe("Haiku", function(){
  debugger;
  let reuseableHaiku;
  beforeEach(function(){
    reuseableHaiku = new Haiku("apple ", "banana", "orange");
  });

  it("should have three lines when one instance created", function(){
    // let haiku = new Haiku('apple ', "banana", "orange");
    expect(reuseableHaiku.line1).toEqual("apple ");


  });
  it("should return an array when a string provided", function () {
    // let reuseableHaiku = new Haiku("apple ", "banana", "orange");
    expect(Array.isArray(reuseableHaiku.inputArr(reuseableHaiku.line1))).toBeTruthy();
  });

  it("should return a word that does not have consecutive consonants", function() {
    expect(reuseableHaiku.doubleCons("appe").length).toEqual(2);
  });
});
