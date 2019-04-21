
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

var db = firebase.firestore();
var btnAddData = document.getElementById('addData');
var btnGetData = document.getElementById('getData');

btnAddData.addEventListener('click', e => {
    db.collection("users").add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1815
    })
    .then(function(docRef){
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error){
        console.error("Error adding document: ", error);
    });
})

btnGetData.addEventListener('click', e => {
    db.collection("users").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    })
})




