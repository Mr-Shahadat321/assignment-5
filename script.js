//for increment heart icon

const crtBtns = document.getElementsByClassName("crtBtn");

for (const crtBtn of crtBtns) {
  console.log(crtBtn);
  crtBtn.addEventListener("click", function () {
    const navHeartCount = Number(
      document.getElementById("navbar-heart-count").innerText
    );

    const navNewCount = navHeartCount + 1;
    document.getElementById("navbar-heart-count").innerText = navNewCount;
  });
}

//calling functionalities
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const callBtns = document.getElementsByClassName("callBtn");

for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const navbarCoin = Number(getElement("navbar-coin").innerText);
    const serviceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.children[2].children[0].innerText;
      
      if(navbarCoin >= 20){
        const newCoin = navbarCoin - 20;
         getElement("navbar-coin").innerText = newCoin
         alert(`Calling ${serviceName} ${serviceNumber}`)
         const now = new Date()
         const localTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

         const historyList = getElement("history-list");
         const newHistory = document.createElement("div");
         newHistory.innerHTML = `         
                              <div class="bg-gray-100 rounded-lg m-4 py-3 pl-2 font-bold flex items-center justify-between">
                                <div>
                                        <h1>${serviceName}</h1>
                                         <p class="font-bold">${serviceNumber}</p>

                                </div>
                                 <div class="text-sm text-gray-600 pr-3">${localTime}</div>
                                </div>         
                   `
                   historyList.appendChild(newHistory)

      }else{
        alert(`dont have sufficient coin for calling`)
      }        
  });
}

//copy functionalities

const copyBtns = document.getElementsByClassName("copyBtn");



for(const copyBtn of copyBtns){
  copyBtn.addEventListener('click', function(){
    const serviceNumber = copyBtn.parentNode.parentNode.children[2].children[0].innerText
    // console.log(serviceNumber);
    navigator.clipboard.writeText(serviceNumber);
    alert(`Number copied ${serviceNumber}`)
    const navbarCopyCount = document.getElementById("navbar-copy-count")
    const currentCopyCount = Number(document.getElementById("navbar-copy-count").innerText)

    navbarCopyCount.innerText = currentCopyCount + 1


     
  })
}






