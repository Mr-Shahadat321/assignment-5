const crtBtns = document.getElementsByClassName("crtBtn")

for(const crtBtn of crtBtns){
    crtBtn.addEventListener('click', function(){
        const count = parseInt(document.getElementById('navbar-heart-count').innerText);
        const newCount = count + 1
        document.getElementById("navbar-heart-count").innerText = newCount
        
       
    })
}