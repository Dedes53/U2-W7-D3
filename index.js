const booksURL = 'https://striveschool-api.herokuapp.com/books';

// Funzione che si occupa di recuperare i libri dall'API e visualizzarli
const fetchBooks = function () {

    // fetch() - Metodo nativo JavaScript per effettuare richieste HTTP
    // Restituisce una Promise che si risolve con la risposta del server
    fetch(booksURL)

        // . then() - Primo gestore della Promise
        // Riceve come parametro 'response' (la risposta del server)
        .then((response) => {

            // response.ok - Proprietà booleana che è true se lo status code è 200-299
            if (response.ok) {

                // response.json() - Metodo che converte il corpo della risposta da JSON a oggetto JavaScript
                // Restituisce anch'esso una Promise
                return response.json();

            } else {

                // throw new Error() - Lancia un'eccezione che verrà catturata dal . catch()
                throw new Error('errore nel recupero libri');
            }
        })

        // .then() - Secondo gestore della Promise
        // Riceve come parametro 'books' (l'array di oggetti libroconvertito da JSON)
        .then((books) => {
            // metodo per ciclare l'array di libri e stamparli a schermo
            const cardContainer = document.getElementById('cardContainer');

            books.forEach((book) => {
                cardContainer.innerHTML += `
                <div class="card col col-md-4 col-lg-3 shadow-lg" style="width: 18rem;">
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

        // .catch() - Gestore degli errori della catena di Promise
        // Cattura qualsiasi errore lanciato nei . then() precedenti
        .catch((err) => {
            console.log('errore', err);
        });
}

fetchBooks();