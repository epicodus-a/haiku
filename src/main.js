import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from "./haiku";
import { HaikuGenerator } from "./HaikuGenerator";



$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    debugger;
    let a = $('input:text[name=line1]').val();
    let b = $('input:text[name=line2]').val();
    let c = $('input:text[name=line3]').val();
    console.log(c);

    let haiku = new Haiku(a, b, c);

    let result = haiku.isHaiku();

    if (result) {
      $('.output').text("This is a beautiful haiku!");
    } else {
      $('.output').text("This is not a haiku, try again.");
    }
  });
});
