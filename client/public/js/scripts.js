console.log("OWLS IN THE HOUSE");

var auth = auth || {};

auth.bindLoginForm = function(){

  $("#login-form").on("submit", function(e){
    e.preventDefault();
    auth.submitLoginForm();
  });

};

auth.submitLoginForm = function(){
  var $form = $("#login-form");
  var username = $form.find("[name=username]").val();
  var password = $form.find("[name=password]").val();

  var payload = {
    username: username,
    password: password
  };

  $.post('/api/auth', payload)
    .done(auth.loginSuccess)
    .fail(auth.loginFailure);

};


auth.loginSuccess = function( data, status, jqXHR){
  Cookies.set("jwt_token", data.token);
  Cookies.set("currentuser", data.user);
  auth.setLoggedInState();
  window.location.href = data.redirect
};

auth.loginFailure = function(jqXHR){
  if( jqXHR == 401 ){
    auth.showAlert("Invalid Credentials");
  }
};

auth.setLoggedInState = function(){
  $("#login").hide();
  $("#logged-in-content").fadeIn(1000);
  auth.users.init();
};

auth.showAlert = function(msg){
  $("#alert-msg").text(msg).fadeIn(1000, function(){
    $(this).fadeOut(1000);
  })
};

auth.users = {
  init: function(){
      auth.users.getAll()
        .done(function(users){
          auth.users.renderUsers(users);
        })
        .fail( function(jqXHR){
            console.log(jqHXR);
        });
  },
  getAll: function(){
    return $.getJSON("/api/users");
  },

    renderUsers: function(){
      renderUserData()

    // var $container = $("#users-container");
    // users.forEach( function(user){
    //   var $user = $("<li>");
    //   // var $usersaved =  $('<div>').text(user.events[0].name)
    //   $("#username-display").text(user.username);
    //
    //   // $('.user-profile').append($usersaved)
    //
    //   // $user.html("Username: " + user.username + " <br/> Email: " + user.email );
    //   $container.append($user);
    // });
  }

}

function renderUserData(){
  $.post({url: "/events",
  method: "get",

  success: function(data){
  $("#username-display").text(data.username);

  for (var i = 0; i < data.events.length; i++) {
    usersaved =  $('<div>').addClass("saved-event");
    savetitle   = $('<h3>').text(data.events[i].title);
    saveaddress =  $("<p>").text(data.events[i].venueaddress);
    savevenname = $("<p>").text(data.events[i].venuename);
    savetime    = $("<p>").text(data.events[i].time)
    savetime.addClass("timestamp");
    savetitle.addClass('deletetitle')
    savetitle.css('color', 'blue')
    ;
    // usersaved.text( " " + saveaddress + " " + savevenname + " " + savetime )

    $('.user-profile').append(usersaved)
    $(usersaved).append(savetitle)
    $(usersaved).append(saveaddress)
    $(usersaved).append(savevenname)
    $(usersaved).append(savetime)


  }
    $('.deletetitle').click(removeFavorite)
  }

  })

}


function removeFavorite(){

  $.ajax({url: "/events",
  method: "delete",
  data: {
    name: $(this).text()
  }

  })
$(this).parent().empty()
}



auth.bindSwitchFormLinks = function(){
  $("#login-link").on("click", function(e){
    $("#login").hide();
    $("#signup" ).fadeIn();
  });
  $("#sign-up-link").on("click", function(e){
    $("#signup").hide();
    $("#login" ).fadeIn();
  });

};

auth.bindLogoutLink = function(){
  $("#log-out-link").on("click", function(e){
    console.log("click");
    Cookies.remove("jwt_token");
    Cookies.remove("currentuser");
    auth.checkLoggedInStatus();
  } );
}

auth.checkLoggedInStatus= function(){
  var token = auth.getToken();

  if(token){
    auth.setLoggedInState();
  } else {
    auth.setLoggedOutState();
  }
};


auth.getToken = function(){
  return Cookies.get("jwt_token");
}


auth.setLoggedOutState = function() {
  $('#logged-in-content').hide();
  $('#login').fadeIn(1000);
}

auth.bindSignUpForm = function(){
  $('#sign-up-form').on('submit', function(e) {
    e.preventDefault();
    auth.submitSignUpForm();
  });
};

auth.switchFormsOnSignup = function(){

}

auth.submitSignUpForm = function(){
  var $form    = $('#sign-up-form');
  var username = $form.find('[name=username]').val();
  var password = $form.find('[name=password]').val();
  var email    = $form.find('[name=email]').val();
  var confirm  = $form.find('[name=password_confirm]').val();

  if (confirm !== password) {
    return auth.showAlert("Passwords do not match!");
  }

  var payload = {
    user: {
      username: username,
      email : email,
      password: password
    }
  };

  $.post('/api/users', payload)
    .done(auth.signUpSuccess)
    .fail(auth.signUpFailure)

  $("#signup").hide();
  $("#login" ).fadeIn();

};

auth.signUpSuccess = function(data, status, jqXHR) {
  console.log(data, status, jqXHR);
  // should show a success alert
}

auth.signUpFailure = function(jqXHR) {
  auth.showAlert("There was an error. Try again!");
}

$(function(){
  auth.checkLoggedInStatus();
  auth.bindLoginForm();
  auth.bindSignUpForm();
  auth.bindSwitchFormLinks();
  auth.bindLogoutLink();
});
