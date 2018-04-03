

document.getElementById("word1").addEventListener("click", function(){
    document.getElementById("back").style.backgroundColor = "red"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word1").style.backgroundColor = "grey"
});


document.getElementById("word2").addEventListener("click", function(){
    document.getElementById("back").style.backgroundColor = "orange"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word2").style.backgroundColor = "grey"
});


document.getElementById("word3").addEventListener("click", function(){
    document.getElementById("back").style.backgroundColor = "black"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word3").style.backgroundColor = "grey"
    document.getElementById("night").style.visibility= "visible"
});


document.getElementById("word4").addEventListener("click", function(){
    document.getElementById("back").style.backgroundColor = "pink"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word4").style.backgroundColor = "grey"
    document.getElementById("love").style.visibility= "visible"
});


document.getElementById("word5").addEventListener("click", function(){
    document.getElementById("back").style.backgroundColor = "blue"
    document.getElementById("back").style.transition = "0.5s"
    document.getElementById("word5").style.backgroundColor = "grey"
    document.getElementById("he").style.visibility= "visible"
});


document.getElementById("word6").addEventListener("click", function(){
    document.getElementById("word6").style.backgroundColor = "grey"
    document.getElementById("video").style.visibility="visible"
     document.getElementsById("video").load();
});


document.getElementById("word7").addEventListener("click", function(){
      document.getElementById("word7").style.backgroundColor = "grey"
});









document.getElementById("word8").addEventListener("click", function(){
      document.getElementById("word8").style.backgroundColor = "grey"
      document.getElementById("am").style.visibility= "visible"
});

function updateTime() {
	var clockHolder = document.getElementById("am")
	var now= new Date()
	var seconds =now.getSeconds()
	now =now.toTimeString()
		clockHolder.style.color="pink"
	clockHolder.innerHTML = now
}
setInterval(updateTime,1000)


document.getElementById("word9").addEventListener("click", function(){
      document.getElementById("word9").style.backgroundColor = "grey"
      document.getElementById("everyday").style.visibility="visible"
});


document.getElementById("word10").addEventListener("click", function(){
      document.getElementById("word10").style.backgroundColor = "grey"
});


document.getElementById("word11").addEventListener("click", function(){
      document.getElementById("word11").style.backgroundColor = "grey"
});


document.getElementById("word12").addEventListener("click", function(){
      document.getElementById("word12").style.backgroundColor = "grey"

});
