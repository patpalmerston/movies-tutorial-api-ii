// see a list of pre populated movies
// add a movie to the list
// update movie info
// remove a movie
// see only released movies

const express = require('express');

const server = express();

server.use(express.json()); // teaches express to parse the body

// use let so we can see we intend to motify
let movieId = 5;
let actorId = 3;
let actors = [
	{
		id: 1,
		name: 'Elijah Wood',
		movies: [1, 2]
	},
	{
		id: 2,
		name: 'Chris Evans',
		movies: [4]
	}
];
let movies = [
	{
		id: 1,
		name: 'The Fellowship of the Rings',
		released: true,
		rating: 5
	},
	{
		id: 2,
		name: 'The Two Towers',
		released: true,
		rating: 4
	},
	{
		id: 3,
		name: 'The Children of Hurin',
		released: false,
		rating: null
	},
	{
		id: 4,
		name: 'Avengers Endgame',
		released: true,
		rating: 5
	}
];

// sanity check endpoint
server.get('/', (req, res) => {
	res.status(200).json({ api: 'up...' });
});

// movies
server.get('/api/movies', (req, res) => {
	res.status(200).json(movies);
});

server.post('/api/movies', (req, res) => {
	const movie = req.body;

	// add the new id
	movie.id = movieId++;
	movies.push(movie);

	// return correct http status code for operation
	res.status(201).json(movies);
});

// delete movies
server.delete('/api/movies/:id', (req, res) => {
  const id = req.params.id
  
  movies = movies.filter(m => m.id !== Number(id))

  res.status(200).json(movies)
})

// list of movies for a particular rating



// actors
server.get('/api/actors', (req, res) => {
	res.status(200).json(actors);
});

// export default server; // ES2015
// module.exports = {server}: // commonJS modules (node.js)
module.exports = server; // CommonJS modules (node)
