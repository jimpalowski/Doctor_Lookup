import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#doctorSearch').click(function() {
    let doctor = $('#doctor').val();
    $('#location').val("");

    let request = new XMLHttpRequest();

    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.41%2C100&user_location=37.773%2C-122.413&gender=male&skip=0&limit=10&user_key=${process.env.API_KEY}`

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
        console.log("The Response is:" + response);
      }
    }

    request.open("GET", url, true);
    request.send();


      let getElements = function(response) {
        console.log(response);
        $('.showDoctors').append(`<h1>Your search results for ${doctor}: </h1>`);
        $('.showDoctors').append(`<p>${response.data.profile}</p>`)
      }
  });
});
