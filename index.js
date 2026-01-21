const booksURL = 'https://striveschool-api.herokuapp.com/books';

const fetchBooks = function () {
    fetch(booksURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('errore nel recupero libri');
            }
        })
        .then((books) => {
            // metodo per ciclare l'array di libri e stamparli a schermo.
            const cardContainer = document.getElementById('cardContainer');
            books.forEach((book) => {
                cardContainer.innerHTML += `
                <div class="card col col-md-4 col-lg-3" style="width: 18rem;">
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text"><span>${book.price}</span>€</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                `;
            });
        })
        .catch((err) => {
            console.log('errore', err);
        });
}

fetchBooks(); // chiamata alla funzione per recuperare i libri