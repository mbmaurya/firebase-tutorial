
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

    var provider = new firebase.auth.FacebookAuthProvider();
    var btnFbSignIn = document.getElementById('fbSignIn');
    var btnSignOut = document.getElementById('signOut');

    btnFbSignIn.addEventListener('click', e => {
        firebase.auth().signInWithPopup(provider).then(function(result){
            btnFbSignIn.classList.add('hide');
            btnSignOut.classList.remove('hide');
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(`Token: ${token} \n User: ${JSON.stringify(user)}`);
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(`Error \n Code: ${errorCode} \n Message: ${errorMessage} \n Email: ${email} \n Credential: ${credential}`);
            
        })
    });

    function goToApp() {
        console.log('Reached goToApp');
    }

    btnSignOut.addEventListener('click', e => {
        firebase.auth().signOut().then(function() {
            btnSignOut.classList.add('hide');
            btnFbSignIn.classList.remove('hide');
            console.log('User logged out');
        }).catch(function(error) {
            var errorMessage = error.message;
            console.log(`Error Message: ${errorMessage}`);
        });
    })

}());

