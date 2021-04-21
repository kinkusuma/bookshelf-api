const books = require('../data');

const deleteBookByIdHandler = (request, h) => {
    const { id } = request.params;

    const idx = books.findIndex((book) => book.id === id);

    if (idx !== -1) {
        books.splice(idx, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    } else {
        const response = h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        return response;
    }
};

module.exports = deleteBookByIdHandler;