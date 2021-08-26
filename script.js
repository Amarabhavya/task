
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

function open_data(evt, dataName) {
    const features = document.getElementsByClassName("features");
    for(let i=0;i<features.length;i++)
    {
        features[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(dataName).style.display = "block";
      evt.currentTarget.className += " active";
}


const features = document.getElementsByClassName("features");

const enteredDate = document.querySelector(".EnteredDate");
const receivedDate = document.querySelector(".ReceivedDate");
const noofshares= document.querySelector(".NumberofShares");
const type= document.querySelector(".Type");
const amount= document.querySelector(".Amount");
const status = document.querySelector(".Status");






fetch('data.json')
.then(response => response.json())
.then(data =>{
    for(let x in features){
        var value= features.firstElementChild.innerHTML;
        enteredDate[x].innerHTML = data[value].EnteredDate;
        receivedDate[x].innerHTML = data[value].ReceivedDate;
        numberOfShares[x].innerHTML = data[value].NumberofShares;
        type[x].innerHTML = data[value].Type;
        amount[x].innerHTML = data[value].Amount;
        status[x].innerHTML = data[value].Status;
        info[x].innerHTML = data[value].info;
        
    }
    
})
