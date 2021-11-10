$(function()
{
    $('#Create').hide(300).show(1000)
    $('#Enter').hide(300).show(1000)
    $('#Close').hide(300).show(1000)
    $('#Deposit').hide(300).show(1000)
    $('#Change').fadeToggle(500).show(1000)

    $('#Create').on('mouseover',function(){
     $('#Info').fadeToggle(200);
    });
   
   $('#Branch').on('click',function(){
     $('#Closest-Branch').fadeToggle(300);
   });

   $('#EmailHelp').fadeToggle(500);

    $('#Enter').on('mouseover',function(){
        $('#EnterInfo').fadeToggle(200);
       });

       $('#Close').on('mouseover',function(){
        $('#CloseAccount').fadeToggle(200);
       });

       $('#Deposit').on('mouseover',function(){
        $('#EnterDeposit').fadeToggle(200);
       });

       $('#btn-logon').click(function(event){
        event.preventDefault()
        var user ={
            username:$('user-name').val(),
            email:$('user-email').val()
        } 
        console.log('Logging on to account');
       });
    

    });
