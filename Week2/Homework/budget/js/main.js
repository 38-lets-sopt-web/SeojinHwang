import { expenses } from "./data.js";

const STORAGE_KEY = "expense";

if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

function getExpense() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

const tableBody = document.getElementById("table-body");
const totalAmount = document.getElementById("total-amount");

console.log("초기 데이터:", expenses);
console.log("tableBody:", tableBody);
console.log("totalAmount:", totalAmount);

function formatAmount(amount) {
    const sign = amount > 0 ? "+" : "";
    return `${sign}${amount.toLocaleString()}`;
}

function renderTable(data) {
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td><input type="checkbox" /></td>
        <td>${item.title}</td>
        <td>${formatAmount(item.amount)}</td>
        <td>${item.date}</td>
        <td>${item.category}</td>
        <td>${item.payment}</td>
        `;

        tableBody.appendChild(row);
    });

    const total = data.reduce((sum, item) => sum + item.amount, 0);
    totalAmount.textContent = formatAmount(total);
}

const storageExpenses = getExpense();
renderTable(storageExpenses);