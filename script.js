const crtBtns = document.getElementsByClassName("crtBtn");

for (const crtBtn of crtBtns) {
  crtBtn.addEventListener("click", function () {
    const navHeartCount = Number(
      document.getElementById("navbar-heart-count").innerText
    );

    const navNewCount = navHeartCount + 1;
    document.getElementById("navbar-heart-count").innerText = navNewCount;
  });
}

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const callBtns = document.getElementsByClassName("callBtn");

for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const navbarCoin = getElement("navbar-coin").innerText;
    const serviceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.children[2].children[0].innerText;
    const historyList = getElement("history-list");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
                               <div   class="bg-gray-100 rounded-lg m-4 py-3 pl-2 font-bold">
                             <h1>${serviceName}</h1>
                                   <p class="font-bold">${serviceNumber}</p>
                             </div>
                   `;

       historyList.append(newHistory)            
  });
}
