$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'https://lit-fortress-6467.herokuapp.com/object',
        success: function(data) {
            data.results.forEach(function(album, i) {
                $('.image-holder').append(`<img id="img${i}" src="./images/${album.cover_art}"/>`)
                $(`#img${i}`).attr('data-artist', album.artist)
                $(`#img${i}`).attr('data-title', album.title)
            })

            $('img').click(function() {
                $('#bin').append(`<p>${$(this).attr("data-artist")}: ${$(this).attr("data-title")}</p>`)
            })

            $('.clear').click(function() {
                $('#bin').empty()
            })

            $('.submit').click(function() {
                var playlistObj = {}
                $('#bin').children().each(function() {
                    playlistObj[$(this).text().split(':')[0]] = $(this).text().split(':')[1];

                });

                // console.log(playlistObj);
                $.ajax({
                    type: 'POST',
                    url: 'https://lit-fortress-6467.herokuapp.com/post',
                    data: playlistObj
                }).done(function() {
                    alert('Playlist uploaded successfully!')
                    $('#bin').empty()
                })

            })

        }
    })




})
