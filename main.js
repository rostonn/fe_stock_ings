$.ajaxSetup({
 xhrFields: {
   withCredentials: true
 }
})

$('.btn-google').click(function(){
 window.location='https://skbe.herokuapp.com/auth/google'
})

$('#logout').click(function(){

 $.get('https://skbe.herokuapp.com/auth/logout')

 .done(function(data){
  //  console.log(data)
   if(data === 'logged out successfully'){
     window.location='/'
   } else {
     console.log('unable to logout')
   }
 }).fail(function(error){
   console.error(error)
 })
})

$.get('https://skbe.herokuapp.com/symbols/prices').done(function(data){
 console.log(data)
}).fail(function(error){
 console.log(error)
})
