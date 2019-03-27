
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

    const txtEmail = document.getElementById('email');
    const txtPassword = document.getElementById('password');
    const btnSignUp = document.getElementById('signup');
    const btnSignIn = document.getElementById('signin');
    const btnSignOut = document.getElementById('signout');

    btnSignIn.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => { console.log(e.message) });
    })

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => { console.log(e.message) });
    })

    btnSignOut.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnSignOut.classList.remove('hide');
            btnSignIn.classList.add('hide');
            btnSignUp.classList.add('hide');
        } else {
            console.log('not looged in');
            btnSignOut.classList.add('hide');
            btnSignIn.classList.remove('hide');
            btnSignUp.classList.remove('hide');
        }
    })


}());

