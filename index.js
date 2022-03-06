'use strict';

function watchClick() {
    $('button').click((event) => {
        event.preventDefault();
        console.log('this worked');
    });
}

$(watchClick);
