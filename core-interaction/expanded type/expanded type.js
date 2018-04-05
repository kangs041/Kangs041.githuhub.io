

var word1Clicked = false;

document.getElementById("word1").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
    document.getElementById("back").style.backgroundColor="white";
    document.getElementById("word1").style.backgroundColor = "white"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("video3").style.visibility="hidden"
  }
    else
    {word1Clicked = false;
      document.getElementById("back").style.backgroundColor = "red"
      document.getElementById("back").style.transition = "0.5s"
      document.getElementById("word1").style.backgroundColor = "grey"
      document.getElementById("video3").style.visibility="visible"
    }
});




var word1Clicked = false;

document.getElementById("word2").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
    document.getElementById("back").style.backgroundColor = "white"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word2").style.backgroundColor = "white"
    document.getElementById("between").style.visibility="hidden"
}
  else
  {word1Clicked = false;
    document.getElementById("back").style.backgroundColor = "orange"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word2").style.backgroundColor = "grey"
    document.getElementById("between").style.visibility="visible"
  }
});



var word1Clicked = false;

document.getElementById("word3").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
    document.getElementById("back").style.backgroundColor = "white"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word3").style.backgroundColor = "white"
    document.getElementById("night").style.visibility= "hidden"
  }
  else
  {word1Clicked = false;
    document.getElementById("back").style.backgroundColor = "black"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word3").style.backgroundColor = "grey"
    document.getElementById("night").style.visibility= "visible"
  }
});



var word1Clicked = false;

document.getElementById("word4").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;

    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word4").style.backgroundColor = "white"
    document.getElementById("love").style.visibility= "hidden"
    document.getElementById("video2").style.visibility= "hidden"
    document.getElementById("love").style.visibility="hidden"
  }
    else
    {word1Clicked = false;
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word4").style.backgroundColor = "grey"
    document.getElementById("love").style.visibility= "visible"
    document.getElementById("video2").style.visibility= "visible"
    document.getElementById("love").style.visibility="visible"
  }
});



var word1Clicked = false;

document.getElementById("word5").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
    document.getElementById("back").style.backgroundColor = "white"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word5").style.backgroundColor = "white"
    document.getElementById("he").style.visibility= "hidden"
  }
    else
    {word1Clicked = false;
      document.getElementById("back").style.backgroundColor = "blue"
      document.getElementById("back").style.transition = "0.5s"
      document.getElementById("word5").style.backgroundColor = "grey"
      document.getElementById("he").style.visibility= "visible"
  }
});



var word1Clicked = false;

document.getElementById("word6").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
    document.getElementById("word6").style.backgroundColor = "white"
    document.getElementById("video7").style.visibility="hidden"
  }

  else
  {word1Clicked = false;
    document.getElementById("word6").style.backgroundColor = "grey"
    document.getElementById("video7").style.visibility="visible"
  }
});



var word1Clicked = false;

document.getElementById("word7").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
          document.getElementById("word7").style.backgroundColor = "white"
}
else
{word1Clicked = false;
  document.getElementById("word7").style.backgroundColor = "grey"
  document.getElementById("video1").style.visibility="hidden"
  document.getElementById("video2").style.visibility="hidden"
  document.getElementById("video3").style.visibility="hidden"
  document.getElementById("video4").style.visibility="hidden"
  document.getElementById("video5").style.visibility="hidden"
  document.getElementById("video6").style.visibility="hidden"
  document.getElementById("video7").style.visibility="hidden"
  document.getElementById("love").style.visibility= "hidden"
  document.getElementById("night").style.visibility= "hidden"
  document.getElementById("am").style.visibility= "hidden"
  document.getElementById("everyday").style.visibility= "hidden"
  document.getElementById("back").style.visibility="black"
}
});



var word1Clicked = false;

document.getElementById("word8").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
    document.getElementById("word8").style.backgroundColor = "white"
    document.getElementById("am").style.visibility= "hidden"
  }
  else
  {word1Clicked = false;
    document.getElementById("word8").style.backgroundColor = "grey"
    document.getElementById("am").style.visibility= "visible"
  }
  });

function updateTime() {
	var clockHolder = document.getElementById("am")
	var now= new Date()
	var seconds =now.getSeconds()
	now =now.toTimeString()
	clockHolder.innerHTML = now
}
setInterval(updateTime,1000)




var word1Clicked = false;

document.getElementById("word9").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
    document.getElementById("word9").style.backgroundColor = "white"
    document.getElementById("back").style.backgroundColor= "white"
    document.getElementById("bgm").paused();
}
else{word1Clicked = false;
      document.getElementById("word9").style.backgroundColor = "grey"
      document.getElementById("back").style.backgroundColor="purple"
      document.getElementById("bgm").play();

}
});



var word1Clicked = false;

document.getElementById("word10").addEventListener("click", function(){
  if (word1Clicked ==false){
    word1Clicked = true;
      document.getElementById("word10").style.backgroundColor = "white"
      document.getElementById("video1").style.visibility="hidden"
      document.getElementById("bgm").muted="true"

    }
    else{word1Clicked = false;
          document.getElementById("word10").style.backgroundColor = "grey"
          document.getElementById("video1").style.visibility="visible"
                document.getElementById("bgm").muted="false"
    }
    });

    var word1Clicked = false;

    document.getElementById("word11").addEventListener("click", function(){
      if (word1Clicked ==false){
        word1Clicked = true;
          document.getElementById("word11").style.backgroundColor = "white"
          document.getElementById("video4").style.visibility="hidden"
                    document.getElementById("video5").style.visibility="hidden"
        }
        else{word1Clicked = false;
          document.getElementById("word11").style.backgroundColor = "grey"
          document.getElementById("video4").style.visibility="visible"
                    document.getElementById("video5").style.visibility="visible"
        }
        });



        var word1Clicked = false;

        document.getElementById("word12").addEventListener("click", function(){
          if (word1Clicked ==false){
            word1Clicked = true;
              document.getElementById("word12").style.backgroundColor = "white"
              document.getElementById("everyday").style.visibility="hidden"
            }
            else{word1Clicked = false;
                  document.getElementById("word12").style.backgroundColor = "grey"
                  document.getElementById("everyday").style.visibility="visible"
            }
            });

        document.getElementById("reset").addEventListener("click", function(){
            document.getElementById("back").style.backgroundColor = "white"
            document.getElementById("word1").style.backgroundColor = "white"
            document.getElementById("word2").style.backgroundColor = "white"
            document.getElementById("word3").style.backgroundColor = "white"
            document.getElementById("word4").style.backgroundColor = "white"
            document.getElementById("word5").style.backgroundColor = "white"
            document.getElementById("word6").style.backgroundColor = "white"
            document.getElementById("word7").style.backgroundColor = "white"
            document.getElementById("word8").style.backgroundColor = "white"
            document.getElementById("word9").style.backgroundColor = "white"
            document.getElementById("word10").style.backgroundColor = "white"
            document.getElementById("word11").style.backgroundColor = "white"
            document.getElementById("word12").style.backgroundColor = "white"
            document.getElementById("video1").style.visibility="hidden"
            document.getElementById("video2").style.visibility="hidden"
            document.getElementById("video3").style.visibility="hidden"
            document.getElementById("video4").style.visibility="hidden"
            document.getElementById("video5").style.visibility="hidden"
            document.getElementById("video6").style.visibility="hidden"
            document.getElementById("video7").style.visibility="hidden"
            document.getElementById("love").style.visibility= "hidden"
            document.getElementById("night").style.visibility= "hidden"
            document.getElementById("am").style.visibility= "hidden"
            document.getElementById("everyday").style.visibility= "hidden"
    });
