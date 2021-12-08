const firebaseConfig = {
    apiKey: "AIzaSyD6yakn5Ie4bkQcLX19IJ5psE0MZf6nR9Y",
    authDomain: "bubble-pop-d8817.firebaseapp.com",
    projectId: "bubble-pop-d8817",
    storageBucket: "bubble-pop-d8817.appspot.com",
    messagingSenderId: "388115621219",
    appId: "1:388115621219:web:19f48d23c17a2046af9f56",
    measurementId: "G-QDS5ZKHPV8"
  };

firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());

// Initialize the FirebaseUI Widget using Firebase.
const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            chrome.runtime.sendMessage({ message: 'sign_in' }, function (response) {
                if (response.message === 'success') {
                    window.location.replace('./welcome.html');
                }
            });
            return false;
        },
        uiShown: function () {
            document.getElementById('my_sign_in').style.display = 'none';
            document.getElementById('wrapper').style.pointerEvents = 'none';
        }
    },
    signInFlow: 'popup',
    // signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            customParameters: {
                prompt: 'select_account'
            }
        }
    ],
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
};

document.querySelector('#wrapper').addEventListener('click', () => {
    ui.start('#sign_in_options', uiConfig);
});

document.querySelector('#wrapper').addEventListener('mouseover', () => {
    let sign_in = document.querySelector('#my_sign_in');
    sign_in.classList.remove('sign_in_no_hover');
    sign_in.classList.add('sign_in_hover');
});

document.querySelector('#wrapper').addEventListener('mouseleave', () => {
    let sign_in = document.querySelector('#my_sign_in');
    sign_in.classList.remove('sign_in_hover');
    sign_in.classList.add('sign_in_no_hover');
});
