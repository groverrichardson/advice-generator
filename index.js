'use strict';

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Unable to fetch student data');
        })
        .then((data) => {
            $('p.quote').fadeOut('400', () => {
                $('h1.advice-num').text(`ADVICE #${data.slip.id}`);
                $('p.quote')
                    .delay('500')
                    .text(`"${data.slip.advice}"`)
                    .fadeIn();
            });
        })
        .catch((err) => console.log(err));
}

function watchClick() {
    $('button').click((event) => {
        event.preventDefault();

        getAdvice();
    });
}

$(watchClick);
