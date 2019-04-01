
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

    var btnLogNumber = document.getElementById('logNumber');

    btnLogNumber.addEventListener('click', e => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        var phoneNumber = document.getElementById('phone').value;
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function(confirmationResult){
                window.confirmationResult = confirmationResult;
                var code = prompt('Enter OTP', '');
                confirmationResult.confirm(code).then(function(result){
                    var user = result.user;
                    console.log(`Sign in successfull, ${user}`);
                }).catch(function(error){
                    console.log(error.code + error.message);
                })
            }).catch(function(error){
                console.log(error.code, error.message);
                window.recaptchaVerifier.render().then(function(widgetId){
                    grecaptcha.reset(widgetId);
                })
            })
    })


}());

    

