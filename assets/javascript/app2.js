// Initialize Firebase
var config = {
    apiKey: "AIzaSyDM8wo0QlZTF5UC1_X1bOKbXlJQLutzlE8",
    authDomain: "trainscheduler-1d314.firebaseapp.com",
    databaseURL: "https://trainscheduler-1d314.firebaseio.com",
    projectId: "trainscheduler-1d314",
    storageBucket: "trainscheduler-1d314.appspot.com",
    messagingSenderId: "383844800617"
};
firebase.initializeApp(config);

var database = firebase.database();

$('.submit-button').on("click", function(event) {
  event.preventDefault();
  var trainName = $('#trainName').val().trim();
  var destination = $('#destination').val().trim();
  var firstTrain = moment(parseInt($('#firstTrain').val()), "HH:mm").format("X");
  var frequency = parseInt($('#frequency').val().trim());
  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

  database.ref().push( {
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });

  $('#trainName').val("");
  $('#destination').val("");
  $('#firstTrain').val("");
  $('#frequency').val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  var trainName = childSnapshot.val().trainName;
  var destination = childSnapshot.val().destination;
  var firstTrain = moment.unix(childSnapshot.val().firstTrain).format("HH:mm");
  var frequency = childSnapshot.val().frequency;
  var nextArrival = "";
  var minutesAway = 0;
  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);
   $(".trainSchedule").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");


});
