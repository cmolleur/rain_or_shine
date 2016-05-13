var filterobj = {}

$(function(){
  setFilterHandler()
})

function setFilterHandler(){
  $('#filtersearch').on('click', function(e){
    e.preventDefault()
    $("#data-accordion").empty();

    filterobj.zipcode = $('#zipsearch').val()
    filterobj.dropdown = $('.ui.dropdown').dropdown('get value')
    filterobj.showcheck = $('.ui.checkbox.showsbox').checkbox('is checked')
    filterobj.musiccheck = $('.ui.checkbox.musicbox').checkbox('is checked')
    filterobj.sportscheck = $('.ui.checkbox.sportsbox').checkbox('is checked')
    getData(filterobj.zipcode)
    dateParser(filterobj.zipcode)

  })
}

function filterRender(){
  if ((filterobj.dropdown == 'indoor' || filterobj.dropdown == 'all') && filterobj.sportscheck ){
    // console.log(weekObject);
    sportsDisplay()
  }
  if (filterobj.dropdown == 'outdoor' && filterobj.sportscheck ){
    // console.log('yo');
    sportsOutdoorDisplay()
  }
  if ((filterobj.dropdown == 'indoor' || filterobj.dropdown == 'all') && filterobj.showcheck ){
    // console.log('shows');
    showsDisplay()
  }
  if ((filterobj.dropdown == 'indoor' || filterobj.dropdown == 'all') && filterobj.musiccheck ){
    // console.log('music');
    musicDisplay()
  }
  if (filterobj.dropdown == 'outdoor' && filterobj.musiccheck ){
    // console.log('outdoormusic');
    musicOutdoorDisplay()
  }
}
