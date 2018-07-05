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