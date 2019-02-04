/*

Dissenya un formulari amb un camp de text. En situar el ratolí dins del camp, s'esborrarà

el text que hi havia per defecte, perquè l'usuari hi pugui escriure.

 */




$(function () {

    jQuery.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    };

    $("div")



        .css("backgroundColor","yellow")
        .width("300")
        .attr("align","center")
        .center();




    $("div:first-child form")

        .hover(function () {

            console.log("a")

            $("div:first-child form input:text").val("")

        })

});