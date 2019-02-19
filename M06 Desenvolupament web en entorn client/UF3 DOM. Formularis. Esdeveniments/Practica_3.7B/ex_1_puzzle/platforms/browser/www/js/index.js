
$(document).ready(function(){





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


    $('.pieces').click(function(){

        if(tileClicked == false){

            firstTileClicked = $(this).attr('id');
            topPosFir = parseInt($(this).css('top'));
            leftPosFir = parseInt($(this).css('left'));

            $(this).addClass('glow');
            tileClicked = true;

        } else{

            secondTileClicked = $(this).attr('id');
            topPosSec = parseInt($(this).css('top'));
            leftPosSec = parseInt($(this).css('left'));

            $('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
            $('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});

            $('.pieces').removeClass('glow');
            tileClicked = false;


            setTimeout(function(){
                if(
                    $('#piece-1').css('left') == '0px' && $('#piece-1').css('top') == '0px' &&
                    $('#piece-2').css('left') == '305px' && $('#piece-2').css('top') == '0px' &&
                    $('#piece-3').css('left') == '610px' && $('#piece-3').css('top') == '0px' &&
                    $('#piece-4').css('left') == '0px' && $('#piece-4').css('top') == '305px' &&
                    $('#piece-5').css('left') == '305px' && $('#piece-5').css('top') == '305px' &&
                    $('#piece-6').css('left') == '610px' && $('#piece-6').css('top') == '305px'
                ){
                    $('p').text('Resolvistes el puzzle en ' + secs + ' segundos usando ' + moves + ' movimientos!!');
                    $('article').addClass('glow-2');
                    moves = 0;
                }
            }, 1000);

            moves++

        }

    });


    let imagen_bocabajo = false;


    //logica bombilla

    $(".pieces").dblclick(function () {

        console.log(this.id);

        if(imagen_bocabajo === false) {

            $(this).css("background-image", "url('https://testmecards.files.wordpress.com/2014/07/aviator-blue-back.jpg')");

            return imagen_bocabajo = true;

        }else if(imagen_bocabajo === true){

            switch (this.id) {

                case "piece-1":

                    $(this).css("background-image", "url('../material_puzzle/rafael_1.jpg')");


                    break;

                case "piece-2":

                    $(this).css("background-image", "url('../material_puzzle/rafael_2.jpg')");


                    break;

                case "piece-3":

                    $(this).css("background-image", "url('../material_puzzle/rafael_3.jpg')");


                    break;

                case "piece-4":

                    $(this).css("background-image", "url('../material_puzzle/rafael_4.jpg')");


                    break;

                case "piece-5":

                    $(this).css("background-image", "url('../material_puzzle/rafael_5.jpg')");


                    break;

                case "piece-6":

                    $(this).css("background-image", "url('../material_puzzle/rafael_6.jpg')");


                    break;

            }

            return imagen_bocabajo = false;

        }



    });






});



