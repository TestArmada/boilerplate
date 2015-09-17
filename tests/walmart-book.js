var Test = require("../lib/example-base-test-class");

var url = "http://www.walmart.com/search/?query=sam%20walton%20made%20in%20america";

module.exports = new Test({
  "Search for Sam Walton Book- Again": function (client) {
    client
      .resizeWindow(1280, 1024)
      .url(url)
      .getPerformance(function (result) {
        // Send a message to Magellan about this page
        process.send({
          type: "performance-metrics",
          url: url,
          metrics: result
        });
      })
  },

  "Check product description": function (client) {
    client
      .assert.elContainsText("[data-item-id='403453'] .tile-heading", "My Story")
      .assert.elContainsText("[data-item-id='403453'] .media-details", "Paperback")
  }

});