// js/data.js

// 1. 게임 데이터 저장하기
function saveProgress(level, stars) {
    const data = {
        currentLevel: level, // 현재 깬 단계 (1, 2, 3)
        stars: stars,        // 별점 (1~5)
        lastPlayed: new Date().toLocaleDateString()
    };
    localStorage.setItem('vibeCoding_dodger', JSON.stringify(data));
    console.log("게임 저장 완료!", data);
}

// 2. 게임 데이터 불러오기
function loadProgress() {
    const data = localStorage.getItem('vibeCoding_dodger');
    if (data) {
        return JSON.parse(data);
    }
    return null; // 저장된 게 없으면 null
}

// 3. 초기화 (테스트용)
function resetProgress() {
    localStorage.removeItem('vibeCoding_dodger');
}