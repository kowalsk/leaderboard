if (Meteor.isClient) {
    Template.leaderboard.helpers({
        'player': function () {
            return PlayersList.find()
        },
        'otherHelperFunction': function () {
            return "Some other function"
        }
    });


    Template.leaderboard.events({
        'click .player': function(){
            console.log("You clicked a .player element");
        }
    });
}


PlayersList = new Mongo.Collection('players');