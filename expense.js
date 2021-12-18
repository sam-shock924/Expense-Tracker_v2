const expenseTable = document.querySelector('.expenseTable');
const submitButton = document.querySelector('#submitButton');
const expenseForm = document.querySelector('#expenseInfoForm');
const formDate = document.querySelector('#expenseInfoDate');
const formPaymentOption = document.querySelector('#expenseInfoType');
const formDescription = document.querySelector('#expenseInfoDescription');
const formCost = document.querySelector('#expenseInfoCost');
const deleteButton = document.createElement("button");


function addDeleteButton(){
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.textContent = 'Delete';
    expenseTable.appendChild(deleteButton);
}


submitButton.addEventListener('click', e => {
    e.preventDefault();
    addRow();
    addDeleteButton();
});

function addRow(){
    let newRow = expenseTable.insertRow(1);
    let dateCell = newRow.insertCell(0);
    let paymentTypeCell = newRow.insertCell(1);
    let descriptionCell = newRow.insertCell(2);
    let costCell = newRow.insertCell(3);
    let deleteButtonCell = newRow.insertCell(4);

    dateCell.innerHTML = formDate.value;
    paymentTypeCell.innerHTML = formPaymentOption.value;
    descriptionCell.innerHTML = formDescription.value;
    costCell.innerHTML = "$" + formCost.value;
    
}

