//  author Piers Rueb

$(document).ready(function(){

    //  globals

    var tileClicked = false;
    var firstTileClicked;
    var secondTileClicked;
    var topPosFir = 0;
    var leftPosFir = 0;
    var topPosSec = 0;
    var leftPosSec = 0;
    var shuffle = Math.floor((Math.random() * 4) + 1);
    var moves = 0;
    var secs = 0;

    //  shuffle the tiles

    function shuffleTiles(){
        if(shuffle == 1){
            $('#piece-1').css({top: 305, left:610});
            $('#piece-2').css({top: 0, left:610});
            $('#piece-3').css({top: 305, left: 305});
            $('#piece-4').css({top: 0, left: 305});
            $('#piece-5').css({top: 305, left: 0});
            $('#piece-6').css({top: 0, left: 0});
        } else if(shuffle == 2){
            $('#piece-1').css({top: 305, left: 0});
            $('#piece-2').css({top: 0, left: 0});
            $('#piece-3').css({top: 305, left: 305});
            $('#piece-4').css({top: 0, left: 305});
            $('#piece-5').css({top: 305, left:610});
            $('#piece-6').css({top: 0, left:610});
        } else if(shuffle == 3){
            $('#piece-1').css({top: 0, left:610});
            $('#piece-2').css({top: 0, left: 0});
            $('#piece-3').css({top: 305, left: 305});
            $('#piece-4').css({top: 305, left:610});
            $('#piece-5').css({top: 0, left: 305});
            $('#piece-6').css({top: 305, left: 0});
        } else if(shuffle == 4){
            $('#piece-1').css({top: 0, left:610});
            $('#piece-2').css({top: 305, left:610});
            $('#piece-3').css({top: 0, left: 305});
            $('#piece-4').css({top: 305, left: 305});
            $('#piece-5').css({top: 0, left: 0});
            $('#piece-6').css({top: 305, left: 0});
        }
    }

    $(window).load(function(){
        setTimeout(function(){
            shuffleTiles();
            setInterval(function(){
                secs++
            }, 1000);
        }, 1000);
    });

    //  play the game

    $('.pieces').click(function(){

        if(tileClicked == false){  //  if no tile is clicked

            //  set variables
            firstTileClicked = $(this).attr('id');
            topPosFir = parseInt($(this).css('top'));
            leftPosFir = parseInt($(this).css('left'));

            //  highlight tile
            $(this).addClass('glow');
            tileClicked = true;

        } else{  //  if you've clicked a tile

            //  set variables
            secondTileClicked = $(this).attr('id');
            topPosSec = parseInt($(this).css('top'));
            leftPosSec = parseInt($(this).css('left'));

            //  animations
            $('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
            $('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});

            //  remove the glow and reset the first tile
            $('.pieces').removeClass('glow');
            tileClicked = false;

            //  test for the win

            setTimeout(function(){
                if(
                    $('#piece-1').css('left') == '0px' && $('#piece-1').css('top') == '0px' &&
                    $('#piece-2').css('left') == '305px' && $('#piece-2').css('top') == '0px' &&
                    $('#piece-3').css('left') == '610px' && $('#piece-3').css('top') == '0px' &&
                    $('#piece-4').css('left') == '0px' && $('#piece-4').css('top') == '305px' &&
                    $('#piece-5').css('left') == '305px' && $('#piece-5').css('top') == '305px' &&
                    $('#piece-6').css('left') == '610px' && $('#piece-6').css('top') == '305px'
                ){
                    $('p').text('You have solved the puzzle in ' + secs + ' seconds using ' + moves + ' moves!!');
                    $('article').addClass('glow-2');
                    moves = 0;
                }
            }, 1000);

            //  increment the move counter
            moves++

        }

    });  //  end the click function

});



