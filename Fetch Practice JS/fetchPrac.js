// Fetch practice using the pokemon API

// GET pokemon/1 = bulbasaur

const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then((response) => response.json())
  .then((data) => console.log(data.name))
  .catch((error) => console.log(error));

// Fetch data from music generator @ https://github.com/BinaryJazz/genrenator

// const fetch = require('node-fetch');

// fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// async await fetch

// const fetch = require('node-fetch');

// const genRandomMusic = async () => {
//   const response = await fetch(
//     'https://binaryjazz.us/wp-json/genrenator/v1/genre'
//   );
//   const data = await response.json();
//   console.log(data);
// };

// genRandomMusic();

// const fetch = require('node-fetch');

// const getGithubUser = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/makersmarx');
//     if (!response.ok) {
//       throw new Error(response.status);
//     } else {
//       const data = await response.json();
//       console.log(data.login);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// getGithubUser();

// get fake user data from jsonplaceholder

// const fetch = require('node-fetch');

// const getUser = async () => {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/users/3'
//     );
//     if (!response.ok) {
//       throw new Error(response.status);
//     } else {
//       const data = await response.json();
//       console.log(data.name);
//       console.log(data.company.name);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUser();
