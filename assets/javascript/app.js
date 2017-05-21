
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

  //Github provider object for authentication
$('.authenticate-button').on("click", function (event) {
	event.preventDefault();
  $('.authenticate-button').remove();
	var uiConfig = {
    signInSuccessUrl: 'index2.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
    };
    console.log(uiConfig);
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
});

var database = firebase.database();

$('.submit-button').on("click", function(event) {
  event.preventDefault();
  var trainTime = $('#trainTime').val().trim();
  var destination = $('#destination').val().trim();
  var firstTrain = moment(parseInt($('#firstTrain').val()), "HH:mm").format("X");
  var frequency = parseInt($('#frequency').val().trim());
  console.log(trainTime);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

  database.ref().push( {
    trainTime: trainTime,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });
  $('#trainTime').val("");
  $('#destination').val("");
  $('#firstTrain').val("");
  $('#frequency').val("");



});