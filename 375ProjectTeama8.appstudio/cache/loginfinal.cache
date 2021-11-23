// This is your blank starting team project - Dr. C
let query = ""
let req = {}
let pw = "M@ggie18"
let netID = "raw51419"
let database = "375groupa8"
let results = []


loginsbmt.onclick=function(){
  
  //variables hold username and password
  let userID=userinpt.value
  let master_pass=passinpt.value
  
  //MySQL query formatted for JS
  query = "SELECT username, master_pass FROM useractmain WHERE username='"+userID+"' AND master_pass='"+master_pass+"'"
  
  //connect to server
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
    
    if (req.status == 200) { //transit trip worked.  
    
    
    results=JSON.parse(req.responseText)
    
    console.log(`Transit completed. results are ${results}`)
    
    if (results.length == 0) 
    
    console.log(`User does not exist`)
    
  else { ChangeForm(homepage)
    }
    
  } else console.log(`error`)
}

