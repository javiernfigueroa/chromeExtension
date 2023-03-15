let myLeads = [];
const SAVE_INPUT = document.getElementById("input-btn");
const IMPUT_FIELD = document.getElementById("input-el");
const UL_FIELD = document.getElementById("ul-el");
const DELETE_BTN = document.getElementById("delete-btn");
const TAB_BTN = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

TAB_BTN.addEventListener("click", function () {
  //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   })

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
          <a target = _blank href=${leads[i]}>
              ${leads[i]}
          </a>
      </li>
      `;
    console.log(listItems);
  }

  UL_FIELD.innerHTML = listItems;
  IMPUT_FIELD.textContent = "se agrego";
}

DELETE_BTN.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

SAVE_INPUT.addEventListener("click", function () {
  myLeads.push(IMPUT_FIELD.value);
  IMPUT_FIELD.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
