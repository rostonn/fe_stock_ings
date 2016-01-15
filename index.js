
$(document).ready(function(){
  var greeting = $('#greeting');
  greeting.fadeOut(3000, function(){
    greeting.removeClass('open');
    greeting.height(0);
  })

  $('.homeButton').prop('disabled', true);
  $('.homeButton').css('background-color', 'hsl(125, 62%, 32%)')
  $('.homeButton').on('click', function(event){
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

 var ticker = $('.ticker');
 ticker.each(function(){
   var margin = $(this),indent = margin.width();
   margin.ticker = function(){
     indent--;
     margin.css('text-indent', indent);
     if(indent < -1 * margin.children('.dataContainer').width()){
       indent = margin.width()
     }
   };
   margin.data('interval', setInterval(margin.ticker, 1000/60));
 });

 $.get(config.host+'/symbols/prices', function(data){
   //'https://skbe.herokuapp.com/symbols/prices'
  //  var sortedData = data.sort();
  //  console.log(data);
   for(var i = 0; i < data.length; i++){
     var stockTickerDiv = document.createElement('div');
     var price = data[i].current_price;
     stockTickerDiv.innerText = data[i].symbol + "       " + price + "        " + ((data[i].volume) / 1000) + "k";
     $('.dataContainer').append(stockTickerDiv);
    //  console.log(stockTickerDiv);
   }
 })

 function getAllTimeStats(){
   $.get(config.host+'/game/alltime',function(data){
     console.log('GET ALL TIME STATS');
      console.log(data);
      $('#allTimeLeaderboard').empty();
      var header = '<tr><th>First Name</th><th>Last Name</th><th>Balance</th></tr>';
      $('#allTimeLeaderboard').append(header);
      data.forEach(function(user){
        var row = '<tr><td>'+user.first_name+'</td><td>'+user.last_name+'</td><td> $ '+user.sum+'</td></tr>';
        $('#allTimeLeaderboard').append(row);
      })
 })
}

$.get(config.host+'/game/status', function(data){
  console.log(data);
  $('#gameStatus').empty();
  var header = '<tr><th>First Name</th><th>Last Name</th><th>Balance</th></tr>';
  $('#gameStatus').append(header);

  for(var i = 0; i < data.length; i++){
    var gameStatusRow = document.createElement('tr');
    $('#gameStatus').append(gameStatusRow);

    var firstNameField = document.createElement('td');
    var lastNameField = document.createElement('td');
    var profitLossField = document.createElement('td');

    firstNameField.innerText = data[i].first_name;
    lastNameField.innerText = data[i].last_name;
    profitLossField.innerText = (data[i].profit_loss).toFixed(2) + '%';

    $(gameStatusRow).append(firstNameField);
    $(gameStatusRow).append(lastNameField);
    $(gameStatusRow).append(profitLossField);
  }
})


 // function gameStatus(){
 //   $.get(config.host+'/game/status',function(data){
 //      console.log('GAME STATUS = ');
 //      console.log(data);
 //      $('#currentDate').empty();
 //
 //
 //      var date = data[0].game_date;
 //      $('#currentDate').append(date);
 //      $('#gameStatus').empty();
 //      var header = '<tr><th>First Name</th><th>Last Name</th><th>Balance</th></tr>'
 //        $('#gameStatus').append(header);
 //
 //          $('#gameStatus').append('<tr>');
 //
 //          var firstName = '<td>'+ data[0].first_name+'</td>';
 //          var lastName = '<td>' + data[0].last_name+'</td>';
 //
 //            $('#gameStatus').append(firstName);
 //            $('#gameStatus').append(lastName);
 //
 //            $('#gameStatus').append(lastName);
 //            $('#gameStatus').append('</tr>');
        // data.forEach(function(user){
        //   console.log(user);
        //   $('#gameStatus').append('<tr>');
        //
        //   var firstName = '<td>'+ user.first_name+'</td>';
        //   var lastName = '<td>' + user.last_name+'</td>';
        //   var profit = '<td>'+user.profit_loss*100+' %</td>'
        //
        //   $('#gameStatus').append(firstName);
        //   $('#gameStatus').append(lastName);
        //   $('#gameStatus').append(profit);
        //   $('#gameStatus').append('</tr>')
        // })
 //   })
 // }

// gameStatus();
getAllTimeStats();


})
