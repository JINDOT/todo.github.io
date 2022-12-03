// navigator.geolocation.getCurrentPosition()
// : 실시간 지역 위치 가져옴
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "74bbe13d6de3edc78a6f1bad7e1cf936"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}$units=metric`
    // javascript 가 url를 불러들임
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Where are you...?")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
