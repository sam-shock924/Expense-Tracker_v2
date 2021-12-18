const expenseTable = document.querySelector('.expenseTable');
const submitButton = document.querySelector('#submitButton');
const expenseForm = document.querySelector('#expenseInfoForm');
const formDate = document.querySelector('#expenseInfoDate');
const formPaymentOption = document.querySelector('#expenseInfoType');
const formDescription = document.querySelector('#expenseInfoDescription');
const formCost = document.querySelector('#expenseInfoCost');
const expenseRow = document.querySelector('#expenseInfoRow');


function addDeleteButton(){
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.textContent = 'Delete';
    return deleteButton;
}


submitButton.addEventListener('click', e => {
    e.preventDefault();
    addRow();
});

function addRow(){
    const newRow = expenseTable.insertRow(1);
    const dateCell = newRow.insertCell(0);
    const paymentTypeCell = newRow.insertCell(1);
    const descriptionCell = newRow.insertCell(2);
    const costCell = newRow.insertCell(3);
    const deleteButtonCell = newRow.insertCell(4);

    const deleteButton = addDeleteButton();

    dateCell.innerHTML = formDate.value;
    paymentTypeCell.innerHTML = formPaymentOption.value;
    descriptionCell.innerHTML = formDescription.value;
    costCell.innerHTML = "$" + formCost.value;
    deleteButtonCell.appendChild(deleteButton);
}

