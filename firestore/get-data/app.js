
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
var btnGetCacheData = document.getElementById('getCacheData');
var btnGetMultiDocs = document.getElementById('getMultiDocs');

btnAddData.addEventListener('click', e => {
    var citiesRef = db.collection("cities");

    citiesRef.doc("SF").set({
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"]
    });
    citiesRef.doc("LA").set({
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"]
    });
    citiesRef.doc("DC").set({
        name: "Washingtopn, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"]
    });
    citiesRef.doc("TOK").set({
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["Kanto", "honshu"]
    });
    citiesRef.doc("BJ").set({
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"]
    });
})

btnGetData.addEventListener('click', function() {
    var docRef = db.collection("cities").doc("SF");

    docRef.get().then(function(doc){
        if(doc.exists){
            console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch(function(error){
        console.log("Error getting document:", error);
    })
})

btnGetCacheData.addEventListener('click', function(){
    var docRef = db.collection("cities").doc("SF");
    
    var getOptions = {
        source: 'cache'
    };

    docRef.get(getOptions).then(function(doc){
        console.log("Cached document data: ", doc.data());
    }).catch(function(error){
        console.log("Error getting cached document: ", error);
    })
})

btnGetMultiDocs.addEventListener('click', function(){
    db.collection("cities").where("capital", "==", true)
        .get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                console.log(doc.id, " => ", doc.data());
            })
        })
        .catch(function(error){
            console.log("Error getting documents: ", error);
        });
})

var citiesRef = db.collection("cities");

citiesRef.orderBy("name", "desc").limit(3)
.get()
.then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.id, " => ", doc.data());
    })
})
.catch(function(error){
    console.log("Error getting documents: ", error);
});










