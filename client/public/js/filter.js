var filterobj = {}

$(function(){
  setFilterHandler()
})

function setFilterHandler(){
  $('#filtersearch').on('click', function(e){
    e.preventDefault()
    $("#data-accordion").empty();

    filterobj.zipcode = $('#zipsearch').val()
    filterobj.dropdown = $('#drop').val()
    filterobj.showcheck = $('.ui.checkbox.showsbox').checkbox('is checked')
    filterobj.musiccheck = $('.ui.checkbox.musicbox').checkbox('is checked')
    filterobj.sportscheck = $('.ui.checkbox.sportsbox').checkbox('is checked')
    getData(filterobj.zipcoe)
    dateParser(filterobj.zipcode)
  
    // setTimeout(filterRender, 3000)
  })
}

function filterRender(){
  if ((filterobj.dropdown == 1 || filterobj.dropdown == 0) && filterobj.sportscheck ){
    // console.log(weekObject);
    sportsDisplay()
  }
  if (filterobj.dropdown == 2 && filterobj.sportscheck ){
    // console.log('yo');
    sportsOutdoorDisplay()
  }
  if ((filterobj.dropdown == 1 || filterobj.dropdown == 0) && filterobj.showcheck ){
    // console.log('shows');
    showsDisplay()
  }
  if ((filterobj.dropdown == 1 || filterobj.dropdown == 0) && filterobj.musiccheck ){
    // console.log('music');
    musicDisplay()
  }
  if (filterobj.dropdown == 2 && filterobj.musiccheck ){
    // console.log('outdoormusic');
    musicOutdoorDisplay()
  }
}
