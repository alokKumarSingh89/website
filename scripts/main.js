var myheading = document.querySelector('h1')
myheading.textContent = 'Lean JavaScript'
myheading.onclick = function(){
    alert(myheading)
}

var img = document.querySelector('img')
img.onclick = function(){
    var mysrc = img.getAttribute('src')
    if(mysrc === 'images/firefox-icon.jpeg'){
        img.setAttribute('src','images/firefox2.png')
    }else{
        img.setAttribute('src','images/firefox-icon.jpeg')
    }
}

var mybutton = document.querySelector('button')
function setUserName(){
    var myName = prompt('Please Enter Youre Name')
    localStorage.setItem('name',myName)
    myheading.textContent = 'JavaScript is cool,'+myName    
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myheading.textContent = 'JavaScript is cool,'+storedName   
}

mybutton.onclick = function(){
    setUserName();
}

function displayMsg(){
    var html = document.querySelector('html');
    var panel = document.createElement('div');
    panel.setAttribute('class','msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p')
    msg.textContent = 'This is messge box';
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function(){
        panel.parentNode.removeChild(panel);
    }
}
function test(){
    alert('Test')
}
var disButton = document.querySelector('.displaymsg')
disButton.onclick = displayMsg
