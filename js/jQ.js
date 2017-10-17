
$(document).ready(function(){
//alert($(window).width());
var size= $("#CDTimer").width()*0.1;
var size2= $("#CDTimer").width()*0.05;
var size3,size4;
var size_cover=$("#section_1").width();
$("#timer").css("font-size",size);
$("#message").css("font-size",size2);
$("#f1").css("width",size_cover);
$("#menu2").hide(); $("#logo2").hide();
if ($(window).width() < 768) {
	size3= $(".sec_head").width()*0.09;
    size4= $(".sec_p").width()*0.05;
    $("#CDTimer").css("top","65%");
	$(".cont").css({"padding":"5px 0px","font-size":"12px"});
	$("timer").css("font-size","30px");
	$("message").css("font-size","8px");
	$(".title").css("margin-left","5px");
	$(".table").css("font-size","10px");

 //  alert('Less than 960');
 $("#menu").hide(); $("#logo").hide();
 $("#menu2").show(); $("#logo2").show();
 $("#menu2").click(function(){
 	$("#menu").toggle();
 })
}
else{
	size3= $(".sec_head").width()*0.06;
    size4= $(".sec_p").width()*0.024;
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
