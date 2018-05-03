
function onSuccess(position){
  console.log(position)
  //latitude> -77.15
  //latitude <-77.52
 // longitude > 64.388
 //longitude <64.52

  if (position.coords.longitude> -77.15
    && position.coords.longitude< -77.52
    && position.coords.latitude>64.388
    && position.coords.latitude<64.52) {

      document.body.style.backgroundcolor ="red"

  } else {
      document.body.style.backgroundcolor ="blue"
  }
}
function onFailure() {
}
