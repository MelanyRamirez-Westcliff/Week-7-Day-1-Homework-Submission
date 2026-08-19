$(document).ready(function(){

    /* Open lightbox when cliff image is clicked */
    $('.lightbox-toggle img').click(function(){

        $('.backdrop')
            .animate({'opacity':'.50'}, 300, 'linear')
            .css('display', 'block');

        $('.box').fadeIn();

        // Remove previous image from lightbox
        $('.box img').remove();

        // Clone the cliff image that was clicked
        var img = $(this).clone();

        // Add cloned image to lightbox
        $('.box').append(img);
    });

    /* Close lightbox */
    $('.close, .backdrop').click(function(){

        $('.backdrop').animate(
            {'opacity':'0'},
            300,
            'linear',
            function(){
                $('.backdrop').css('display', 'none');
            }
        );

        $('.box').fadeOut();
    });

});