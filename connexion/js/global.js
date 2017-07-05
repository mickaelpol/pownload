

$(document).ready(function() {
      
   $(document).ready(function() {
    $('#success').hide();
    $('#dv_loading').hide();
    
    $('#form').submit(function(){
      
      valid =true;
      if($('#identifiant').val()==''){
        
        valid = false;
          
      }
            
      if($('#password').val()==''){
      
        valid = false;
      }
      else{
         $('#dv_loading').fadeIn().delay(3000).fadeOut();
          
         setTimeout(function(){ 
             $('#success').show();
             $('#form').hide();
             $('#logo').hide();
           
         }, 4000);
          
     
      }
      
     
      
      return false;
    });
    
});
    

});


// $('#dv_loading').fadeIn().delay(3000).fadeOut();
// alert('Continu');



