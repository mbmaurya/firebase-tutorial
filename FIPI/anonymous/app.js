
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

    var btnSignIn = document.getElementById('signIn');
    var btnSignUp = document.getElementById('signUp');
    var btnSubmit = document.getElementById('btnSubmit');
    
    btnSignIn.addEventListener('click', e => {
        firebase.auth().signInAnonymously().catch(function(error){
            console.log(error.code + ', ' + error.message);
        })
    })

    firebase.auth().onAuthStateChanged(function(user){
        if(user) {
            btnSignIn.classList.add('hide');
            btnSignUp.classList.remove('hide');
            console.log(user.isAnonymous + ', ' + user.uid);
        } else {
            console.log('User signed out');
        }
    })

    btnSignUp.addEventListener('click', e => {
        var form = document.getElementById('form');

        var txtEmail = document.createElement('input');
        txtEmail.type = 'email';
        txtEmail.name = 'email';
        txtEmail.id = 'email';

        var txtPassword = document.createElement('input');
        txtPassword.type = 'password';
        txtPassword.name = 'password';
        txtPassword.id = 'password';

        var btnSubmit = document.createElement('button');
        btnSubmit.id = 'btnSubmit';
        btnSubmit.innerHTML = 'Submit';
        btnSubmit.setAttribute('onclick', 'linkCred()');

        form.appendChild(txtEmail);
        form.appendChild(txtPassword);
        form.appendChild(btnSubmit);

        btnSignUp.classList.add('hide');
    })

    
        
  

}());

function linkCred() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
        .then(function(usercred){
            var user = usercred.user;
            console.log('Anpnymously account successfully upgraded', user);
            addSingOut();
        }, function(error){
            console.log('Error upgrading anonymous account', error);
        })
}

function addSignOut() {
    var btnSignOut = document.createElement('button');
    btnSignOut.id = 'signOut';
    btnSignOut.innerHTML = 'SignOut';
    btnSignOut.setAttribute('onclick', 'signOut()');
}

function signOut() {
    firebase.auth().signOut().then(function() {
        console.log('User signed out successfully');
    }).catch(function(error) {
        console.log(error.code + ', ' + error.message);
    });
}


