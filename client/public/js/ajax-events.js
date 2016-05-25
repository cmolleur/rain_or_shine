// console.log('hey whats up');

weekObject = {
  Sunday: [],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
}


// function zipSearch(){
//   $('.search').on('click', dateParser)
// }


function sportsDisplay(){
    console.log("sports are displaying!");
    day7 = weekObject.Sunday
    for (var i = 0; i < day7.length; i++) {
      sportsRender(day7[i])
    }
    day6 = weekObject.Saturday
    for (var i = 0; i < day6.length; i++) {
      sportsRender(day6[i])
    }
    day5 = weekObject.Friday
    for (var i = 0; i < day5.length; i++) {
      sportsRender(day5[i])
    }
    day4 = weekObject.Thursday
    for (var i = 0; i < day4.length; i++) {
      sportsRender(day4[i])
    }
    day3 = weekObject.Wednesday
    for (var i = 0; i < day3.length; i++) {
      sportsRender(day3[i])
    }
    day2 = weekObject.Tuesday
    for (var i = 0; i < day2.length; i++) {
      sportsRender(day2[i])
    }
    day1 = weekObject.Monday
    for (var i = 0; i < day1.length; i++) {
      sportsRender(day1[i])
    }


}
function sportsOutdoorDisplay(){
  console.log("OUTDOOR sports are displaying!");

    day7 = weekObject.Sunday
    for (var i = 0; i < day7.length; i++) {
      sportsOutdoorRender(day7[i])
    }
    day6 = weekObject.Saturday
    for (var i = 0; i < day6.length; i++) {
      sportsOutdoorRender(day6[i])
    }
    day5 = weekObject.Friday
    for (var i = 0; i < day5.length; i++) {
      sportsOutdoorRender(day5[i])
    }
    day4 = weekObject.Thursday
    for (var i = 0; i < day4.length; i++) {
      sportsOutdoorRender(day4[i])
    }
    day3 = weekObject.Wednesday
    for (var i = 0; i < day3.length; i++) {
      sportsOutdoorRender(day3[i])
    }
    day2 = weekObject.Tuesday
    for (var i = 0; i < day2.length; i++) {
      sportsOutdoorRender(day2[i])
    }
    day1 = weekObject.Monday
    for (var i = 0; i < day1.length; i++) {
      sportsOutdoorRender(day1[i])
    }


}

function musicDisplay(){
  console.log("MUSIC is displaying!");

    day7 = weekObject.Sunday
    for (var i = 0; i < day7.length; i++) {
      musicRender(day7[i])
    }
    day6 = weekObject.Saturday
    for (var i = 0; i < day6.length; i++) {
      musicRender(day6[i])
    }
    day5 = weekObject.Friday
    for (var i = 0; i < day5.length; i++) {
      musicRender(day5[i])
    }
    day4 = weekObject.Thursday
    for (var i = 0; i < day4.length; i++) {
      musicRender(day4[i])
    }
    day3 = weekObject.Wednesday
    for (var i = 0; i < day3.length; i++) {
      musicRender(day3[i])
    }
    day2 = weekObject.Tuesday
    for (var i = 0; i < day2.length; i++) {
      musicRender(day2[i])
    }
    day1 = weekObject.Monday
    for (var i = 0; i < day1.length; i++) {
      musicRender(day1[i])
    }
}
function musicOutdoorDisplay(){
  console.log("Outdoor Music is displaying!");

    day7 = weekObject.Sunday
    for (var i = 0; i < day7.length; i++) {
      musicOutdoorRender(day7[i])
    }
    day6 = weekObject.Saturday
    for (var i = 0; i < day6.length; i++) {
      musicOutdoorRender(day6[i])
    }
    day5 = weekObject.Friday
    for (var i = 0; i < day5.length; i++) {
      musicOutdoorRender(day5[i])
    }
    day4 = weekObject.Thursday
    for (var i = 0; i < day4.length; i++) {
      musicOutdoorRender(day4[i])
    }
    day3 = weekObject.Wednesday
    for (var i = 0; i < day3.length; i++) {
      musicOutdoorRender(day3[i])
    }
    day2 = weekObject.Tuesday
    for (var i = 0; i < day2.length; i++) {
      musicOutdoorRender(day2[i])
    }
    day1 = weekObject.Monday
    for (var i = 0; i < day1.length; i++) {
      musicOutdoorRender(day1[i])
    }

}

function showsDisplay(){
  console.log("shows are displaying!");

  day7 = weekObject.Sunday
  for (var i = 0; i < day7.length; i++) {
    showsRender(day7[i])
  }
  day6 = weekObject.Saturday
  for (var i = 0; i < day6.length; i++) {
    showsRender(day6[i])
  }
  day5 = weekObject.Friday
  for (var i = 0; i < day5.length; i++) {
    showsRender(day5[i])
  }
  day4 = weekObject.Thursday
  for (var i = 0; i < day4.length; i++) {
    showsRender(day4[i])
  }
  day3 = weekObject.Wednesday
  for (var i = 0; i < day3.length; i++) {
    showsRender(day3[i])
  }
  day2 = weekObject.Tuesday
  for (var i = 0; i < day2.length; i++) {
    showsRender(day2[i])
  }
  day1 = weekObject.Monday
  for (var i = 0; i < day1.length; i++) {
    showsRender(day1[i])
  }
}


function dateParser(zipcode){
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();

  // newdate = year + "-" + month + "-" + day;
  // enddate = year + "-" + month + "-" + (day + 7);

  var nextWeek = new Date();
  nextWeek.setDate(dateObj.getDate() + 7);
  var month2 = nextWeek.getUTCMonth() + 1; //months from 1-12
  var day2 = nextWeek.getDate();
  var year2 = nextWeek.getFullYear();

  // 2016-5-25
  // 2016-6-1
  newdate = year + "-" + month + "-" + day;
  enddate = year2 + "-" + month2 + "-" + day2;

  // zipcode = filterobj.zipcode

  eventnew = year + '0' + month + day + '00' + "-" + year + '0' + month + (day + 7)+ '00'

  var ajax1 = $.getJSON('https://api.seatgeek.com/2/events?venue.id=7962&datetime_utc.gte='+ newdate +'&datetime_utc.lte=' + enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax2 = $.getJSON('https://api.seatgeek.com/2/events?venue.id=2118&datetime_utc.gte='+ newdate + '&datetime_utc.lte='+ enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax3 = $.getJSON('https://api.seatgeek.com/2/events?taxonomies.name=mlb&venue.city=bronx&datetime_utc.gte='+newdate+'&datetime_utc.lte='+enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax4 = $.getJSON('https://api.seatgeek.com/2/events?taxonomies.id=2010000&venue.city=ny&datetime_utc.gte='+ newdate+'&datetime_utc.lte='+enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax5 = $.getJSON('https://api.seatgeek.com/2/events?taxonomies.name=sports&venue.city=ny&datetime_utc.gte='+ newdate+'&datetime_utc.lte='+enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax6 = $.getJSON('https://api.seatgeek.com/2/events?taxonomies.name=theater&venue.city=brooklyn&datetime_utc.gte='+ newdate+'&datetime_utc.lte='+enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax7 = $.getJSON('https://api.seatgeek.com/2/events?taxonomies.name=theater&venue.city=ny&datetime_utc.gte='+ newdate+'&datetime_utc.lte='+enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax8 = $.getJSON('https://api.seatgeek.com/2/events?taxonomies.name=mlb&venue.city=flushing&datetime_utc.gte='+newdate+'&datetime_utc.lte='+enddate + "&client_id=NDgxNjM2N3wxNDY0MTk2OTM0", function(json){geekParser(json)})
  var ajax9 = $.getJSON('http://api.eventful.com/json/events/search?location='+zipcode+'&app_key=3twjh79SHQ9wBjrx&date='+eventnew+'&q=music&callback=?', function(json){eventParsermusic(json)})
  var ajax10 = $.getJSON('http://api.eventful.com/json/events/search?location='+zipcode+'&app_key=3twjh79SHQ9wBjrx&date='+eventnew+'&q=comedy&callback=?', function(json){eventParsercomedy(json)})
  var ajax11 = $.getJSON('http://api.eventful.com/json/events/search?location='+zipcode+'&app_key=3twjh79SHQ9wBjrx&date='+eventnew+'&q=shows&callback=?', function(json){eventParsershows(json);})


  $.when(ajax1, ajax2, ajax3, ajax4, ajax5, ajax6, ajax7, ajax8, ajax9, ajax10, ajax11).then(function() {
    filterRender();
    setGlobalEmptyState();
    $("#loader").hide();
    searching = false;
  })
}



function geekParser(json){


var object = json.events || [];
for (var i = 0; i < object.length; i++) {
    var geekobj = {}
     geekobj.title = object[i].title;
     geekobj.type = object[i].type;
     geekobj.time = object[i].datetime_local;

     geekobj.venue_name = object[i].venue.name;
     geekobj.venue_address = object[i].venue.address;
     geekobj.day = new Date(geekobj.time).getUTCDay()

     weekObjectParser(geekobj)
    //  geekRender(geekobj)
    }

}


function eventParsermusic(json){

  if (json.events) {

    var events = json.events.event
    for (var i = 0; i < events.length; i++) {
        var eventfulobj = {}
         eventfulobj.title = events[i].title
         eventfulobj.venue_name = events[i].venue_name
         eventfulobj.venue_address = events[i].venue_address
         eventfulobj.time = events[i].start_time
         eventfulobj.type = 'music'
         eventfulobj.day = new Date(eventfulobj.time).getDay()
         weekObjectParser(eventfulobj)
        //  eventRender(eventfulobj)
    }
  }


}
function eventParsercomedy(json){

  if (json.events) {

    var events = json.events.event
    for (var i = 0; i < events.length; i++) {
        var eventfulobj = {}
         eventfulobj.title = events[i].title
         eventfulobj.venue_name = events[i].venue_name
         eventfulobj.venue_address = events[i].venue_address
         eventfulobj.time = events[i].start_time
         eventfulobj.type = 'comedy'
         eventfulobj.day = new Date(eventfulobj.time).getDay()
         weekObjectParser(eventfulobj)
        //  eventRender(eventfulobj)
    }
  }
}
function eventParsershows(json){
  console.log(json);
  if (json.events) {
    var events = json.events.event
    for (var i = 0; i < events.length; i++) {
        var eventfulobj = {}
         eventfulobj.title = events[i].title
         eventfulobj.venue_name = events[i].venue_name
         eventfulobj.venue_address = events[i].venue_address
         eventfulobj.time = events[i].start_time
         eventfulobj.type = 'shows'
         eventfulobj.day = new Date(eventfulobj.time).getDay()
         weekObjectParser(eventfulobj)
        //  eventRender(eventfulobj)
    }
  }

}



//
// function geekRender(obj){
//    title = $('<h3>').text(obj.title)
//    type = $('<h4>').text(obj.type)
//    time = $('<h5>').text(obj.time)
//    venuename = $('<h5>').text(obj.venue_name)
//    venueaddress = $('<h5>').text(obj.venue_address)
//
//    if(obj.day==0){
//    $('.day7').append(title, type, time, venuename, venueaddress)}
//    if(obj.day==1){
//    $('.day1').append(title, type, time, venuename, venueaddress)}
//    if(obj.day==2){
//    $('.day2').append(title, type, time, venuename, venueaddress)}
//    if(obj.day==3){
//    $('.day3').append(title, type, time, venuename, venueaddress)}
//    if(obj.day==4){
//    $('.day4').append(title, type, time, venuename, venueaddress)}
//    if(obj.day==5){
//    $('.day5').append(title, type, time, venuename, venueaddress)}
//    if(obj.day==6){
//    $('.day6').append(title, type, time, venuename, venueaddress)}
//
// }

function eventRender(obj){
   title = $('<h3>').addClass("event-title").text(obj.title)
   type = $('<h4>').text(obj.type)
   title.click(function(e){
     e.stopPropagation();
     eventTitleHandler(obj);
   });

   if(obj.day==0){
   $('.day7').append(title)}
   if(obj.day==1){
   $('.day1').append(title)}
   if(obj.day==2){
   $('.day2').append(title)}
   if(obj.day==3){
   $('.day3').append(title)}
   if(obj.day==4){
   $('.day4').append(title)}
   if(obj.day==5){
   $('.day5').append(title)}
   if(obj.day==6){
   $('.day6').append(title)}

}


function sportsRender(obj){
  if (obj.type== 'wnba' || obj.type == 'wrestling')
  {

   title = $('<h3>').addClass("event-title").text(obj.title)
   type = $('<h4>').text(obj.type)

   title.click(function(e){
     e.stopPropagation();
     eventTitleHandler(obj);
   });

   if(obj.day==0){
   $('.day7').append(title)}
   if(obj.day==1){
   $('.day1').append(title)}
   if(obj.day==2){
   $('.day2').append(title)}
   if(obj.day==3){
   $('.day3').append(title)}
   if(obj.day==4){
   $('.day4').append(title)}
   if(obj.day==5){
   $('.day5').append(title)}
   if(obj.day==6){
   $('.day6').append(title)}
 }
}
function sportsOutdoorRender(obj){
  if (obj.type== 'mlb')
  {

   title = $('<h3>').addClass("event-title").text(obj.title)
   type = $('<h4>').text(obj.type)

   title.click(function(e){
     e.stopPropagation();
     eventTitleHandler(obj);
   });

   if(obj.day==0){
   $('.day7').append(title)}
   if(obj.day==1){
   $('.day1').append(title)}
   if(obj.day==2){
   $('.day2').append(title)}
   if(obj.day==3){
   $('.day3').append(title)}
   if(obj.day==4){
   $('.day4').append(title)}
   if(obj.day==5){
   $('.day5').append(title)}
   if(obj.day==6){
   $('.day6').append(title)}
 }
}


function musicRender(obj){
  if ((obj.type == 'music_festival' || obj.type== 'concert' || obj.type == 'music')&&(obj.venue_name != 'Central Park Summerstage'))
  {
   title = $('<h3>').addClass("event-title").text(obj.title)
   type = $('<h4>').text(obj.type)
   title.click(function(e){
     e.stopPropagation();
     eventTitleHandler(obj);
   });

   if(obj.day==0){
   $('.day7').append(title)}
   if(obj.day==1){
   $('.day1').append(title)}
   if(obj.day==2){
   $('.day2').append(title)}
   if(obj.day==3){
   $('.day3').append(title)}
   if(obj.day==4){
   $('.day4').append(title)}
   if(obj.day==5){
   $('.day5').append(title)}
   if(obj.day==6){
   $('.day6').append(title)}
 }
}
function musicOutdoorRender(obj){
  if (obj.venue_name == 'Central Park Summerstage')
  {


   title = $('<h3>').addClass("event-title").text(obj.title)
   type = $('<h3>').text(obj.type)
   title.click(function(e){
     e.stopPropagation();
     eventTitleHandler(obj);
   });

   if(obj.day==0){
   $('.day7').append(title)}
   if(obj.day==1){
   $('.day1').append(title)}
   if(obj.day==2){
   $('.day2').append(title)}
   if(obj.day==3){
   $('.day3').append(title)}
   if(obj.day==4){
   $('.day4').append(title)}
   if(obj.day==5){
   $('.day5').append(title)}
   if(obj.day==6){
   $('.day6').append(title)}
 }
}

function showsRender(obj){
  if (obj.type == 'comedy' || obj.type== 'shows' || obj.type == 'broadway_tickets_national' || obj.type == 'theater')
  {
   title = $('<h3>').addClass("event-title").text(obj.title);
   type = $('<h4>').text(obj.type);
   title.click(function(e){
     e.stopPropagation();
     eventTitleHandler(obj);
   });

   if(obj.day==0){
    //  $('.day7').text('')
     $('.day7').append(title)
   }
   if(obj.day==1){
    //  $('.day1').text('')
     $('.day1').append(title)
   }
   if(obj.day==2){
    //  $('.day2').text('')
     $('.day2').append(title)
   }
   if(obj.day==3){

     $('.day3').append(title)
   }
   if(obj.day==4){
    //  $('.day4').text('')
     $('.day4').append(title)
   }
   if(obj.day==5){
    //  $('.day5').text('')
     $('.day5').append(title)
   }
   if(obj.day==6){
      // $('.day6').text('')
     $('.day6').append(title)
   }
  }
}

function eventTitleHandler(obj){
  // console.log(obj);
    title = $('<h3>').text(obj.title);


    time = $('<p>').text(obj.time);
    venuename = $('<p>').text(obj.venue_name);
    venueaddress = $('<p>').text(obj.venue_address);
    title = $('<h3>').text(obj.title).addClass('modaltitle');
    time = $('<p>').text(obj.time).addClass('modaltime');
    venuename = $('<p>').text(obj.venue_name).addClass('modalvenname');
    venueaddress = $('<p>').text(obj.venue_address).addClass('modaladdress');

    // // Create a new JavaScript Date object based on the timestamp
    // // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // var date = new Date(unix_timestamp*1000);
    // // Hours part from the timestamp
    // var hours = date.getHours();
    // // Minutes part from the timestamp
    // var minutes = "0" + date.getMinutes();
    // // Seconds part from the timestamp
    // var seconds = "0" + date.getSeconds();
    //
    // // Will display time in 10:30:23 format
    // var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


    $(".close").on( "click", function(e){
      $(".header").empty();
      $(".time-tag").empty();
      $(".location-tag").empty();
      console.log("You emptied your modal!");
    })

    $(".header").append(title);
    $(".location-tag").append(venuename, venueaddress);
    $(".time-tag").append(time);
    $('.ui.modal').modal('show');
    $('#save-event').off().click(saveUserData)

}




function saveUserData(){

var title = $('.modaltitle').text()
var time = $('.modaltime').text()
var venuename = $('.modalvenname').text()
var venueaddress = $('.modaladdress').text()
var saved = $(".saved-alert")
var errorLogin = $(".error-login")


$.post({url: "/events",
  method: "post",
  data: {
    title: title,
    time: time,
    venuename: venuename,
    venueaddress: venueaddress
  },
  success: function(data){
    $(saved).fadeIn().delay(1000).fadeOut('slow');
    console.log(data)
  },
  error: function(data){
    $(errorLogin).fadeIn().delay(2000).fadeOut('slow');
    console.log(data)

  }
})

// $.post({url: "/events",
// method: "post",
// data: {
//   title: title,
//   time: time,
//   venuename: venuename,
//   venueaddress: venueaddress
// },
// success: function(data){ console.log(data) }
//
// })
// $(saved).fadeIn().delay(1000).fadeOut('slow');
//
}



function weekObjectParser(obj){
  if(obj.day==0){
    weekObject.Sunday.push(obj)
  }
  if(obj.day==1){
    weekObject.Monday.push(obj)
  }
  if(obj.day==2){
    weekObject.Tuesday.push(obj)
  }
  if(obj.day==3){
    weekObject.Wednesday.push(obj)
  }
  if(obj.day==4){
    weekObject.Thursday.push(obj)
  }
  if(obj.day==5){
    weekObject.Friday.push(obj)
  }
  if(obj.day==6){
    weekObject.Saturday.push(obj)
  }
}
