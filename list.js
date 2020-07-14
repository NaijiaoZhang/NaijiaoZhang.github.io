var permissions = [
    "mason zhang",
    "steven tang",
    "aris gonell",
    "kim huynh",
]

$(function() {
    var yesOrNo = prompt("Are you Diamond 1 0LP or Higher?", "No");
    yesOrNo = yesOrNo.toLowerCase(); 
    if (yesOrNo == "yes")
    {
      $("#result").append("<h1>Nice! I guess you have the right to judge!</h1>");
    }
    else if (yesOrNo == "no")
    {
      var name = prompt("What's your name (full name with space in between)?", "");
      name = name.toLowerCase(); 
      if (permissions.includes(name))
      {
        if (name == "steven tang")
        {
          	$("#result").append("<h1>Holy shit it's S-s-steven uwu. Of course you can judge!</h1>");
        }
        else if (name == "kim huynh"){
        	var random = 10*Math.random(); 
        	if (random > 9.80)
        	{
        		$("#result").append("<h1>Nkyvf+vkJExeHNa8H9RyhbzShMXgAQefyNU8Y+DR+3B8dnIY39BO9H2tZ7xqW6UkW+5SwAlycyaYHWgxjbgZe73YntQuauaDbgqMgfDxOa3jgQnMX+WLoSGRpi5OUANy</h1>");
        	}
        	else if (random > 7)
        	{
        		$("#result").append("<h1>Stop viewing this page, it's only for certain people. </h1>");
        	}
        	else if (random > 3)
        	{
        		$("#result").append("<h1>You're not allowed here.</h1>");
        	}
        	else
        	{
        		$("#result").append("<h1>Go away normie!</h1>");
        	}
        }
        else 
        {
          $("#result").append("<h1>Nice! I guess you have the right to judge!</h1>");
        }
      }
      else
      {
        $("#result").append("<h1>Why are you talking rando?</h1>");
      }
    }
});