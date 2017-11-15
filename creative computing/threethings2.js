

document.addEventListener("click",handleDocumentClick)

function handleDocumentClick(evt){
    console.log(evt)

        document.getElementById("face").style.backgroundColor="#93642b"
        document.getElementById("ear-left").style.backgroundColor="#93642b"
        document.getElementById("ear-right").style.backgroundColor="#93642b" 
        document.getElementById("eye-left").style.width="50px"
        document.getElementById("eye-right").style.width="50px"
} 


document.addEventListener("mousemove",handleMouseMove)

	function handleMouseMove(evt){
		var x = (evt.pageX / window.innerWidth)*255
		var y = (evt.pageY / window.innerHeight)*255

   		x= Math.round(x)
   		y= Math.round(y)

      document.getElementById("face").style.backgroundColor="rgb(" +x+ ",100,200)"
   }


document.addEventListener("keypress",handleKeyPress)

function handleKeyPress(evt) {
		document.getElementById("nose").style.backgroundColor="red"

		
		if (document.getElementById("black-right",).style.backgroundColor =="black") {

document.getElementById("black-right").style.backgroundColor = "green"
} else {
document.getElementById("black-right").style.backgroundColor = "black"
if (document.getElementById("black-left",).style.backgroundColor =="black") {

document.getElementById("black-left").style.backgroundColor = "green"
} else {
document.getElementById("black-left").style.backgroundColor = "black"
}
}	}






