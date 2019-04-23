$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true
    });
    function mobileMenu(menuID, menulist, devicewidth) {
        $(window).on('resize', function () {
            if ($(this).width() < devicewidth) {
                if ($(menuID).prop('checked') == true) {
                    $(menulist).show();
                } else {
                    $(menulist).hide();
                }
                $(menuID).click(function () {
                    if ($(this).is(":checked")) {
                        $(menulist).slideDown("slow", function () {
                            $(menulist).show();
                        });
                    } else if ($(this).is(":not(:checked)")) {
                        $(menulist).slideUp("swing", function () {
                            $(menulist).hide();
                        });
                    }
                });
            } else {
                $(menulist).show();
            }
        });
    }
    mobileMenu("#product-hamburger", ".product-categories", 991);
    mobileMenu("#header-hamburger", ".main-nav", 767);
});

function addProduct(prodid) {
    console.log(prodid);
    //addtocart
    let xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "/cart/addtocart/" + prodid, true);
    xmlReq.onload = function () {
        if (xmlReq.status >= 200 && xmlReq.status < 400) {
            let data = JSON.parse(xmlReq.responseText);
            console.log(data);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };
    xmlReq.onerror = function () {
        console.log("Connection Error");
    };
    xmlReq.send();
}

function changeProductCount(prodid, operation, input_id) {
    console.log(prodid);
    //addtocart
    let xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "/cart/changecartcount/" + prodid + "/" + operation, true);
    xmlReq.onload = function () {
        if (xmlReq.status >= 200 && xmlReq.status < 400) {
            let data = JSON.parse(xmlReq.responseText);
            console.log(data);
            data.element.forEach(element => {
                if (element.id == prodid) {
                    document.getElementById("prod_count" + input_id).value = element.count;
                    document.getElementById("prod_price" + input_id).innerHTML = element.price;
                    document.getElementById("prod_totalprice" + input_id).innerHTML = element.totalprice;
                    document.getElementById("prod_checkoutprice" + input_id).innerHTML = checkoutAmount;
                }
            });
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };
    xmlReq.onerror = function () {
        console.log("Connection Error");
    };
    xmlReq.send();
}