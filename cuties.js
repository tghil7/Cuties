/**
 * Created by Anicet on 9/19/2015.
 */

 function activate (){
	 $(document).ready(function(){
		$("li").removeClass('active');
		$(this).parent().addClass('active');
         	
		
	 });
 }