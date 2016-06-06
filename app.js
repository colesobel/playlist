$(document).ready(function() {

    // var usedAlbums = []
    // function random(arr) {
    //     var album = arr[Math.floor(Math.random() * arr.length)]
    //
    //     if (usedAlbums.includes(arr.images[0].url)) {
    //         return random(arr)
    //     } else {
    //         usedAlbums.push(arr.images[0].url)
    //     }
    // }



    $.ajax({
        type: 'get',
        url: 'https://api.spotify.com/v1/search?q=michael%20jackson&type=album&market=US',
        success: function(data) {

            for (var i = 0; i < 3; i++) {
                $('.right').append(`<img id="img${i}" src="${data.albums.items[Math.floor(Math.random() * data.albums.items.length)].images[0].url}">`)
            }


        }
    })



})
