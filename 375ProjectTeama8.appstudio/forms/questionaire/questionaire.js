
let petName = ""
let firstCar = ""
let favMusic = ""

let netID = "rjm73343"
let datapass = "TopJon2005"
let groupID = "375groupa8"
let query = ""

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
  hashPass = lblPassword.value

  ChangeForm(confirmAcc)
}

query = "Select * From questionaire"
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + datapass + "&database=" + groupID + "&query=" + query)
 results = JSON.parse(req.responseText)
var randomQ1 = results[Math.floor(Math.random()*results.length)];
var randomQ2 = results[Math.floor(Math.random()*results.length)];
var randomQ3 = results[Math.floor(Math.random()*results.length)];

 
questionaire.onshow=function(){
  iptPetName.header = randomQ1
  iptFirstCar.header = randomQ2
  iptFavMusic.header = randomQ3
}
