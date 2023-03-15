const SAVE_INPUT = document.getElementById("input-btn");
const IMPUT_FIELD = document.getElementById("input-el");
const UL_FIELD = document.getElementById("ul-el");
let myLeads = [];

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

SAVE_INPUT.addEventListener("click", function () {
  myLeads.push(IMPUT_FIELD.value);
  console.log(myLeads);
  IMPUT_FIELD.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads();

  console.log(localStorage.getItem("myLeads"))
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a target = _blank href=https://${myLeads[i]}>
            ${myLeads[i]}
        </a>
    </li>
    `;
    console.log(listItems);
  }

  UL_FIELD.innerHTML = listItems;
  IMPUT_FIELD.textContent = "se agrego";
}
