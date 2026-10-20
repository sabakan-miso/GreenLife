// splide

import Splide from '@splidejs/splide';
// 基本構造
import '@splidejs/splide/css';

// 色が緑の矢印
// import '@splidejs/splide/css/sea-green';


new Splide( '.splide',{
    type   : 'loop',
    perPage: 3,
    autoplay: true, //自動再生
    interval: 7000, // 自動再生の間隔
    focus: "center",//中央をアクティブに
    gap: "0.5rem",//スライド間の余白
    
    breakpoints: {
        768: {
            perPage: 1,
            gap: "1.5rem",
            padding: "10%", //左右のカードが少し見える設定
        },
    
    }
} ).mount();

