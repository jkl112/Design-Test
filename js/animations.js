class Animations {
    constructor(){
        this.gallery_elems = "#gallery, .gallery_column, .gallery_img";
        this.heading_elems = "h1, h2, h4, .quote";
        this.article_elems = ".article_container";
        this.hideElements();
        this.startAnimation();
        this.bindRollovers();
    }
    hideElements(){
        $(this.gallery_elems).animate({"opacity": "0"}, 0).css("margin-left", "-10px");
        $(this.heading_elems).animate({"opacity": "0"}, 0).css("margin-left", "-10px");
        $(this.article_elems).animate({"opacity": "0"}, 0).css("margin-left", "-10px");
        $("p").animate({"opacity": "0"}, 0).css("margin-left", "-10px");
    }
    startAnimation(){
        $("document").ready(() => {
            this.animateDocument();
        });
    }
    animateDocument() {
        var timeout = 1000;
        $(this.gallery_elems).each(function(){
            $(this).animate({"opacity": "1", "margin-left": "0px"}, timeout);
            timeout = timeout + 300;
        });
        setTimeout(() => {
            $(this.heading_elems).each(function(){
                $(this).animate({"opacity": "1", "margin-left": "0px"}, 1000);
            });
            $(this.article_elems).each(function(){
                $(this).animate({"opacity": "1", "margin-left": "0px"}, 1000);
            });
            $("p").each(function(){
                $(this).animate({"opacity": "1", "margin-left": "0px"}, 1000);
            });
        }, 500);
    }
    bindRollovers(){
        $(".gallery_img, .card_img").mouseover(function(){
            $(this).fadeTo("fast", 0.4);
        });
        $(".gallery_img, .card_img").mouseout(function(){
            $(this).fadeTo("fast", 1);
        });
        $("a").mouseover(function(){
            $(this).animate({"margin-left": "10px"}, 200);
        });
        $("a").mouseout(function(){
            $(this).animate({"margin-left": "0px"}, 200);
        });
    }
}

var animations = new Animations();