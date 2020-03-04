//funciones para el search

let userInput = document.getElementById('search-input');

let searchButton = document.querySelector('.search-btn');

let allCards = document.querySelector('.all-cards');


//Fetch API canciones

const myApi = (e) => {
	e.preventDefault();
	allCards.innerHTML = '';
	fetch(`https://itunes.apple.com/search?limit=15&entity=musicTrack&term=${userInput.value}`)
		.then(response => response.json())
		.then((res) => {
			let myResult = res.results;
			myResult.forEach(e => {
				let myResultName = e.trackName;
				let myResultArtist = e.artistName;
				let myResultPhoto = e.artworkUrl100;
				let audio = e.previewUrl;
				let artistUrl = e.artistViewUrl;
				let genre = e.primaryGenreName;
				myResultName = myResultName.length > 30 ? myResultName.substr(0, 30) + '...' : myResultName;


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
			Array.from(allPlayBtn).forEach((element) => {
				element.addEventListener('click', playMusic);
			});
		})
};

searchButton.addEventListener('click', myApi);

const playMusic = (event) => {
	const currentElement = event.target;
	const currentCard = event.target.parentNode.parentElement;
	const currentAudio = currentCard.getElementsByTagName('audio')[0];
	if (currentElement.className.includes('fa-play')) {
		currentAudio.play();
	} else {
		currentAudio.pause();
	}
};


//DATOS FAKE

// 	songs.forEach(e => {
// 		let myResultName = e.trackName;
// 		let myResultArtist = e.artistName;
// 		let myResultPhoto = e.artworkUrl100;
// 		let audio = e.previewUrl;
// 		let artistUrl = e.artistViewUrl;
// 		let genre = e.primaryGenreName;
//
// 		myResultName = myResultName.length > 30 ? myResultName.substr(0, 30) + '...' : myResultName;
//
// 		let newArticle = document.createElement('article');
// 		newArticle.className = 'card';
// 		newArticle.innerHTML = `
// 				 <img class="random-image" src="${myResultPhoto}" alt="artist-photo"/>
// 				 <div class="wrap-track-info">
//            			 <h3 class="song-title">${myResultName}</h3>
//            			 <p class="genre">${genre}</p>
//            			 <a target="_blank" href="${artistUrl}" class="artist">${myResultArtist}</a>
//            		 </div>
//            		 <audio controls>
//                  	<source src="${audio}"/>
//           		 </audio>
//           		 <button class="play-music">
//           		 	<i class="far fa-play-circle"></i>
//           		 	<i class="far fa-pause-circle"></i>
// 				</button>
// 				`;
// 		allCards.appendChild(newArticle);
// 	});
// let allPlayBtn = document.getElementsByClassName('play-music');
// Array.from(allPlayBtn).forEach((element) => {
// 	element.addEventListener('click', playMusic);
//
// });





