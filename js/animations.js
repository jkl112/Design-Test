class Animations {
    constructor(){
        this.gallery_elems = "#gallery, .gallery_column, .gallery_img";
        this.heading_elems = "h1, h2, h4, .quote";
        this.article_elems = ".article_container";
        this.hideElements();
        this.startAnimation();
        this.bindRollovers();
        this.block2offset = document.getElementById("main_heading2").offsetTop;
        this.consoleLogClickedElems();
    }
    hideElements(){ //Elements are hidden with JS so that users with JS disabled can still use program
        $(this.gallery_elems).animate({"opacity": "0"}, 0).css("margin-left", "-10px");
        $(this.heading_elems).animate({"opacity": "0"}, 0).css("margin-left", "-10px");
        $(this.article_elems).animate({"opacity": "0"}, 0).css("margin-left", "-10px");
        $("p").animate({"opacity": "0"}, 0).css("margin-left", "-10px");
    }
    startAnimation(){
        window.onload = () => { //Test this live.
            $("#loading_spinner").remove();
            this.animateDocument();
            this.trackScroll();
        }
    }
    animateDocument() {
        var timeout = 760;
        $(this.gallery_elems).each(function(){
            setTimeout(() => {
                $(this).animate({"opacity": "1", "margin-left": "0px"}, 800);
            }, timeout);
            timeout = timeout + 100;
        });
        setTimeout(() => {
            $(this.heading_elems).each(function(){
                $(this).animate({"opacity": "1", "margin-left": "0px"}, 1000);
            });
            $("p").each(function(){
                $(this).animate({"opacity": "1", "margin-left": "0px"}, 1000);
            });
        }, 1500);
    }
    fadeInCards(){
        var timeout = 100;
        $(this.article_elems).each(function(){
            setTimeout(() => {
                $(this).animate({"opacity": "1", "margin-left": "0px"}, 800);
            }, timeout);
            timeout = timeout + 100;
        });
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
    trackScroll(){
        $(window).scroll((e) => {
            var current_scroll_pos = document.documentElement.scrollTop || document.body.scrollTop;
            if (current_scroll_pos > this.block2offset - 400){
                this.fadeInCards();
            }
        });
    }
    consoleLogClickedElems(){
        var clickable_elems = ".gallery_img, .card_img, .read_more";
        $(clickable_elems).click(function(){
            console.log($(this).attr("data-descript"));
        });
    }
}

var animations = new Animations();