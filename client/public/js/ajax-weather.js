$('.menu .item').tab();

// var zip;
// function getZip(form){
  // $("#filtersearch").on("click", function(e){
  //   e.preventDefault();
  //   zip = form.find("[name=zip]").val();
  //   $(".modal-zip").fadeOut();
  //   getData(zip);
  // })



// }

var setGlobalEmptyState = function() {
  $('.content').each(function(i, el) {
    var $content = $(el);
    if (isEmpty($content)) {
      var noEvents = $("<h3>").text("No Events to Display");
      noEvents.appendTo($content);
    }
  })
}

function getData(zip){
  var key = "3cf4bf019f05b262b3e7ae8f899feebe"

  // query the API here!
  $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zip + ',us&units=imperial&cnt=7' + '&APPID=' + key, function(data){
    console.log(data);
    var allDates = data.list;

    for (var i = 0; i < allDates.length; i++) {
      var singleDate = allDates[i];

      createWeatherAccordian(i,data,singleDate);
    }

    $(".city-zip").text(data.city.name);

  });

}

function isEmpty( el ){
  return !$.trim(el.html())
}

function createWeatherAccordian(index,data,singleDate){

  $("#data-accordion").fadeIn();

  var date = singleDate.dt;

  var newTimeStamp = new Date();
  newTimeStamp.setTime(date*1000); // javascript timestamps are in milliseconds
  date = newTimeStamp.toDateString();

  console.log(date);



  var temp = Math.round(singleDate.temp.day);
  var weather = singleDate.weather;
  var weatherType = singleDate.weather[0].main;
  var weatherIcon = weather[0].icon + ".png";
  var minTemp = Math.round(singleDate.temp.min);
  var maxTemp = Math.round(singleDate.temp.max);
  var $mainDiv = $("#data-accordion");
  var icon = $("<i class='dropdown icon'></i>")
  var $weatherTab = $("<div>").addClass("title");

  $weatherTab.appendTo($mainDiv);
  icon.appendTo($weatherTab);

  var date = $('<h2>').text(date + " : ");

  var weatherIconImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + weatherIcon);
  console.log(weatherIconImg);

  var iconDiv = $('<span>').addClass("weather-image").append(weatherIconImg);
  var weatherTypeDiv = $('<span>').addClass("weather-type").append(weatherType);

  var temperature = $('<h2>').text(temp + "˚");
  var min = $("<span>").text("Low " + minTemp + "˚");
  var max = $("<span>").text("High " + maxTemp + "˚");
  $weatherTab.append(date, temperature, iconDiv, weatherTypeDiv);


  var $eventDiv = $("<div>").addClass("content");


  // ***********************
  // event data should go into between the parenthesis below
  // ***********************

  if (index===0){
      $weatherTab.addClass('active');
      $eventDiv.addClass('active day1');
    }
    if (index===1){
      $eventDiv.addClass('day2');
    }
    if (index===2){
      $eventDiv.addClass('day3');
    }
    if (index===3){
      $eventDiv.addClass('day4');
    }
    if (index===4){
      $eventDiv.addClass('day5');
    }
    if (index===5){
      $eventDiv.addClass('day6');
    }
    if (index===6){
      $eventDiv.addClass('day7');
    }
    if (index===7){
      $eventDiv.addClass('day3');
    }
    $eventDiv.appendTo($mainDiv);

  }


function empty(){
  if( $('.content').is(':empty') ) {
    $(".content").text("No events available.");
  }else {
    $(".content").text("Insert Event Here");
  }
  console.log("empty function");
}
empty();


$(function() {

  $('.ui.dropdown').dropdown();
  var $form = $(".search-form");

  // getZip($form);
  $('.ui.icon.input')
    .form({
      fields: {
        zip : 'empty',
      }
  });

  // $("#loader").show();
  $("#data-accordion").hide();

  $('.ui.accordion').accordion();

  $('.ui.modal')
    .modal('hide')
  ;

});// onLoad
