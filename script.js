"use strict";
/* eslint-env node, browser */


// --------------------------------------------- Page Curtain ------------------

function curtainOpen() {
    var curtain = document.getElementById("curtain");
    curtain.classList.add("open");
    //    console.log(curtain.classList);
}

function curtainClose() {
    var curtain = document.getElementById("curtain");
    curtain.id = "curtainClose";
}

// ----------------------------------------------- Page navigation ------------

function addNavListener() {
    var
        aNavs = document.querySelectorAll("nav #navLink");
    //console.log(aNavs);
    var i;
    var len = aNavs.length;
    for (i = 0, len; i < len; i++) {
        aNavs[i].addEventListener("click", function (event) {
            event.preventDefault();
            // The destination url
            var clickedLink = this.href;
            this.rel = "preload";
            console.log(this.rel + " " + this.href);
           

            // function to trigger the opening of the destination url



            if (logo.className !== null) {
                logo.className = "out";
                curtainClose();

                function animateSprite(id, units, startPos, frameQty, frameW, fps) {
                    var interval = 1000 / fps,
                        sprite = document.getElementById(id);
                    for (let i = 0; i <= frameQty; i++) {
                        setTimeout(function () {
                            if (i == frameQty) {
                                window.location.href = clickedLink;
                            } else {
                                var position = (i * frameW) + startPos + units;
                                sprite.style.backgroundPositionX = position;
                            }

                        }, i * interval)
                    }
                }

                animateSprite("sprite", "%", 49.375, 23, 2.53, 18);
            } else {
                curtainClose();
            }
            setTimeout(function () {
                // window.location.href = clickedLink;
            }, 800)
        })
    }
}
// -------------------- remove .preload class and allow animations ------
function loaded() {
    document.body.className = "";
}
// -------------------------------------------- Menu button -------------------
var scrollMem;
function menu() {
    if (document.body.classList.contains("menu")) {
        if (document.body.classList.contains("willCondense")) {
            document.body.classList.remove("menu");
            document.body.classList.remove("willCondense");
            document.body.classList.add("condense");
            window.scrollTo(0, scrollMem);
            
            scrollPozish();
        } else {
            document.body.classList.remove("menu");
            
            scrollPozish();
        }

    } else {
        scrollMem = window.pageYOffset;
        
        if (document.body.classList.contains("condense")) {
            document.body.classList.remove("condense");
            document.body.classList.add("willCondense");
            document.body.classList.add("menu");
        }
        else {document.body.classList.add("menu")}
    }
}


// -------------- scroll controlled style -----------------------------------------
var threshold = document.getElementById("logo");
var condense = threshold.offsetHeight;

function scrollPozish() {
    if (document.body.classList.contains("menu")) {
        console.log("Cant scroll, menu open.");
    } else {
        if (window.pageYOffset >= condense) {
            document.body.classList.add("condense")
        } else {
            document.body.classList.remove("condense");
        }
    }
}
// ------------------------------------- Parallax controller --------------------
var parallaxHero = document.getElementById("hero");
//console.log(parallaxHero.offsetHeight);

// ---------------------------- Call functions ------------
addNavListener();
//curtainOpen();
window.onscroll = function () {
    if (document.body.classList.contains("scrollRecall") == false) {
    scrollPozish()
    }
}
