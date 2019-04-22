
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
var btnSetData = document.getElementById('setData');
var btnUpdateData = document.getElementById('updateData');
var btnArray = document.getElementById('array');
var btnIncrement = document.getElementById('increment');

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

btnSetData.addEventListener('click', function(){
    db.collection("cities").doc("LA").set({
        name: "Miami",
        state: "Florida",
        country: "USA"
    })
    .then(function(){
        console.log("Document successfully written!");
    })
    .catch(function(error){
        console.error("Error writing document: ". error);
    })
})

// var docData = {
//     stringExample: "Hello World!",
//     booleanExample: true,
//     numberExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
//     arrayExample: null,
//     objectExample: {
//         a: 5,
//         b: {
//             nested: "foo"
//         }
//     }
// };

// db.collection("data").doc("one").set(docData).then(function(){
//     console.log("Document sussessfully written!");
// });

btnUpdateData.addEventListener('click', function(){
    var miamiRef = db.collection("cities").doc("LA");

    return miamiRef.update({
        capital: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(){
        console.log("Document successfully updated!");
    })
    .catch(function(error){
        console.error("Error updating document: ", error);
    });
})

btnArray.addEventListener('click', function(){
    var miamiRef = db.collection("cities").doc("LA");

    miamiRef.update({
        regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
    });

    miamiRef.update({
        regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
    })
    .then(function(){
        console.log("Document successfully updated!");
    })
    .catch(function(error){
        console.error("Error updating document: ", error);
    });
})

btnIncrement.addEventListener('click', function(){
    var miamiRef = db.collection("cities").doc("LA");

    miamiRef.update({
        population: firebase.firestore.FieldValue.increment(50)
    })
    .then(function(){
        console.log("Population incremented successfully");
    })
    .catch(function(error){
        console.error("Update failed with error: ", error);
    })
})






