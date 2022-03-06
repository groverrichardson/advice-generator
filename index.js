'use strict';

const axios = require('axios').default;

function watchClick() {
    $('button').click((event) => {
        event.preventDefault();
        console.log('this worked');
    });
}

$(watchClick);
