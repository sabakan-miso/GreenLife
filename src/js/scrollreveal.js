import ScrollReveal from "scrollreveal";

// ScrollRevealの基本設定
const sr = ScrollReveal();

sr.reveal(".reveal", {
    distance: "60px",
    duration: 2000,
    delay: 200,
    reset: false,
});


//タイトル
sr.reveal(".title", {
  origin: "bottom",
  distance: "40px",
  duration: 1200,
  delay: 0,
});

//説明文
sr.reveal(".description",{
    origin: "bottom",
    distance: "40px",
    duration: 1200,
    delay:300,
});