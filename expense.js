/* let's break this down my dude:
first, select the date, the type of payment, a short description, and the cost of the payment.
second, click submit to add the entry to the expense table
the table will keep track of the above items, in descending order, with a total cost summary at the bottom (bonus)
if you need to delete a payment entry, check on each entry you want deleted, and click the delete button at the bottom
*/

/* steps to get this puppy rolling:
--get user input to appear in console.log
--add row on submit with cells
--get user input to each cell
--checkbox on each expense
--delete option at bottom of tracker
--on an expense, red numbers (with a -)
--on a credit, green numbers (with a +)
--possibly add a "totals" tracker at bottom of tracker
*/

// const expenseTable = document.querySelector('.expenseTable');
// const tableDate = document.querySelector('#expenseTableDate');
// const tablePaymentType = document.querySelector('#expenseTableType');
// const tableItemDescription = document.querySelector('#expenseTableDescription');
// const tableItemCost = document.querySelector('#expenseTableCost');
// const expenseRow = document.querySelector('expenseInfoRow');

const submitButton = document.querySelector('#submitButton');
const expenseForm = document.querySelector('#expenseInfoForm');
const formDate = document.querySelector('#expenseInfoDate');
const formPaymentOption = document.querySelector('#expenseInfoType');
const formDescription = document.querySelector('#expenseInfoDescription');
const formCost = document.querySelector('#expenseInfoCost');

submitButton.addEventListener('click', getInput)

function getInput(){
    console.log(formDate.value);
    console.log(formPaymentOption.value);
    console.log(formDescription.value);
    console.log(formCost.value);
};