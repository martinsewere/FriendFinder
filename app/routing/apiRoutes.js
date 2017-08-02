var friends = require("../data/friends.js");

var getFriends = friends.getFriends;
var compareFriends = friends.compareFriends;

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return getFriends()
        .then(function(results) {
            if (results) {
                console.log("Results are in!");
                return res.json(results);
            } else {
                return res.json({
                    error: "No friends!"
                });
            }
        })
        .catch(function(error) {
            return res.json({
                error: "API Error: " + error
            });
        })
    });

    app.post("/api/friends", function(req, res) {
        return compareFriends(req.body)
        .then(function(results) {
            if (results) {
                console.log("Results are in!");
                return res.json(results);
            } else {
                return res.json({
                    error: "No matches found! Try again soon!"
                });
            }
        })
        .catch(function(error) {
            return res.json({
                error: "API Error: " + error
            });
        });
    });
};

