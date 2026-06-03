const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const output = document.querySelector("#output");

function updateExtraField() {
  const value = typeSelect.value;
  if (value === "student") {
    extraField.hidden = false;
    extraLabel.textContent = "Student I#";
    extraInput.required = true;
  } else if (value === "guest") {
    extraField.hidden = false;
    extraLabel.textContent = "Access Code";
    extraInput.required = true;
  } else {
    extraField.hidden = true;
    extraInput.required = false;
  }
}

typeSelect.addEventListener("change", updateExtraField);
updateExtraField();

function isPastDate(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const chosen = new Date(value + "T00:00:00");
  return chosen <= today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const extra = extraInput.value.trim();

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a date later than today.";
    return;
  }

  if (type === "student" && extra.length !== 9) {
    output.textContent = "Student I# must be 9 digits.";
    return;
  }

  if (type === "guest" && extra !== "EVENT131") {
    output.textContent = "Access code is incorrect.";
    return;
  }

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${email}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
  `;

  form.reset();
  updateExtraField();
});