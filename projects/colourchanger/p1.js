const headings = document.querySelectorAll('.button');

document.body.style.backgroundColor = 'white';

headings.forEach(function (heading) {
    heading.addEventListener('click', function (e) {
        const color = e.target.id;

        if (color === 'grey') {
            document.body.style.backgroundColor = 'grey';
        }
        if (color === 'black') {
            document.body.style.backgroundColor = 'black';
        }
        if (color === 'yellow') {
            document.body.style.backgroundColor = 'yellow';
        }
        if (color === 'pink') {
            document.body.style.backgroundColor = 'pink';
        }
        if (color === 'blue') {
            document.body.style.backgroundColor = 'blue';
        }
    });
});