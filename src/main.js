import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from "./haiku";
import { HaikuGenerator } from "./HaikuGenerator";



$(document).ready(function(){
  let haikug = new HaikuGenerator(5,7,5);
  let resArr = haikug.generateHaiku();

  $('#fakeHaiku').submit(function(event){
    event.preventDefault();

    $('#haikualike').click(function(){
      let hk = '';
      resArr.forEach(res => {
        hk += `<p class='lead'>${res}</p>`;
      });
      $(".output").html(hk);
    });

  });

  $('#isHaiku').submit(function(event){
    event.preventDefault();

    let haiku = new Haiku(resArr[0],resArr[1], resArr[2]);
    let result = haiku.isHaiku();
    if (result) {
      $('.output2').text("This is a beautiful haiku!");
    } else {
      $('.output2').text("This is not a haiku, try again.");
    }
  });
});
