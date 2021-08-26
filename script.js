
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





fetch('data.json').then(response => response.json()).then(data => {
    let values = document.querySelector('.option-wrapper-body');
    let disclamer = document.querySelector('.text_wrapper');
    let x = 'Grants';
    {
      for( y in data[x]){
        //console.log(y,data[x][y]);
        if(y=='info'){
          disclamer.innerHTML += `<span class="giftid">Gift ID: 4436109</span>
          <span class="content">${data[x]['info']}</span>`;
          continue;
        }
        values.innerHTML += `<div class=items>
        <div>${y}</div>
        <div class=option-value>${data[x][y]}</div>
        </div>`
      }
    }
  })
  
  function open_data(event, currTab) {
    //console.log(currTab);
    let x=currTab;
    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    fetch('data.json').then(response => response.json()).then(data => {
      let values = document.querySelector('.option-wrapper-body');
      values.innerHTML = ``;
      let disclamer = document.querySelector('.text_wrapper');
      {
        for( y in data[x]){
          //console.log(y,data[x][y]);
          if(y=='info'){
            disclamer.innerHTML = `<a class="giftid" href="#">Gift ID: 4436109</a>
            <span class="content">${data[x]['info']}</span>`;
            continue;
          }
          values.innerHTML += `<div class=items>
          <div>${y}</div>
          <div class=option-value>${data[x][y]}</div>
          </div>`
        }
      }
    })
  }