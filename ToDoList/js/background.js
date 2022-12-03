const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"
];

const randomImg = images[Math.floor(Math.random() * images.length)];

// img의 elements를 가져옴
const backGroundImg = document.querySelector("body");
backGroundImg.src = `img/${randomImg}`;

backGroundImg.style.background = `url("${randomImg}") no-repeat center / cover`
// document.body.appendChild(backGroundImg);