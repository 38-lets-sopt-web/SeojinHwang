import { expenses } from "./data.js";

const STORAGE_KEY = "expense";

if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};

function getExpense() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.warn("저장된 데이터 파싱 실패:", error);
        return [];
    }
};

//테이블
const tableBody = document.getElementById("table-body");
const totalAmount = document.getElementById("total-amount");

function formatAmount(amount) {
    const sign = amount > 0 ? "+" : "";
    return `${sign}${amount.toLocaleString()}`;
};

const totalCheck = document.querySelector(".total-check");
function renderTable(data) {
    totalCheck.checked = false;
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
            <td><input type="checkbox" class="each-check" data-id="${item.id}"/></td>
            <td class="title-cell" data-id="${item.id}">${item.title}</td>
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
};

//필터
const titleFilter = document.getElementById("title-filter");
const typeFilter = document.getElementById("type-filter");
const categoryFilter = document.getElementById("category-filter");
const paymentFilter = document.getElementById("payment-filter");

function filterData(data, titleValue, typeValue, categoryValue, paymentValue) {
    let filteredData = data.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(titleValue);
        const typeMatch = 
            typeValue === "전체" ||
            (typeValue === "수입" && item.amount > 0) ||
            (typeValue === "지출" && item.amount < 0);
        const categoryMatch = 
            (categoryValue === "전체" || categoryValue === item.category);
        const paymentMatch = 
            (paymentValue === "전체" || paymentValue === item.payment);

        return titleMatch && typeMatch && categoryMatch && paymentMatch;
    });

    return filteredData;
};

const filterForm = document.querySelector(".filters");
filterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    render();
});

document.querySelector(".reset-btn").addEventListener("click", () => {
    filterForm.reset();

    render();
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
};

selectSort.addEventListener("change" , () => {
    render();
});

//체크박스
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

//선택삭제
const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", () => {
    const checkedBox = document.querySelectorAll(".each-check:checked");

    if (checkedBox.length === 0) {
        alert("선택한 항목이 없습니다.");
        return;
    }

    const checkedId = [...checkedBox].map((check) => Number(check.dataset.id));

    const data = getExpense();
    const newData = data.filter((item) => {
        return !checkedId.includes(item.id);
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    render();
});

// 모달 공통 함수
function modalOpen(modal) {
    modal.showModal();
};

function modalClose(modal) {
    modal.close();
};

//추가
const addBtn = document.querySelector(".add-btn");
const addModal = document.getElementById("add-modal");
addBtn.addEventListener("click", () => {
    modalOpen(addModal);
});

const addCloseBtn = document.getElementById("add-modal-close");

const addForm = document.getElementById("add-form");
addForm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const addTitle = document.getElementById("add-title").value;
    const addType = document.getElementById("add-type").value;
    const addAmount = document.getElementById("add-amount").value;
    const addDate = document.getElementById("add-date").value;
    const addCategory = document.getElementById("add-category").value;
    const addPayment = document.getElementById("add-payment").value;

    if (!addTitle || !addType || !addAmount || !addDate || !addCategory || !addPayment) {
        alert("모든 항목을 입력해주세요.");
        return;
    }

    const data = getExpense();

    let newAmount = Number(addAmount);
    newAmount = addType === "수입" ? newAmount : -newAmount;

    const newId = Date.now();
    
    const addData = {
        id: newId,
        title: addTitle,
        date: addDate,
        category: addCategory,
        payment: addPayment,
        amount: newAmount
    };

    data.push(addData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    addForm.reset();
    modalClose(addModal);
    render();
});

//상세 모달
const detailTitle = document.getElementById("detail-title");
const detailAmount = document.getElementById("detail-amount");
const detailDate = document.getElementById("detail-date");
const detailCategory = document.getElementById("detail-category");
const detailPayment = document.getElementById("detail-payment");
const detailModal = document.getElementById("detail-modal");

tableBody.addEventListener("click", (e) => {
    if (!e.target.classList.contains("title-cell")) return;

    const id = Number(e.target.dataset.id);
    const data = getExpense();
    const detailItem = data.find((item) => item.id === id);

    if (!detailItem) return;

    detailTitle.textContent = detailItem.title;
    detailAmount.textContent = formatAmount(detailItem.amount);
    detailDate.textContent = detailItem.date;
    detailCategory.textContent = detailItem.category;
    detailPayment.textContent = detailItem.payment;

    modalOpen(detailModal);
});

const detailCloseBtn = document.getElementById("detail-modal-close");

// 모달 닫기
[
    {modal: addModal, closeBtn: addCloseBtn},
    {modal: detailModal, closeBtn: detailCloseBtn}
].forEach(({modal, closeBtn}) => {
    closeBtn.addEventListener("click", () => {
        modalClose(modal);
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal){
            modalClose(modal);
        }
    });
});

//헤더 버튼
const headerBtn = document.querySelector(".header-btn");
headerBtn.addEventListener("click", () => {
    location.reload();
})

function render() {
    const data = getExpense();
    const filteredData = filterData(
        data,
        titleFilter.value,
        typeFilter.value,
        categoryFilter.value,
        paymentFilter.value
    );
    const sortedData = sortData(filteredData);
    renderTable(sortedData);
}

render();