var express = require("express");
var eventRouter = express.Router();

var passport = require("../../lib/passportStrategy");

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

eventRouter.get("/", function(req, res){
  res.json( req.user );

});

module.exports = eventRouter;
