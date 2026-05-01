const STORAGE_KEY = "rankings";

export const getRanking = () => {
    const ranks = localStorage.getItem(STORAGE_KEY);
    if (!ranks) return [];

    try {
        const parsed = JSON.parse(ranks);
        return Array.isArray(parsed) ? parsed : []
    }
    catch (error) {
        console.warn("저장된 데이터 파싱 실패", error);
        return [];
    }
};

export const saveRanking = (newRecord) => {
    const ranks = getRanking();
    ranks.push(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ranks));
}

export const clearRanking = () => {
    const isConfirm = window.confirm("기록을 초기화하시겠습니까?");
    if (!isConfirm) return false;
    localStorage.removeItem(STORAGE_KEY);
    return true;
}