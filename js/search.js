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
// 	fetch(`https://itunes.apple.com/search?limit=15&entity=musicTrack&term=${userInput.value}`)
// 		.then(response => response.json())
// 		.then(async (res) => {
// 			let myResult = res.results;
// 			myResult.forEach(e => {
// 				let myResultName = e.trackName;
// 				let myResultArtist = e.artistName;
// 				let myResultPhoto = e.artworkUrl100;
// 				let audio = e.previewUrl;
// 				let artistUrl = e.artistViewUrl;
// 				let genre = e.primaryGenreName;
//
// 				let newArticle = document.createElement('article');
// 				newArticle.className = 'card';
// 				newArticle.innerHTML = `
// 				 <img class="random-image" src="${myResultPhoto}" alt="artist-photo"/>
// 				 <div>
//            			 <h3 class="song-title">${myResultName}</h3>
//            			 <p class="genre">${genre}</p>
//            			 <a target="_blank" href="${artistUrl}" class="artist">${myResultArtist}</a>
//            		 </div>
//            		 <audio controls>
//                  	<source src="${audio}"/>
//           		 </audio>
// 				`;
// 				allCards.appendChild(newArticle);
// 			});
// 		});
// };
//
// searchButton.addEventListener('click', myApi);
//
let test = songs.slice(0, 15);
test.forEach(e => {
	let myResultName = e.trackName;
	let myResultArtist = e.artistName;
	let myResultPhoto = e.artworkUrl100;
	let audio = e.previewUrl;
	let artistUrl = e.artistViewUrl;
	let genre = e.primaryGenreName;

	let newArticle = document.createElement('article');
	newArticle.className = 'card';
	newArticle.innerHTML = `
				 <img class="random-image" src="${myResultPhoto}" alt="artist-photo"/>
				 <div class="wrap-track-info">
           			 <h3 class="song-title">${myResultName}</h3>
           			 <p class="genre">${genre}</p>
           			 <a target="_blank" href="${artistUrl}" class="artist">${myResultArtist}</a>
           		 </div>
           		 <audio controls>
                 	<source src="${audio}"/>
          		 </audio>
          		 <button class="play-music">
          		 	<i class="far fa-play-circle"></i>
          		 	<i class="far fa-pause-circle"></i>
				</button>
				`;
	allCards.appendChild(newArticle);
});


let allPlayBtn = document.getElementsByClassName('play-music');
console.log(allPlayBtn);

const playMusic = (event) => {
	const currentElement = event.target;
	const currentCard = event.target.parentNode.parentElement;
	const currentAudio = currentCard.getElementsByTagName('audio')[0];
	console.log(currentAudio);


	if (currentElement.className.includes('fa-play')) {
		currentAudio.play();
	} else {
		currentAudio.pause();
	}
};

Array.from(allPlayBtn).forEach((element) => {
	element.addEventListener('click', playMusic);


});





