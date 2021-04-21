const books = require('../data');

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    if (name) {
        booksfiltered = books.filter((book) => book.name.match(new RegExp(name, 'i')));
    } else if (reading) {
        const isReading = Boolean(reading == 1);
        booksfiltered = books.filter((book) => book.reading === isReading);
    } else if (finished) {
        const isFinished = Boolean(finished == 1);
        booksfiltered = books.filter((book) => book.finished === isFinished);
    } else {
        booksfiltered = books;
    }

    const response = h
        .response({
            status: 'success',
            data: {
                books: booksfiltered.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        })
        .code(200);

    return response;
};

module.exports = getAllBooksHandler;