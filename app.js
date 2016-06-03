var usedAlbums = []
function random(arr) {
    var album = arr[Math.floor(Math.random() * arr.length)]

    if (usedAlbums.includes(album.cover_art)) {
        return random(arr)
    } else {
        usedAlbums.push(album.cover_art)
    }
}



$.ajax({
    type: 'get',
    url: 'https://lit-fortress-6467.herokuapp.com/object',
    success: function(data) {

        for (var i = 0; i < 3; i++) {
            random(data.results)
        }

        usedAlbums.forEach(function(elem, i) {
            $('.right').append(`<img id="img${i}" src="./images/${elem}">`)

        })


    }
})
