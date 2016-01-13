$.ajaxSetup({
 xhrFields: {
   withCredentials: true
 }
})

$('.btn-google').click(function(){
 window.location='http://localhost:3000/auth/google'
 //('https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080&scope=profile&client_id=856670607753-2jriljkug9mihnqkhnmbkhpom3dn3r9b.apps.googleusercontent.com')
})

$('#logout').click(function(){
 $.get('http://localhost:3000/auth/logout')
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

$.get('http://localhost:3000/symbols/prices').done(function(data){
 console.log(data)
}).fail(function(error){
 console.log(error)
})
