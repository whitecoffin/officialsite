// サムネイル
const swiperThumbnail = new Swiper(".swiper-thumbnail", {
    spaceBetween: 10, //スライド感の余白
    slidesPerView: 6, //一度に表示するスライド枚数
    watchSlidesProgress: true, //スライダーの動きにスライドを追従させる
});

// スライダー
const slider = new Swiper(".slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        disableOnInteraction: false //スライドに触っても自動再生を停止しない
    },
    loop: true, //繰り返し指定
    spaceBetween: 10, //スライド間の余白
    slidesPerView: 1.5, //一度に表示するスライド枚数
    centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
    centeredSlidesBounds: true, //アクティブなスライドを中央に配置
    thumbs: {
        swiper: swiperThumbnail, //連動したいスライダー（swiperThumbnailを指定する）
    },
});