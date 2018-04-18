import {Haiku} from "../src/Haiku";

describe("Haiku", function(){
  let reuseableHaiku;
  beforeEach(function(){
    reuseableHaiku = new Haiku("apple ", "banana", "orange");
  });

  it("should have three lines when one instance created", function(){
    // let haiku = new Haiku('apple ', "banana", "orange");
    expect(reuseableHaiku.line1).toEqual("apple ");


  });

});
