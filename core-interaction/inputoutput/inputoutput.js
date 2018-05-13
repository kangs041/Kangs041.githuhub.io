
document.addEventListener("mousemove",handleMouseMove)

	function handleMouseMove(evt){
		var x = (evt.pageX / window.innerWidth)*255
		var y = (evt.pageY / window.innerHeight)*255

   		x= Math.round(x)
   		y= Math.round(y)

      document.getElementById("big").style.backgroundColor="rgb(" +x+ ",100,200)"
		  document.getElementById("small").style.backgroundColor="rgb(40," +x+ ",20)"
			document.getElementById("mid").style.backgroundColor="rgb(100,50," +x+ ")"
   }
