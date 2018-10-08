$(document).ready(function(){
  var arr_total=[];
  var pc_total=[];
  var n;
  $("button").attr('disabled', true);
  
  
  
$("label").click(function(){ 
  if ($("input:checked").val()=="on")
  {
    $("#count").html("00");
  } else {
    $("#count").html("--");
    arr_total=[];
    pc_total=[];
    n=0;
    $("#strict").prop("checked", false);
    $("button").attr('disabled', true);
  }   
})
  function lel (){
        for (i=0;i<arr_total.length;i++){
        if (pc_total[i]!==arr_total[i]){
          $("#"+Math.floor((Math.random() * 4) + 5))[0].play();
          if ($("#strict").is(":checked")===true){
             n=1;
             arr_total=[];
             pc_total=[];
             $("#count").html("!!");
             setTimeout(function(){$("#count").html("00");},2000)
           } else { 
             arr_total=[];
           }
        } 
      }
     if (JSON.stringify(arr_total)==JSON.stringify(pc_total))
     {
       if ($("#count").html()=="20"){
   $("#main").fadeOut(2000);
   $("body").css({"background-image":'url("http://kingofwallpapers.com/victory/victory-004.jpg")',
                 'background-size':'contain',
                 })
         setTimeout(function(){
           $("#main").fadeIn(2000);
           $("body").css({"background-image":'url("http://orig13.deviantart.net/e097/f/2014/110/0/e/destiny__qhd_by_in3xplicit-d4mr13d.jpg")',
                 'background-size':'1900px 1200px',
                 })
         },5000)
         arr_total=[];
         pc_total=[];
         n=0;
         $("#count").html("00");
         return;
       }
       else
       {
 setTimeout(function(){pc()},1000);
       }
   }
}
   
  function pc(){
    if (n===1){
      return;
    } else {
  var random = Math.floor((Math.random() * 4) + 1);
  pc_total.push(random);
  if (pc_total.length < 10) {$("#count").html("0"+pc_total.length)}
  else if (pc_total.length >= 10) {$("#count").html(pc_total.length)}
  var i=0;
    
  function lol(){ 
  $("#"+pc_total[i])[0].play(); 
  switch (pc_total[i]){
  case 1:
    $("#btn-1").css('background-color','#32CD32')
 setTimeout(function(){$("#btn-1").css('background-color','green')},500)
    break;
  case 2:
    $("#btn-2").css('background-color','#DC143C')
  setTimeout(function(){$("#btn-2").css('background-color','red')},500)
    break;
  case 3:
    $("#btn-3").css('background-color','#F0E68C')
  setTimeout(function(){$("#btn-3").css('background-color','yellow')},500)
    break;
  case 4:
    $("#btn-4").css('background-color','#00BFFF')
  setTimeout(function(){$("#btn-4").css('background-color','blue')},500)
    break;
     };
    if (i<=pc_total.length){
      setTimeout(lol,1000);
    }
     i++;
 }
    lol();
    arr_total=[];  
  }
}
   
$("#btn-1").click(function(){
 $("#1")[0].play();
 $("#btn-1").css('background-color','#32CD32')
 setTimeout(function(){$("#btn-1").css('background-color','green')},500)
  arr_total.push(1);
  lel();
   
  });
$("#btn-2").click(function(){
 $("#2")[0].play();
  $("#btn-2").css('background-color','#DC143C')
  setTimeout(function(){$("#btn-2").css('background-color','red')},500)
  arr_total.push(2);
    lel();
 
  });
$("#btn-3").click(function(){
 $("#3")[0].play(3);
  $("#btn-3").css('background-color','#F0E68C')
  setTimeout(function(){$("#btn-3").css('background-color','yellow')},500)
   arr_total.push(3);
    lel();

  });
$("#btn-4").click(function(){
 $("#4")[0].play(4);
  $("#btn-4").css('background-color','#00BFFF')
  setTimeout(function(){$("#btn-4").css('background-color','blue')},500)
   arr_total.push(4);
    lel();
 
  }); 
$("#start").click(function(){
 if ($("#count").html()=="00"){
 $("button").attr('disabled', false);
if  ($("#start").is(':checked')){
  n=0;
  setTimeout(function(){pc()},1000);
  setTimeout(function(){$("#start").prop("checked", false)},1000);
     }
   } else 
   {
     $("#start").prop("checked", false);
   }
  })
   $("#strict").click(function(){
     if ($("#count").html()=="00"){
    $("#strict").prop("checked", true);
     } else {  $("#strict").prop("checked", false);}
      })
})