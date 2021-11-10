
let petName = ""
let firstCar = ""
let favMusic = ""

btnSubInfo.onclick=function(){

  btnsavepass.show()
  
  let petName = iptPetName.value
  let firstCar = iptFirstCar.value
  let favMusic = iptFavMusic.value
  
  let pass = petName+firstCar+favMusic
let pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let pwdLen = pass.length;
let randPassword = Array(pwdLen).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  lblPassword.value = randPassword
  
  
}


btnsavepass.onclick=function(){
  let hashPass = lblPassword.value
  console.log(hashPass)
}

