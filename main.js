
$.ajaxSetup({
 xhrFields: {
   withCredentials: true
 }
})

$('.btn-google').click(function(){
 window.location= config.host+'/auth/google';
 // 'https://skbe.herokuapp.com/auth/google'
})

$('#logout').click(function(){

 $.get(config.host+'/auth/logout')
  //  'https://skbe.herokuapp.com/auth/logout')

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

$.get(config.host+'/symbols/prices').done(function(data){
  // 'https://skbe.herokuapp.com/symbols/prices')
 console.log(data)
}).fail(function(error){
 console.log(error)
})
