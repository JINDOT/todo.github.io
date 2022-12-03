// clock이라는 id를 찾아 값을 전달
const clock1 = document.querySelector("#clock1");
const clock2 = document.querySelector("#clock2");

function getClock() {
    // 현재 시간 생성
    const date = new Date();
    const years = date.getFullYear();
    const months = (date.getMonth() + 1);
    const dates = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0"); // string으로 변환
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // id : clock 에 정보 저장
    clock1.innerText = (`${years}년 ${months}월 ${dates}일`);
    clock2.innerText = (`${hours}시 ${minutes}분 ${seconds}초`);
};

// getclock 실행
getClock();
// Interval
setInterval(getClock, 1000);