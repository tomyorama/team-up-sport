/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var mongoose = require('mongoose');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Competition = require('../api/competition/competition.model');
var Match = require('../api/match/match.model');
var Team = require('../api/team/team.model');
Competition.find({}).remove(function() {
    Competition.create({
        name: 'Ultra termin',
        info: 'Specialni termin amatera!'
    }, {
        name: 'Test termin 2',
        info: 'Test!'
    });
});
var testCompetition = new Competition({
    name: 'Termini cetvrtkom',
    info: 'Specialni termin majstora!'
});
testCompetition.save(function(err, object) {
    if (err) return console.error(err);
    //save matches!!
    Match.find({}).remove(function() {
        Match.create({
            name: 'Match1',
            info: 'Specialni termin amatera!',
            competitionId: new mongoose.Types.ObjectId(object._id)
        }, {
            name: 'Match2',
            info: 'Test!',
            competitionId: new mongoose.Types.ObjectId(object._id)
        });
    });
});

Team.find({}).remove(function() {
  Team.create({
    name : 'Team 1 Test',
    info : 'Test team 1 , test!!'
  }, {
    name : 'Team 2 Test',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node. sdsdsds'
  }, {
    name : 'Team 3 Test',
    info : 'Test team 3 , test!!'
  }, {
    name : 'Team 4 Test',
    info : 'Test team 1 , test!!'
  }, {
    name : 'Team 5 Test',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node. sdsdsds'
  }, {
    name : 'Team 6 Test',
    info : 'Test team 3 , test!!'
  }, {
    name : 'Team 7 Test',
    info : 'Test team 3 , test!!'
  });
});


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});