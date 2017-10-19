
$(document).ready(function(){
//alert($(window).width());
var size= $("#CDTimer").width()*0.09;
var size2= $("#CDTimer").width()*0.04;
var size3,size4;
var menu_font;
var size_cover=$("#section_1").width()*0.45;

$("#timer").css("font-size",size);
$("#message").css("font-size",size2);
$("#section_1").css("height",size_cover);
$("#menu2").hide(); $("#logo2").hide();
if ($(window).width() < 768) {
	size3= $(".sec_head").width()*0.09;
    size4= $(".sec_p").width()*0.05;
    menu_font=$("#menu div").width()*0.2;
    $("#team>.cont>div").css("margin-left","8.333333333%");
    $("#menu div").css({"font-size":menu_font,"text-shadow":"1px 1px 3px #b92b27, 0 0 10px #b92b27, 0 0 2px #b92b27"});
    $("#CDTimer").css("top","45%");
	$(".cont").css({"padding":"5px 0px","font-size":"12px"});
	$("timer").css("font-size","30px");
	$("message").css("font-size","8px");
	$(".title").css("margin-left","5px");
	$(".table").css("font-size","10px");

 //  alert('Less than 960');
 $("#menu").show(); $("#logo").hide();
 $("#menu2").hide(); $("#logo2").show();
 
 $("#menu2").click(function(){
 	$("#menu").toggle();
 })
}
else{
	size3= $(".sec_head").width()*0.06;
    size4= $(".sec_p").width()*0.024;
    menu_font=$("#menu div").width()*0.17;
    $("#menu div").css({"font-size":menu_font,"text-shadow": "5px 5px 10px #b92b27, 0 0 25px #b92b27, 0 0 5px #b92b27"});
    $(".cont").css({"font-size":"15px","padding":"30px"});
}
$(".sec_head").css("font-size",size3);
$(".sec_p").css("font-size",size4);
 function blinker() {
    $('#link').fadeOut(3000);
    $('#link').fadeIn(1000);

}
setInterval(blinker, 4000);



});
/*
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
*/
