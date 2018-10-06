$(document).ready(function(){
 // Variable's declaration
  var a;
  var x;
  var o;
  var turn=0;
  var arr_player1=[];
  var arr_comp=[];
  var arr_player2=[];
  var arr_victory=
      [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['1','4','7'],
        ['2','5','8'],
        ['3','6','9'],
        ['1','5','9'],
        ['3','5','7']
      ]
     $("#Xplayer").click(function(){
    $("#playerTwo").css("display","none")
    $("#playerOne").css("display","none")
    $("#intro").css("display","none")
    $("#Xplayer").css("display","none")
     $("#Oplayer").css("display","none") 
      $("#table").css("display","")
       x = "X"; 
       o = "O";
       a = "1";
    })
     $("#Oplayer").click(function(){
    $("#playerTwo").css("display","none")
    $("#playerOne").css("display","none")
    $("#intro").css("display","none")
    $("#Xplayer").css("display","none")
     $("#Oplayer").css("display","none") 
      $("#table").css("display","")
        x = "O";   
        o = "X";
        a = "0";
    })
  //Single player selection options
 
 $("#playerOne").click(function(){
    $("#playerOne").css("border","solid")
    $("#playerTwo").css("display","none")
    $("#intro").css("display","")
    $("#Xplayer").css("display","")
    $("#Oplayer").css("display","")
     $('td').click(function(){ 
        if ($(this).html()=="") 
        {
          $(this).html(x);
          arr_player1.push($(this).attr('id'));
          arr_player1.sort(function(c, b){return c-b}); 
        }       
       comp ();
       victory();
           
     })
  })
  //Player Versus player game options.
  $("#playerTwo").click(function(){
    $("#playerTwo").css("border","solid")
    $("#playerOne").css("display","none")
    $("#intro").css("display","")
    $("#Xplayer").css("display","")
    $("#Oplayer").css("display","") 
     $('td').click(function(){   
       if ($(this).html()=="") 
       {
         if (a=='1'){
         $(this).html('X');
         a='0';        
         arr_player1.push($(this).attr('id'));
         arr_player1.sort(function(c, b){return c-b});      
         victory(); 
         
       } else if (a=='0'){
          $(this).html('O');
         a='1';        
         arr_player2.push($(this).attr('id'));
         arr_player2.sort(function(c, b){return c-b});        
         victory(); 
       }
       }    
    })     
  })
  
                                               
//Victory Conditions
  function victory(){ 
    for (i=0; i<arr_victory.length;i++){
     if (arr_victory[i].every(function(c){return arr_player1.indexOf(c)!==-1}))
     {
      $("#table").fadeOut(2000);
      $("#victory").html('Congratulations, Player One Won!').fadeIn(3000).show();
     }
      else if (arr_victory[i].every(function(c){return arr_player2.indexOf(c)!==-1}))
     {
      $("#table").fadeOut(2000);
      $("#victory").html('Congratulations, Player Two Won!').fadeIn(3000).show();
     }
      else if (arr_victory[i].every(function(c){return arr_comp.indexOf(c)!==-1}))
     {
      $("#table").fadeOut(2000);
      $("#victory").html('Computer Won!').fadeIn(3000).show();
     } else if (arr_player1.length==5){
      $("#table").fadeOut(2000);
      $("#victory").html('Its a Draw!').fadeIn(3000).show();
     }
    }
   }
  //AI programming
function comp (){  
  switch (turn){
   //turn 0
  case 0: 
   if ($("#1").html()!="" || $("#3").html()!="" || $("#7").html()!="" || $("#9").html()!="") {
     $('#5').html(o);
    arr_comp.push($('#5').attr('id'));
   }  
  else if ($('#1').html()=="")
  {
    $('#1').html(o);
    arr_comp.push($('#1').attr('id'));
  }
      else if ($('#3').html()=="")
      {
        $("#3").html(o);
        arr_comp.push($('#3').attr('id'));
      }
      else if ($('#7').html()=="")
      {
        $('#7').html(o);
        arr_comp.push($('#7').attr('id'));
      } else if ($('#9').html()=="")
      {
        $('#9').html(o);
        arr_comp.push($('#9').attr('id'));
      }
  arr_comp.sort(function(c, b){return c-b});
  turn = 1;
  break;
   //turn 1
  case 1:
 for (i=0;i<arr_victory.length;i++){
   var lol;
   lol=$(arr_victory[i]).not(arr_player1).get(); 
   if (lol.length==1){
     var block=lol;   
   } 
 }   
  if ($("#"+block).html()==""){
    $("#"+block).html(o);
    arr_comp.push($("#"+block).attr('id'));
  } else if ($('#3').html()=="" ){
   $('#3').html(o)
   arr_comp.push($('#3').attr('id'));
  }
      else if ($('#7').html()=="")
      {
   $('#7').html(o)
   arr_comp.push($('#7').attr('id'));
      }
      else if ($('#1').html()=="")
        {
          $('#1').html(o)
          arr_comp.push($('#1').attr('id'));
        }else if ($('#9').html()=="")
          {
              $('#9').html(o)
   arr_comp.push($('#9').attr('id'));

          }
  arr_comp.sort(function(c, b){return c-b});
  turn = 2;
  break;
  //turn 2
  case 2:
   for (i=0;i<arr_victory.length;i++){
   var lel;
   lel=$(arr_victory[i]).not(arr_comp).get();   
   if (lel.length==1 && $('#'+lel).html()==""){
     var kek=lel;          
   } 
 }   
   for (i=0;i<arr_victory.length;i++){
   var lol;
   lol=$(arr_victory[i]).not(arr_player1).get();    
   if (lol.length==1 && $('#'+lol).html()==""){
     var block=lol;       
   } 
 } 
  if ($('#'+kek).html()==""){
    $('#'+kek).html(o);
    arr_comp.push($('#'+kek).attr('id'));
  }    
  else if ($("#"+block).html()==""){
    $("#"+block).html(o);
    arr_comp.push($("#"+block).attr('id'));
  } else if ($("#5").html()==""){
    $("#5").html(o);
    arr_comp.push($("#5").attr('id'));
  } else if ($('#3').html()=="" ){
   $('#3').html(o)
   arr_comp.push($('#3').attr('id'));
  }
      else if ($('#7').html()=="")
      {
   $('#7').html(o)
   arr_comp.push($('#7').attr('id'));
      }
      else if ($('#1').html()=="")
        {
          $('#1').html(o)
          arr_comp.push($('#1').attr('id'));
        }else if ($('#9').html()=="")
          {
              $('#9').html(o)
   arr_comp.push($('#9').attr('id'));

          }
 arr_comp.sort(function(c, b){return c-b});
  turn = 3;
  break;
  //turn 3    
  case 3:
   for (i=0;i<arr_victory.length;i++){
   var lel;
   lel=$(arr_victory[i]).not(arr_comp).get();   
   if (lel.length==1 && $('#'+lel).html()==""){
     var kek=lel;          
   } 
 }   
   for (i=0;i<arr_victory.length;i++){
   var lol;
   lol=$(arr_victory[i]).not(arr_player1).get();    
   if (lol.length==1 && $('#'+lol).html()==""){
     var block=lol;       
   } 
 } 
  if ($('#'+kek).html()==""){
    $('#'+kek).html(o);
    arr_comp.push($('#'+kek).attr('id'));
  }    
  else if ($("#"+block).html()==""){
    $("#"+block).html(o);
    arr_comp.push($("#"+block).attr('id'));
  } else if ($("#5").html()==""){
    $("#5").html(o);
    arr_comp.push($("#5").attr('id'));
  } else if ($('#3').html()=="" ){
   $('#3').html(o)
   arr_comp.push($('#3').attr('id'));
  }
      else if ($('#7').html()=="")
      {
   $('#7').html(o)
   arr_comp.push($('#7').attr('id'));
      }
      else if ($('#1').html()=="")
        {
          $('#1').html(o)
          arr_comp.push($('#1').attr('id'));
        }else if ($('#9').html()=="")
          {
              $('#9').html(o)
   arr_comp.push($('#9').attr('id'));
          }
 arr_comp.sort(function(c, b){return c-b});
  break;
   } 
}
              
  // The reseting of the Game.
  $("#reset").click(function(){
    document.location.reload(false);
  }) 
})
