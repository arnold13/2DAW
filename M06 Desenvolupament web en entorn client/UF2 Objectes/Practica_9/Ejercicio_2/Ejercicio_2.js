/*
Dissenya un programa amb JavaScript i JQuery format per tres enllaços. En situar el

ratolí damunt de cada enllaç, s'establirà el seu color de fons a verd. En retirar el ratolí, el

fons tornarà al seu color normal.

 */

$(function () {



    $("div:first-child a")

        .css("backgroundColor","grey")
        .hover(function () {

            $(this).css("background-color", "yellow");


        },function () {

            $(this).css("background-color", "grey");


        })

});