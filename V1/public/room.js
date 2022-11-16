let genRoomBtn = document.querySelector(".generate-room");
let roomCode = document.querySelector("#room-code");
var result = "";
var x;
genRoomBtn.addEventListener("click", makeid)
 function makeid(){
       length=4
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       roomCode.innerHTML = result;
       genRoomBtn.disabled = true;
       gameCode()
}

function gameCode(){
  x = document.getElementById("room-code").innerText
}