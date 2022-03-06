'use strict';

const axios = require('axios').default;

function watchClick() {
    $('button').click((event) => {
        event.preventDefault();
        axios.get('https://api.adviceslip.com').then((response) => {
            console.log(response);
        });
    });
}

$(watchClick);
