$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'https://api.spotify.com/v1/search?q=michael%20jackson&type=album&market=US',
        success: function(data) {
            data.albums.items.forEach(function(elem, i) {
                $('.image-holder').append(`<img id="img${i}" src="${elem.images[0].url}"/>`)
                $(`#img${i}`).attr('data-title', elem.name)

            })

            $('img').click(function() {
                $('#bin').append(`<p>${$(this).attr("data-title")}</p>`)
            })

            $('.clear').click(function() {
                $('#bin').empty()
            })

            $('.submit').click(function() {
                var playlistObj = {}
                var counter = 0
                $('#bin').children().each(function() {
                    playlistObj[counter] = $(this).text();
                    counter += 1
                });

                console.log(playlistObj);
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
