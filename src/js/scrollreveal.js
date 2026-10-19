import ScrollReveal from "scrollreveal";

// ScrollRevealの基本設定
const sr = ScrollReveal();
// 共通設定
const commonOption = {
    origin: "bottom",
    distance: "40px",
    duration: 1200,
    reset: false,
    viewFactor: 0.2, //要素の約20％が画面内に入ったら開始
}

// ==========================
// FV
// ==========================
//FV：タイトル
sr.reveal(".fv-title", {
  ...commonOption,
  delay:100,
});

//FV：説明文
sr.reveal(".fv-description",{
   ...commonOption,
    delay:300,
});



// ==========================
// About
// ==========================
//About：タイトル
sr.reveal(".about-title", {
    ...commonOption,
    delay: 500,
    viewFactor: 0.5,
});

//About：リード文
sr.reveal(".about-lead", {
    ...commonOption,
    delay: 700,
    viewFactor: 0.5,
});

//About：説明文
sr.reveal(".about-description", {
    ...commonOption,
    delay: 800,
    viewFactor: 0.5,
});

//About：写真
sr.reveal(".about-photo", {
    ...commonOption,
    origin: "right",
    delay: 450,
    duration: 1000,
    viewFactor: 0.3,
});

//About：アイコン項目を順番に表示
sr.reveal(".about-value", {
    ...commonOption,
    origin: "right",
    distance: "20px",
    delay: 500,
    duration: 800,
    interval: 200,
    viewFactor: 0.3,
});



// ==========================
// Service
// ==========================
// Service上部：メインタイトル
sr.reveal(".service-hero .service-title", {
    ...commonOption,
    delay: 200,
});

// Service上部：説明文
sr.reveal(".service-hero .service-description", {
    ...commonOption,
    delay: 400,
});

// Service下側：セクションの見出し
sr.reveal(".service-heading .service-title", {
    ...commonOption,
    delay: 200,
    viewFactor: 0.4,
});

// Service下側：セクションの説明文
sr.reveal(".service-heading .service-description", {
    ...commonOption,
    delay: 400,
    viewFactor: 0.4,
});

// Serviceサービスカード：画像を順番に表示
sr.reveal(".service-card", {
    ...commonOption,
    origin: "right",
    distance: "60px",
    duration: 1000,
    interval: 200,
    viewFactor: 0.3,
});



// ==========================
// Service：植物のお悩み
// ==========================
// 植物のお悩み：英字サブタイトル
sr.reveal(".troubles-subtitle", {
    ...commonOption,
    delay: 100,
});

// 植物のお悩み：タイトル
sr.reveal(".troubles-title", {
    ...commonOption,
    delay: 200,
});

// 植物のお悩み：説明文
sr.reveal(".troubles-description", {
    ...commonOption,
    delay: 300,
});

// 植物のお悩み：カード4枚
sr.reveal(".troubles-card", {
    ...commonOption,
    distance: "30px",
    origin: "right",
    delay: 600,
    interval: 200,
});


// ==========================
// News
// ==========================
// News：タイトル
sr.reveal(".news-title", {
    ...commonOption,
    delay: 200,
});

// News：説明文
sr.reveal(".news-description", {
    ...commonOption,
    delay: 300,
});

// News：お知らせ一覧
sr.reveal(".news-item", {
    ...commonOption,
    delay: 200,
    interval: 200,
});