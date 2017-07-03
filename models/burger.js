// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(object, cb) {
    orm.insertOne("burgers", object, function(res) {
      cb(res);
    });
  },
  updateOne: function(whatToUpdate, whereToUpdate, cb) {
    orm.updateOne("burgers", whatToUpdate, whereToUpdate, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;