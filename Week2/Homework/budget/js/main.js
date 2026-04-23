import { expenses } from "./data.js";

const STORAGE_KEY = "expense";

if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

function getExpense() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

//테이블
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
            <td><input type="checkbox" class="each-check"/></td>
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

//필터
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

//정렬
const selectSort = document.querySelector(".date-sort");
function sortData(data) {
    const sorted = [...data];

    sorted.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);

        return selectSort.value === "오름차순" ? aDate - bDate : bDate - aDate;
    });

    return sorted;
}

selectSort.addEventListener("change" , () => {
    render();
})

//체크박스
const totalCheck = document.querySelector(".total-check");
totalCheck.addEventListener("change", () => {
    const eachCheck = document.querySelectorAll(".each-check");

    eachCheck.forEach((checkbox) => {
        checkbox.checked = totalCheck.checked;
    });
});

tableBody.addEventListener("change", () => {
    const eachCheck = document.querySelectorAll(".each-check");
    const checkedBox = document.querySelectorAll(".each-check:checked");

    totalCheck.checked = (eachCheck.length > 0 && eachCheck.length === checkedBox.length);
});

function render() {
    const data = getExpense();
    const filteredData = filterData(data);
    const sortedData = sortData(filteredData);
    renderTable(sortedData);
}

render();