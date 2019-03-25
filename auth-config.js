// FirebaseUI config.
var uiConfig = {
signInSuccessUrl: '/success.html',
signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
],
// tosUrl and privacyPolicyUrl accept either url string or a callback
// function.
// Terms of service url/callback.
tosUrl: '<your-tos-url>',
// Privacy policy url/callback.
privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
}
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        // Google provider must be enabled in Firebase Console to support one-tap
        // sign-up.
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // Required to enable this provider in one-tap sign-up.
        authMethod: 'https://accounts.google.com',
        // Required to enable ID token credentials for this provider.
        // This can be obtained from the Credentials page of the Google APIs
        // console.
        clientId: '209135031424-ajnjdgdnmiec3bl6s1n5n35fbg8aogj7.apps.googleusercontent.com'
      },
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Required to enable one-tap sign-up credential helper.
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
  });
  // Auto sign-in for returning users is enabled by default except when prompt is
  // not 'none' in the Google provider custom parameters. To manually disable:
  ui.disableAutoSignIn();


