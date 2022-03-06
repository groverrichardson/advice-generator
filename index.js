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
            console.log(data);
            $('h1.advice-num').text(`ADVICE #${data.slip.id}`);
            $('p.quote').text(`"${data.slip.advice}"`);
        })
        .catch((err) => this.setState({ error: err.message }));
}

function watchClick() {
    $('button').click((event) => {
        event.preventDefault();

        getAdvice();
    });
}

$(watchClick);
