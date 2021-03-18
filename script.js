function getDogImage() {
    const userNumber = $('#dogs').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
})