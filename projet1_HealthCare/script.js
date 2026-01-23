let mainForm = document.getElementById("main-form");
let tableBody = document.getElementById("table-body");
let precedentButton = document.getElementById("precedent");
let suivantButton = document.getElementById("suivant");
let pageInfo = document.getElementById("page-info");
let messageDiv = document.getElementById("message");

let id = 1;
let currentPage = 1;
const demandesParPage = 5;

function showMessage(text, isSuccess) {
  messageDiv.textContent = text;
  messageDiv.className = isSuccess ? "message success" : "message error";
  messageDiv.style.display = "block";
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 3000);
}

function validate() {
  let nom = document.getElementById("nom").value.trim();
  let prenom = document.getElementById("prenom").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let motif = document.getElementById("motif").value.trim();
  let date = document.getElementById("date").value;

  if (!nom || !prenom || !email || !phone || !motif || !date) {
    showMessage("Veuillez compléter les champs obligatoires", false);
    return false;
  }
  return true;
}

function updatePagination() {
  let totalElements = tableBody.querySelectorAll("tr").length;
  let totalPages = Math.ceil(totalElements / demandesParPage) || 1;

  pageInfo.textContent = `Page ${currentPage} / ${totalPages}`;
  precedentButton.disabled = currentPage === 1;
  suivantButton.disabled = currentPage >= totalPages;
}

mainForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validate()) {
    return;
  }

  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let email = document.getElementById("email");
  let motif = document.getElementById("motif");
  let phone = document.getElementById("phone");
  let date = document.getElementById("date");

  let demande = `
  <td>${prenom.value}</td>
  <td>${nom.value}</td>
  <td>${email.value}</td>
  <td>${phone.value}</td>
  <td>${motif.value}</td>
  <td>${date.value}</td>
  <td><button>Supprimer</button></td>
  `;

  const tableData = document.createElement("tr");
  tableData.innerHTML = demande.trim();

  let batchId = Math.ceil(id / demandesParPage);
  tableData.dataset.id = batchId;

  tableBody.appendChild(tableData);

  tableBody.childNodes.forEach((el) => {
    if (el.tagName === "TR") {
      if (parseInt(el.dataset.id) !== batchId) {
        el.hidden = true;
      } else {
        el.hidden = false;
      }
    }
  });

  currentPage = batchId;
  id++;

  let removeButton = tableData.querySelector("button");
  removeButton.addEventListener("click", () => {
    tableData.remove();

    let remainingElements = tableBody.querySelectorAll("tr");
    if (remainingElements.length === 0) {
      currentPage = 1;
    } else {
      let totalPages = Math.ceil(remainingElements.length / demandesParPage);
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      tableBody.childNodes.forEach((el) => {
        if (el.tagName === "TR") {
          if (parseInt(el.dataset.id) === currentPage) {
            el.hidden = false;
          } else {
            el.hidden = true;
          }
        }
      });
    }

    updatePagination();
  });

  showMessage("Demande ajoutée", true);
  mainForm.reset();
  updatePagination();
});

precedentButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    tableBody.childNodes.forEach((el) => {
      if (el.tagName === "TR") {
        if (parseInt(el.dataset.id) === currentPage) {
          el.hidden = false;
        } else {
          el.hidden = true;
        }
      }
    });
    updatePagination();
  }
});

suivantButton.addEventListener("click", () => {
  let totalElements = tableBody.querySelectorAll("tr").length;
  let totalPages = Math.ceil(totalElements / demandesParPage);

  if (currentPage < totalPages) {
    currentPage++;
    tableBody.childNodes.forEach((el) => {
      if (el.tagName === "TR") {
        if (parseInt(el.dataset.id) === currentPage) {
          el.hidden = false;
        } else {
          el.hidden = true;
        }
      }
    });
    updatePagination();
  }
});

updatePagination();
