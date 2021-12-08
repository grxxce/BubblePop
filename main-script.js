document.querySelector('#sign_out').addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'sign_out' }, function (response) {
        if (response.message === 'success') {
            window.location.replace('./popup.html');
        }
    });
});

const button = document.getElementById('check-article');
button.addEventListener('click', (e) => {
    document.location.href = './welcome.html';
});