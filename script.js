
const togglebutton = document.getElementById('toggle');
const navlist=document.getElementById('nav-list');
const assistance= document.querySelector(".need-assistance");
const help= document.querySelector(".help");


togglebutton.addEventListener('click', () =>{
navlist.classList.toggle('check');
if(navlist.className === "header-links check"){
    btn.className = "fa fa-close";
    }else{
        btn.className = " fa fa-bars";
    }
                
    })
            
            

function open_help(){
    document.getElementById("help").style.display="block";
}

function close_help(){
    document.getElementById("help").style.display="none";
}

window.onclick = function(event) {
    if (event.target == help) {
        help.style.display = "none";
        }
}