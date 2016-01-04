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
'click li': function(){
    console.log("You clicked an li element");
}
});
    
}




PlayersList = new Mongo.Collection('players');