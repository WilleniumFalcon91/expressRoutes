const express = require('express');
const app = express();

const db = {
    1001: {
        author: 'oakley',
        title: 'my food is not yours',
        year: 2005
    },
    1002: {
        author: "william_elliott",
        title: "pass me a beer",
        year: 2017
    }
}

app.get('/books/:bookId', (req, res) => {
    let bookId = req.params.bookId;
    let bookInfo = db [bookId];
    let respText =`
    <h1>${bookInfo.title}</h1>
    <h1>${bookInfo.author}</h1>
    <h1>${bookInfo.year}</h1>
    `;
    res.end(respText);
})

app.listen(3456, () => {
    console.log('listening on 3456! *BOOM*');
})