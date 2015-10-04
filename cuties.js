/**
 * Created by Anicet on 9/19/2015.
 */
function Align()
{
   var y = $("#userText").offset();
  z = y.left;
  $("#emailText").parent().css({position:'relative'});
  $("#emailText").css({left: z, position: 'absolute'});
}
