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

function formatAmount(amount) {
    const sign = amount > 0 ? "+" : "";
    return `${sign}${amount.toLocaleString()}`;
}

function renderTable(data) {
    tableBody.innerHTML = "";

        if (data.length === 0) {
        tableBody.innerHTML = `
        <tr>
            <td colspan="6">내역이 없습니다.</td>
        </tr>
        `;
        totalAmount.textContent = "0";
        return;
    };

    let row = "";
    data.forEach(item => {

        const amountColor = item.amount > 0 ? "income" : "expense";
        row += `
        <tr>
            <td><input type="checkbox" /></td>
            <td>${item.title}</td>
            <td class="${amountColor}">${formatAmount(item.amount)}</td>
            <td>${item.date}</td>
            <td>${item.category}</td>
            <td>${item.payment}</td>        
        </tr>
        `;
    });

    tableBody.innerHTML = row;
    const total = data.reduce((sum, item) => sum + item.amount, 0);
    totalAmount.textContent = formatAmount(total);
    totalAmount.className = total > 0 ? "income" : "expense";
}

const titleFilter = document.getElementById("title-filter");
const typeFilter = document.getElementById("type-filter");
const categoryFilter = document.getElementById("category-filter");
const paymentFilter = document.getElementById("payment-filter");

function filterData(data) {
    let filters = data.filter((item) => {
        const titleMatch = item.title.includes(titleFilter.value);
        const typeMatch = 
            typeFilter.value === "전체" ||
            (typeFilter.value === "수입" && item.amount > 0) ||
            (typeFilter.value === "지출" && item.amount < 0);
        const categoryMatch = 
            (categoryFilter.value === "전체" || categoryFilter.value === item.category);
        const paymentMatch = 
            (paymentFilter.value === "전체" || paymentFilter.value === item.payment);

        return titleMatch && typeMatch && categoryMatch && paymentMatch;
    });

    return filters;
}

const filterForm = document.querySelector(".filters");
filterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = getExpense();
    const filteredData = filterData(data);
    renderTable(filteredData);
});

document.querySelector(".reset-btn").addEventListener("click", () => {
    filterForm.reset();

    const data = getExpense();
    renderTable(data);
});

function render() {
    const data = getExpense();
    const filteredData = filterData(data);
    renderTable(filteredData);
}

render();