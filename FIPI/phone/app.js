
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

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    var btnLogNumber = document.getElementById('logNumber');
    // var inpOtp = document.getElementById('otp');
    var btnVerifyCode = document.getElementById('verifyCode');

    btnLogNumber.addEventListener('click', e => {
        var phoneNumber = document.getElementById('phone').value;
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function(){                
                document.getElementById('phone').classList.add('hide');
                document.getElementById('logNumber').classList.add('hide');
                document.getElementById('otp').remove('hide');
                document.getElementById('verifyCode').remove('hide');
            }).catch(function(error){
                console.log(error.message + error.code);
            })
        console.log(`Phone: ${phoneNumber}`);
    })

    btnVerifyCode.addEventListener('click', e => {
        var code = document.getElementById('otp').value;
        consifrmationResult.confirm(code).then(function(result){
            var user = result.user;
            console.log(user);
        }).catch(function(error){
            console.log(error.message + error.code);
        })
    })
    
    
    

}());

    

