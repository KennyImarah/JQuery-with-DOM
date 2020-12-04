//alert("It is still working");


  // $("h1").click(function(){
  //   $("h1").css("color" , "Green");
  // });

//   $("button").click(function(){
//     $("h1").css("color", "purple");
//   })
//
// $("input").keypress(function(even){
//   $("h1").text(event.key);
// });


// $("h1").on("mouseover" , function(){
//   $("h1").css("color", "pink");
// })

$("button").on("click" , function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});
