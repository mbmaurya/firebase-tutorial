
(function(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBI0ua50NFDAgMkbeEGmqOdPBcfFawtKW4",
        authDomain: "ng-fire-5bd9d.firebaseapp.com",
        databaseURL: "https://ng-fire-5bd9d.firebaseio.com",
        projectId: "ng-fire-5bd9d",
        storageBucket: "ng-fire-5bd9d.appspot.com",
        messagingSenderId: "209135031424"
    };
    firebase.initializeApp(config);

}());

var storage = firebase.storage();
var storageRef = storage.ref();

// var imagesRef = storageRef.child('images');
var spaceRef = storageRef.child('images/space.jpg');

var imagesRef = spaceRef.parent;
var rootRef = spaceRef.root;
var nullRef = spaceRef.root.parent;

console.log(spaceRef.fullPath);
console.log(spaceRef.name);
console.log(spaceRef.bucket);
// console.log(spaceRef);



