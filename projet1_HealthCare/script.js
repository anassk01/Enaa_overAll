let mainForm = document.getElementById("main-form");
let tableBody = document.getElementById("table-body");
const tableBatch = document.createElement("div");

let precedentButton = document.getElementById("precedent");
let suivantButton = document.getElementById("suivant");

let id = 1;
let batchId = 1;
let isCreated = false;
let currentPage = 1;
mainForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let email = document.getElementById("email");
  let motif = document.getElementById("motif");
  let phone = document.getElementById("phone");
  let date = document.getElementById("date");

  let demande = `
  <td>${nom.value}</td>
  <td>${prenom.value}</td>
  <td>${email.value}</td>
  <td>${phone.value}</td>
  <td>${motif.value}</td>
  <td>${date.value}</td>
  <td><button>remove</button></td>

  `;

  const tableData = document.createElement("tr");

  //   tableData.dataset.id = id;
  tableData.innerHTML = demande.trim();

  console.log("before", batchId);
  tableBody.appendChild(tableData);

  let removeButton = tableData.querySelector("button");
  let idStage = Math.floor(id / 5);

  tableData.dataset.id = batchId;

  console.log("batchId", batchId, "idStage", idStage);
  if (batchId === idStage) {
    batchId++;
    console.log("after", batchId);
  }

  tableBody.childNodes.forEach((el) => {
    console.log("seo", batchId, parseInt(el.dataset.id));
    if (parseInt(el.dataset.id) !== 1 && el.tagName === "TR") {
      el.hidden = true;
    }
  });

  id++;

  removeButton.addEventListener("click", () => {
    tableData.remove();
  });
});

precedentButton.addEventListener("click", () => {
  currentPage--;
  //   console.log("clciked");
  tableBody.childNodes.forEach((el) => {
    // console.log(el.dataset.id, batchId - 1);
    if (parseInt(el.dataset.id) === currentPage) {
      el.removeAttribute("hidden");
    } else {
      el.hidden = true;
    }
  });
});

suivantButton.addEventListener("click", () => {
  currentPage++;

  //   console.log("clciked");
  tableBody.childNodes.forEach((el) => {
    if (parseInt(el.dataset.id) === currentPage) {
      el.removeAttribute("hidden");
    } else {
      el.hidden = true;
    }
  });
});
