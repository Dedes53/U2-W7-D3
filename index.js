const booksURL = 'https://striveschool-api.herokuapp.com/books';

const fetchBooks = function () {
    fetch(booksURL)
        .then((response) => {
            if (response.ok) { return response.json(); }
            else { throw new Error('errore nel recupero libri'); }
        })
        .then((books) => {
            // metodo per ciclare l'array di libri e stamparli a schermo.
        })
        .catch((err) => {
            console.log('errore', err);
        })
}

fetchBooks(); // chiamata alla funzione per recuperare i libri