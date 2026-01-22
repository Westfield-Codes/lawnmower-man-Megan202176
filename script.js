function setup(){
  document.getElementById("yes").style.display = "none";
  document.getElementById("no").style.display = "none";
}

function okay(){
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;
    if(user=="Lawnmower Man" && pass=="7.3942"){
        document.getElementById("no").style.display = "none";
      document.getElementById("box").style.display = "none";
      document.getElementById("yes").style.display = "block";
      
    }
    else{ document.getElementById("box").style.display = "block";
       document.getElementById("no").style.display = "block";}
}
