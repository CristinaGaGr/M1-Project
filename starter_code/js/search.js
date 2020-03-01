//funciones para el search

fetch('http://ws.audioscrobbler.com/2.0/?method=track.search&track=Beli&eve&api_key=f7b12ae0eeebce42b7b5ed283cc1bff9&format=json')
	.then(response => response.json())
	.then (res => console.log(res.results.trackmatches.track));

