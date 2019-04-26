// Banner Carousel
$( document ).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true
    });
});

// Cart Functionality
var buyProduct = (function() { 
  return {
    addProduct: function(prodid) {
      //addtocart
      let xmlReq = new XMLHttpRequest();
      xmlReq.open("GET", "/cart/addtocart/" + prodid, true);
      xmlReq.onload = function () {
        if (xmlReq.status >= 200 && xmlReq.status < 400) {
          let data = JSON.parse(xmlReq.responseText);
          console.log(data);
          window.location.href="/cart";
        } 
        else {
          console.log("We connected to the server, but it returned an error.");
        }
      }
      xmlReq.onerror = function () {
        console.log("Connection Error");
      }
      xmlReq.send(); 
    },
    changeProductCount: function(prodid, task, input_id){
      //plus-and-minus
      let xmlReq = new XMLHttpRequest();
      xmlReq.open("GET", "/cart/changecartcount/" + prodid + "/" + task, true);
      xmlReq.onload = function () {
        if (xmlReq.status >= 200 && xmlReq.status < 400) {
          let data = JSON.parse(xmlReq.responseText);
          console.log(data);
          (data.element).forEach(element => {
            if(element.id==prodid){                    
              document.getElementById("prod_count" + input_id).value = element.count;
              document.getElementById("prod_price" + input_id).innerHTML = 'Rs.' + element.price;
              document.getElementById("prod_totalprice" + input_id).innerHTML = 'Rs.' + element.totalprice;
            }
          }); 
          document.getElementById("prod_totcount").innerHTML = data.totalCounter;
          document.getElementById("prod_checkoutprice").innerHTML = 'Rs.' + data.checkoutAmount + ' >';
          document.getElementById("cart_counter").innerHTML = data.totalCounter + ' item'; 
          document.getElementById("cart_counter_mobile").innerHTML = data.totalCounter;
        } 
        else {
          console.log("We connected to the server, but it returned an error.");
        }
      }
      xmlReq.onerror = function () {
        console.log("Connection Error");
      }
      xmlReq.send();
    }
  };  
})();  