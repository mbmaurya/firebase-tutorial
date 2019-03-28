
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

    var provider = new firebase.auth.GoogleAuthProvider();

    var btnPopupSignIn = document.getElementById('popupSignIn');
    var btnRedirectSignIn = document.getElementById('redirectSignIn');
    var btnUserProfile = document.getElementById('userProfile');
    var btnSignOut = document.getElementById('signOut');

    btnPopupSignIn.addEventListener('click', e => {
        firebase.auth().signInWithPopup(provider).then(function(result){
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(`${token}, ${JSON.stringify(user)}`);
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(`${errorCode}, ${errorMessage}, ${email}, ${credential}`);
        })
    });

    btnRedirectSignIn.addEventListener('click', e => {
        firebase.auth().signInWithRedirect(provider);
    });

    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
            var token = result.credential.accessToken;
            console.log(`${token}`);
        }
        var user = result.user;
        console.log(`${JSON.stringify(user)}`);
        }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(`${errorCode}, ${errorMessage}, ${email}, ${credential}`);
    });

    btnUserProfile.addEventListener('click', e => {
        onSignIn();
    });

    function onSignIn() {
        btnSignOut.classList.remove('hide');
        const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    };

    function signOutUser() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function(){
            console.log('User signed out');
            btnSignOut.classList.add('hide');
        });
    }
    


}());

