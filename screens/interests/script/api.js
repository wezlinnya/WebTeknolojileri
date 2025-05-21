const content = document.getElementById('quoteContent');
const author = document.getElementById('quoteAuthor');
const tag = document.getElementById('quoteTags');

// connect to an api and send a request, pull result then change the p tag's content.

axios.get('https://api.quotable.io/random')
    .then(response => {
        content.textContent = response.data.content;
        author.textContent = response.data.author;
        tag.textContent = response.data.tag;
    })
    .catch(error => {
        // Handle the error
        console.error(error);
    });


   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2VkYzFhYmJkNDkyMThkNDNlYWU1NGQ2ZDUxOTkzZSIsInN1YiI6IjY2NDY4MzRlZTJlYTA3NDNhNDFjYzNiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zc2PRRzwO0oeR0Wdm6_WY_HKrDp8WKcdj5fVhjHHENo'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));