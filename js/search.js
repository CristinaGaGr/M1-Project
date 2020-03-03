//funciones para el search
/*
crear variable per seleccionar el input (input.value)
*/
let userInput = document.querySelector('.search-bar');

let searchButton = document.querySelector('.search-btn');

let allCards = document.querySelector('.all-cards');

//TO DO:

// Dins del .then (després de la meva variable del slice) un forEach i dins he de crear un article, afegir-li l'estructura amb backticks,
// fer appenChild al meu "div all cards"
//primer he d'accedir al div all cards //


//Fetch API canciones

// const myApi = () => {
// 	fetch(`https://itunes.apple.com/search?entity=musicTrack&term=${userInput.value}`)
// 		.then(response => response.json())
// 		.then(async (res) => {
// 			let myResult = res.results;
// 			myResult.forEach(e => {
// 				console.log(e);
// 				let myResultName = e.trackName;
// 				let myResultArtist = e.artistName;
// 				let myResultPhoto = e.artworkUrl100;
// 				let audio = e.previewUrl;
// 				let artisttUrl = e.artistViewUrl;
//
// 				let newArticle = document.createElement('article');
// 				newArticle.className = 'card';
// 				newArticle.innerHTML = `
// 				 <img class="random-image" src="${myResultPhoto}" alt="artist-photo"/>
//            		 <h3 class="song-title">${myResultName}</h3>
//            		 <a target="_blank" href="${artisttUrl}" class="artist">${myResultArtist}</a>
//            		 <audio controls>
//                  	<source src="${audio}"/>
//           		 </audio>
// 				`;
// 				allCards.appendChild(newArticle);
// 			});
// 		});
// };

// searchButton.addEventListener('click', myApi);

songs.forEach(e => {
		let myResultName = e.trackName;
		let myResultArtist = e.artistName;
		let myResultPhoto = e.artworkUrl100;
		let audio = e.previewUrl;
		let artistUrl = e.artistViewUrl;

		let newArticle = document.createElement('article');
		newArticle.className = 'card';
		newArticle.innerHTML = `
				 <img class="random-image" src="${myResultPhoto}" alt="artist-photo"/>
           		 <h3 class="song-title">${myResultName}</h3>
           		 <a target="_blank" href="${artistUrl}" class="artist">${myResultArtist}</a>
           		 <audio controls>
                 	<source src="${audio}"/>
          		 </audio>
				`;
		allCards.appendChild(newArticle);
});





