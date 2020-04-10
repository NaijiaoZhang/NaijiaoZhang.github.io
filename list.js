var permissions = [
    "mason zhang",
    "steven tang",
    "aris gonell",
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