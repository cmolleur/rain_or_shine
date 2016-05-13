var express = require("express");
var eventRouter = express.Router();


var passport = require("../../lib/passportStrategy");
var User = require('../../models/user')

// var Event = require("../../models/event");

eventRouter.use( passport.authenticate("jwt", { session: false }) );

eventRouter.post("/", function(req, res){
    // Event.create()
    req.user.events.push( req.body );
    req.user.save(function(err){
      if(err){ res.json({ error: "fuck yoouu"})}
    });

    res.json(req.body);
});

eventRouter.delete("/", function(req, res){

  User.update({username:req.user.username}, {$pull: {events:{title: req.body.name}}},function(err, dbuser){
    console.log(1,err);
    console.log(2,dbuser);
  })
})

eventRouter.get("/", function(req, res){
  res.json( req.user );

});

module.exports = eventRouter;
