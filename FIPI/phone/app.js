
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

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
        'size': 'normal',
        'callback': function(response){
            console.log('Recaptcha passed');
        },
        'expired-callback': function(){
            console.log('Recaptcha failed');
        }
    })

    btnLogNumber.addEventListener('click', e => {
        var phoneNumber = document.getElementById('phone').value;
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function(confirmationResult){
                createElm();
                otpBtn.addEventListener('click', e => {
                    var otpValue = document.getElementById('otp').value;
                    confirmationResult.confirm(otpValue).then(function (result){
                        var user = result.user;
                        console.log(user);
                    }).catch(function(error){
                        console.log(error.code + error.message);
                    })
                })
            }).catch(function(error){
                window.recaptchaVerifier.render().then(function(widgetId){
                    grecaptcha.reset(widgetId);
                })
                console.log(error.code + error.message);
            })
    })

    function createElm() {
        console.log('OTP: ' + code);
        var form = document.getElementById('form');
        var body = document.getElementById('otpBtnDiv');
        var code = document.createElement('input');
        var otpBtn = document.createElement('button');
        code.type = 'text';
        code.id = 'otp';
        otpBtn.id = 'otpBtn';
        otpBtn.innerHTML = 'OTP';
        form.appendChild(code);
        body.appendChild(otpBtn);
    }

}());

    

