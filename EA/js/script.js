"use strict";

//==============================================//
// !!!!!! ***** HOME PAGE ***** !!!!!!//
//==============================================//

//====================================================//
// toggle navigation block
function toggleNavigation() {
    $(".c-hamburger").on("click", function(){
        if(!$(this).hasClass("is-active")){
            $(this).addClass("is-active");
        } else {
            $(this).removeClass("is-active");
        };

        var obj = {},
            speed;

        if($(window).width() > 991) {
            if($(".c-hamburger").hasClass("is-active")){
                obj.top = 108;
                speed = 400;

            } else {
                obj.top = -526;
                speed = 200;
            }
        } else if($(window).width() > 767) {
            if($(".c-hamburger").hasClass("is-active")){
                obj.top = 98;
                speed = 400;

            } else {
                obj.top = -526;
                speed = 200;
            }
        } else if ($(window).width() > 480){
            if($(".c-hamburger").hasClass("is-active")){
                obj.top = 100;
                speed = 400;

            } else {
                obj.top = -526;
                speed = 200;
            }
        } else {
            if($(".c-hamburger").hasClass("is-active")){
                obj.top = 70;
                speed = 400;

            } else {
                obj.top = -526;
                speed = 200;
            }
        }
        $(".navigation").animate(obj, speed);
    });
}
//====================================================//


//====================================================//
// change attr img of .banner-profession and calculation-wages
function changeImages() {
    if($(window).width() < 768) {
        // .banner-profession "img" //
        $(".banner-profession_wrap>img").attr("src", "img/banner-profession-m.jpg");
        // calculation-wages "rotate-90deg" //
        $(".rotate-90deg").attr("src", "img/input-arrow-90deg.png");
    } else {
        $(".banner-profession_wrap>img").attr("src", "img/banner-profession.jpg");
        $(".rotate-90deg").attr("src", "img/input-arrow.png");
    }
}
//====================================================//


//====================================================//
// change property top of navigation block
function changeTopNavigaton() {
    if($(".c-hamburger").hasClass("is-active")){
        var top;

        if($(window).width() > 991){
            top = 108;
        } else if ($(window).width() > 767){
            top = 98;
        } else if($(window).width() > 480){
            top = 100;
        } else {
            top = 70;
        };

        $(".navigation").css({
            "top": top+"px"
        });
    }
}
//====================================================//


//====================================================//
// animate buttons on hover
function hoverButton() {
    $(".button-left").on("mouseenter", function() {
        $(this).addClass("button-left-hover");
        $(this).parent("a").siblings("button").addClass("button-right-hover");
    });

    $(".button-left").on("mouseleave", function() {
        $(this).removeClass("button-left-hover");
        $(this).parent("a").siblings("button").removeClass("button-right-hover");
    });

    $(".button-right").on("mouseenter", function() {
        $(this).addClass("button-right-hover");
        $(this).siblings("a").children("button").addClass("button-left-hover");
    });

    $(".button-right").on("mouseleave", function() {
        $(this).removeClass("button-right-hover");
        $(this).siblings("a").children("button").removeClass("button-left-hover");
    });
}
//====================================================//


//====================================================//
// vertical scroll to
function scrollToCalculationWages() {
    $("#to-calculation-wages").on("click", function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#js-calculation-wages").offset().top
        }, 400);
    });
}
//====================================================//


//====================================================//
// plugin viewportChecker https://github.com/dirkgroenen/jQuery-viewport-checker
!function (a) {
    a.fn.viewportChecker = function (b) {
        var c = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function (a, b) {
            },
            scrollHorizontal: !1,
            scrollBox: window
        };
        a.extend(c, b);
        var d = this, e = {height: a(c.scrollBox).height(), width: a(c.scrollBox).width()},
            f = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") || -1 != navigator.userAgent.toLowerCase().indexOf("windows phone") ? "body" : "html";
        return this.checkElements = function () {
            var b, g;
            c.scrollHorizontal ? (b = a(f).scrollLeft(), g = b + e.width) : (b = a(f).scrollTop(), g = b + e.height), d.each(function () {
                var d = a(this), f = {}, h = {};
                if (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")), d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")), d.data("vp-add-class-full-view") && (h.classToAddForFullView = d.data("vp-add-class-full-view")), d.data("vp-keep-add-class") && (h.removeClassAfterAnimation = d.data("vp-remove-after-animation")), d.data("vp-offset") && (h.offset = d.data("vp-offset")), d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")), d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")), d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")), a.extend(f, c), a.extend(f, h), !d.data("vp-animated") || f.repeat) {
                    String(f.offset).indexOf("%") > 0 && (f.offset = parseInt(f.offset) / 100 * e.height);
                    var i = f.scrollHorizontal ? d.offset().left : d.offset().top,
                        j = f.scrollHorizontal ? i + d.width() : i + d.height(), k = Math.round(i) + f.offset,
                        l = f.scrollHorizontal ? k + d.width() : k + d.height();
                    f.invertBottomOffset && (l -= 2 * f.offset), g > k && l > b ? (d.removeClass(f.classToRemove), d.addClass(f.classToAdd), f.callbackFunction(d, "add"), g >= j && i >= b ? d.addClass(f.classToAddForFullView) : d.removeClass(f.classToAddForFullView), d.data("vp-animated", !0), f.removeClassAfterAnimation && d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                        d.removeClass(f.classToAdd)
                    })) : d.hasClass(f.classToAdd) && f.repeat && (d.removeClass(f.classToAdd + " " + f.classToAddForFullView), f.callbackFunction(d, "remove"), d.data("vp-animated", !1))
                }
            })
        }, ("ontouchstart" in window || "onmsgesturechange" in window) && a(document).bind("touchmove MSPointerMove pointermove", this.checkElements), a(c.scrollBox).bind("load scroll", this.checkElements), a(window).resize(function (b) {
            e = {height: a(c.scrollBox).height(), width: a(c.scrollBox).width()}, d.checkElements()
        }), this.checkElements(), this
    }
}(jQuery);
//====================================================//


//====================================================//
// adding class pointer
function addClassPointer() {
    if($(window).width()<767) {
        $(".right-list__title").addClass("pointer");
    } else {
        $(".right-list__title").removeClass("pointer");
    }
}
//====================================================//


//====================================================//
// creating animate of img vertical arrow
function animateArrowVerticalList() {
    if($(window).width()>767) {
        $(".pointer").viewportChecker({
            classToAdd: 'visible',
            offset: "50%",
            repeat: true
        });
    } else {
        $(".pointer").viewportChecker({
            classToAdd: 'visible',
            offset: "30%",
            repeat: true
        });
    }
}

var array = [],
    arrayTops = [];

function setArray() {
    $(".vertical-list").find(".pointer").each(function () {
        array.push($(this).offset().top);
    });

    arrayTops.push(Math.min.apply(null, array));
};

function setArrayResize() {
    array = [];
    $(".vertical-list").find(".pointer").each(function () {
        array.push($(this).offset().top);
    });
}

function setStartTopImgArrow() {
    if(!(array.length == 0)) {
        $(".vertical-list_arrow").css({
            "top": (Math.min.apply(null, array) - $(".left-list__items").offset().top) + "px"
        });
    }
};

function getMoveTopImgArrow() {
     if ($(".pointer").hasClass("visible")) {

        // rotate img //
        var lastElementArrayTops = arrayTops.pop();

        if(lastElementArrayTops > ($(".visible").offset().top)) {
            $(".vertical-list_arrow").css({
                "transform": "rotate(180deg)"
            }).addClass("180deg");
        };

        if(($(".vertical-list_arrow").hasClass("180deg")) && (lastElementArrayTops < ($(".visible").offset().top))){
            $(".vertical-list_arrow").css({
                "transform": "rotate(360deg)"
            }).removeClass("180deg");
        }

        arrayTops.push($(".visible").offset().top);

        // move img //
        $(".vertical-list_arrow").css({
            "top": ($(".visible").offset().top - $(".left-list__items").offset().top) + "px"
        });
    };
}
//====================================================//

//====================================================//
// change img of banner happy-freelancers and banner-gratitude-reviews
function changeImgBannerHappyFrilansers (){
    if($(window).width() < 1200) {
        $(".banner-happy-freelancers>img").attr("src", "img/banner-happy-frilansers-m.jpg");
    } else {
        $(".banner-happy-freelancers>img").attr("src", "img/banner-happy-frilansers.jpg");
    };
};

function changeImgBannerGratitudeReviews (){
    if($(window).width() < 1200) {
        $(".banner-gratitude-reviews>img").attr("src", "img/banner-gratitude-reviews-m.jpg");
    } else {
        $(".banner-gratitude-reviews>img").attr("src", "img/banner-gratitude-reviews.jpg");
    };
};
//==============================================//


//==============================================//
// show section ".hidden-result-calculator" //
function showSectionRezultCalculator() {
    $(".calculation-wages__buttons .button-right").on("click", function () {
        if($(".hidden-result-calculator").css("display") == "none"){
            $(".hidden-result-calculator").slideDown();
            //==============================================//
            // morris js https://morrisjs.github.io/morris.js/index.html
            // ==============================================//
            Morris.Donut({
                resize: true,
                element: 'donut',
                data: [
                    {value: 25, label: 'Skatter & avgifter'},
                    {value: 24.4, label: 'Frilansjobbarna'},
                    {value: 50.6, label: 'Din ersättning'},
                ],
                colors: [
                    '#646464',
                    '#CCC',
                    '#ea2f2f',
                ],
                formatter: function (x) { return x + "%"}
            });
            // ==============================================//
        } else {
            $(".hidden-result-calculator").slideUp("fast");
            setTimeout(function () {
                $("#donut>svg").remove();
            }, 500);
        }
    });
}
//==============================================//


//==============================================//
// button scroll up //
function scrollUpBody() {
    $("#js-scroll-up img").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, {
            duration: 1000,
            specialEasing: {
                scrollTop: 'swing'
            }
        });
    });
};
//==============================================//


//==============================================//
// animate scroll //
function changeAttrAnimateZoomIn() {
    if($(window).width()<1200){
        $(".js-animate-zoom-in").attr("data-aos", "false");
    } else {
        $(".js-animate-zoom-in").attr("data-aos", "zoom-in");
    }
}
//==============================================//


//==============================================//
// !!!!!! ***** ADMIN ***** !!!!!!//
//==============================================//

//==============================================//
// .admin-admin  toggle  dropdown-list
function toggleDropdownList() {
    $('#js-dropdown-list').on('click', function () {

        if ($(".c-hamburger").hasClass("is-active")) {
            $(".c-hamburger.c-hamburger--htx.pull-right.is-active").removeClass("is-active");
            $(".navigation").animate({top: -520, speed: 200});
        }

        $('.dropdown-list>ul').slideToggle('100');
    });
}


function slideUpDropdownList() {
    $("body, html").on('click', function (e) {
        if ($(e.target).hasClass('button-dropdown-list') || $(e.target).parent().hasClass('button-dropdown-list')) {
            return false;
        }
        else if ($(e.target).hasClass('dropdown-wrap__list') || $(e.target).parent().hasClass('dropdown-wrap__list')) {
            return false;
        }
        else {
            $('.dropdown-list>ul').slideUp('100');
        }
    });
};
//==============================================//


//==============================================//
// .admin-admin switch language
function switchLanguage() {
    $(".fa-chevron-down").on("click", function(e){
        // event.stopPropagation(e);
        var $this = $(this);
        $this.prev("a").siblings("a").slideToggle(100).css({'display':'block'});
        $('.switch-language').css({'margin-bottom':'-12px'});
    });
};
//==============================================//


//==============================================//
// .admin-admin show Morris.Donut (https://morrisjs.github.io/morris.js/index.html)
function showMorrisDonutAdminAdmin() {
    if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "admin-admin.html"){
        Morris.Donut({
            resize: true,
            element: 'donut',
            data: [
                {value: 25, label: 'Skatter & avgifter'},
                {value: 24.4, label: 'Frilansjobbarna'},
                {value: 50.6, label: 'Din ersättning'},
            ],
            colors: [
                '#646464',
                '#CCC',
                '#ea2f2f',
            ],
            formatter: function (x) { return x + "%"}
        });
    }
}
// ==============================================//


//==============================================//
// .admin-scapa adding and remove select select_teammembers
function addingSelectTeammembers() {
    $(".js-icon-plus-admin").on("click", function () {
        $(".select_teammembers").last("div").after(
            "<div class='wrap-select select_teammembers'><select class='add_teammembers_second_select' name='frmClientID' required=''><option selected='selected' value=''>Choose teammember</option> </select><img class='arrow-select' src='img/arrow-select.png' alt='arrow-select'><img class='js-icon-minus-admin' src='img/icon-minus-admin.png' alt='add'></div>"
        );
    })
}

function removeSelectTeammembers() {
    $("body").on("click", ".js-icon-minus-admin", function(){
       console.log($(this).parent().parent());
        $(this).parent().remove();
    });
};
//==============================================//


//==============================================//
// .admin-scapa validate form plugin jQuery Validation https://jqueryvalidation.org/documentation/
var eN = true,
    sHw = false,
    textErrorRequired,
    textErrorDigits,
    textErrorEmail;

if(eN) {
    textErrorRequired = "This field is required";
    textErrorDigits = "Please enter the correct phone number";
    textErrorEmail = "Please enter the correct email";
}else{
    textErrorRequired = "In Swedish";
    textErrorDigits = "In Swedish";
    textErrorEmail = "In Swedish";
}

function validateFormAdminScapa() {
    if($('#invoice_form').length){
        $('#invoice_form').validate({
            rules: {
                frmClientID: {
                    required: true
                },
                frmReference: {
                    required: true
                },
                frmReferenceTel: {
                    required: true,
                    digits: true
                },
                frmReferenceEmail: {
                    required: true,
                    email: true
                },
                frmDays: {
                    required: true
                },
                frmCurrency: {
                    required: true
                },
                frmPay: {
                    required: true
                }
            },
            messages: {
                frmClientID: {
                    required: textErrorRequired
                },
                frmReference: {
                    required: textErrorRequired
                },
                frmReferenceTel: {
                    required: textErrorRequired,
                    digits:  textErrorDigits
                },
                frmReferenceEmail: {
                    required: textErrorRequired,
                    email:  textErrorEmail
                },
                frmDays: {
                    required: textErrorRequired,
                },
                frmCurrency: {
                    required: textErrorRequired,
                },
                frmPay: {
                    required: textErrorRequired,
                },
            },
            focusCleanup: true,
            focusInvalid: false
        });
    }
}

// sign-up validate form plugin jQuery Validation https://jqueryvalidation.org/documentation/
function validateFormLogin() {
    if($('#sign-up-validate').length){
        $('#sign-up-validate').validate({
            rules: {
                RUFC_firstname: {
                    required: true
                },
                RUFC_lastname: {
                    required: true
                },
                RUFC_email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                RUFC_firstname: {
                    required: textErrorRequired
                },
                RUFC_lastname: {
                    required: textErrorRequired
                },
                RUFC_email: {
                    required: textErrorRequired,
                    email:  textErrorEmail
                }
            },
            focusCleanup: true,
            focusInvalid: false
        });
    }
}
//==============================================//


//==============================================//
// sign-up onchange="registrationUserType()"
function registrationUserType() {
    var typeOfUser = $(".reg_user_selecttype").val();
    if(typeOfUser === "0"){
        $(".reg_user_form_client").css({
            "display": "block"
        });
        $(".reg_user_form_freelancer").css({
            "display": "none"
        });
    }
    else {
        $(".reg_user_form_client").css({
            "display": "none"
        });
        $(".reg_user_form_freelancer").css({
            "display": "block"
        });
    }
}
//==============================================//


//==============================================//
// !!!!!! ***** DOCUMENT READY ***** !!!!!!//
//==============================================//
$(document).on("ready", function() {
    //==============================================//
    // AOS (Animate on scroll library) https://michalsnik.github.io/aos/  &&   https://github.com/michalsnik/aos //
    AOS.init();
    //=============================================//

    toggleNavigation();
    changeImages();
    hoverButton();
    scrollToCalculationWages();

    // admin-admin //
    showMorrisDonutAdminAdmin();
    switchLanguage();
    toggleDropdownList();
    slideUpDropdownList();
    addingSelectTeammembers();
    removeSelectTeammembers();
    validateFormAdminScapa();
    validateFormLogin();

    registrationUserType()

    addClassPointer();
    animateArrowVerticalList();
    changeImgBannerHappyFrilansers ();
    changeImgBannerGratitudeReviews ();
    setArray();
    setStartTopImgArrow();
    changeAttrAnimateZoomIn();
    showSectionRezultCalculator();
    scrollUpBody();

    $(window).resize(function () {
        changeImages();
        changeTopNavigaton();
        changeImgBannerHappyFrilansers ();
        changeImgBannerGratitudeReviews ();

        addClassPointer();
        animateArrowVerticalList();
        setArrayResize();
        setStartTopImgArrow();
        changeAttrAnimateZoomIn();
    });

    $(window).scroll(function () {
        getMoveTopImgArrow();
    });


    $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
    } );

    if ($("#myTable1").length) {
        $('#myTable1').DataTable({
            "ajax": 'js/arrays.txt',
            "ordering": false,
            "responsive": true,
            "columnDefs": [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: 2 },
                { responsivePriority: 3, targets: -1 }
            ],
            'sPaginationType': 'ellipses',
            "language": {
                "sInfo": "Visar _START_ till _END_ av totalt _TOTAL_ rader",
                "sInfoEmpty": "Visar 0 till 0 av totalt 0 rader",
                "sInfoFiltered": "(filtrerade från totalt _MAX_ rader)",
                "sInfoPostFix":  "",
                "oPaginate": {
                    "sFirst": "Första",
                    "sLast": "Sista",
                    "sNext": "Nästa",
                    "sPrevious": "Föregående"
                }
            }
        });
    }

    if ($("#myTable2").length) {
        $('#myTable2').DataTable({
            "ajax": 'js/arrays2.txt',
            "ordering": false,
            "responsive": true,
            "columnDefs": [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: 2 },
                { responsivePriority: 3, targets: -1 }
            ],
            'sPaginationType': 'ellipses',
            "language": {
                "sInfo": "Visar _START_ till _END_ av totalt _TOTAL_ rader",
                "sInfoEmpty": "Visar 0 till 0 av totalt 0 rader",
                "sInfoFiltered": "(filtrerade från totalt _MAX_ rader)",
                "sInfoPostFix":  "",
                "oPaginate": {
                    "sFirst": "Första",
                    "sLast": "Sista",
                    "sNext": "Nästa",
                    "sPrevious": "Föregående"
                }
            }
        });
    }
    $('.dataTables_filter label').append("<img class='search-img' src='img/search.png'/>");
});




