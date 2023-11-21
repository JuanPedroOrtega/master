console.log("************** DELIVERABLE 04 *********************");
var isBookRead = function (books, titleToSearch) {
    var book = books.find(function (book) { return book.title === titleToSearch; });
    return book ? book.isRead : false;
};
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
