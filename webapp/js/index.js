var flickerSpeed = 62.5;

function flickerLogic(){
  $("body").toggleClass("backgroundBlack");
  flickerSpeed = parseFloat($('#radioGroup label.active input').val());
  setTimeout(flickerLogic, flickerSpeed);
}
setTimeout(flickerLogic, flickerSpeed);

$("button").click(function(){
     $("#dreamMachine").replaceWith('<h1>test</h1>');
});
