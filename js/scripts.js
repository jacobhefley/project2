$(function(event){
  $("button#evaluate").click(function(event){
      var choices=[];
  		choices[0] = $("input:radio[name=q1]:checked").val();
  		choices[1] = $("input:radio[name=q2]:checked").val();
  		choices[2] = $("input:radio[name=q3]:checked").val();
  		choices[3] = $("input:radio[name=q4]:checked").val();
  		choices[4] = $("input:radio[name=q5]:checked").val();
      var hipster=0;
      var home=0;
      var party=0;

      var countChoices=[];
      for(var i=0; i<5; i++){
        if(choices[i]==="hipster"){
          hipster++;
        }
        if(choices[i]==="home"){
          home++;
        }
        if(choices[i]==="party"){
          party++;
        }
      }
      // conditional vacation suggestions
      if(hipster>home && hipster>party){
        window.location.href = 'http://www.sanfrancisco.travel/';
      }
      if(home>hipster && home>party){
        window.location.href = 'https://www.lonelyplanet.com/japan/';
      }
      if(party>hipster && party>home){
        window.location.href = 'http://www.tomorrowland.com/';
      }
      if(hipster=party && hipster>home){
        window.location.href = 'https://www.vegas.com/';
      }
      if(home=hipster && home>party){
        window.location.href = 'https://www.hawaii.com/'
      }
      if(home=party && party>hipster){
        window.location.href = 'https://secure.royalcaribbean.com/'
      }
  		var sp = " ";
		//$("#output").text( choices[0] );
		event.preventDefault();

	});
});
