$(document).ready(function(){
  $('.homeButton').on('click', function(event){
    window.location.href = "./index.html";
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').prop('disabled', true);
    $('.aboutButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('.signin').toggle('500', 'linear');
    $('.leaderboard').toggle('500', 'linear');
    $('.tagline').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#research').css('display', 'none');
    $('#support').css('display', 'none');
    $('#standings').css('display', 'none');
  })
  $('.aboutButton').on('click', function(event){
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.aboutButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('#about').toggle('500', 'linear');
    $('#research').css('display', 'none');
    $('#support').css('display', 'none');
    $('#standings').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
  });
  $('.researchButton').on('click', function(event){
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.aboutButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('#research').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#support').css('display', 'none');
    $('#standings').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
  });
  $('.standingsButton').on('click', function(event){
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.aboutButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('#standings').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#support').css('display', 'none');
    $('#research').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
  });
  $('.supportButton').on('click', function(event){
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.aboutButton').prop('disabled', false);
    $('#support').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#research').css('display', 'none');
    $('#standings').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
 });
 $('.homeButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.aboutButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.researchButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.standingsButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.supportButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
})
