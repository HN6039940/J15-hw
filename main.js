// ノードの取得
const next = document.getElementById("next")
const back = document.getElementById("back")
// 画像の取得
const img = document.getElementsByClassName("img")
// 配列(1番目の要素)
const img1 = document.getElementsByClassName("img")[0]
// 数値の指定
let i = 0

//イベント時に呼び出される関数の定義
const goNext = () => {
    if (i === 2) {
        img[i].classList.toggle("appear")
        i = 0
        img[i].classList.toggle("appear")
        // element.classList.toggle(クラス名)=>クラス名の付け替え
    } else {
        img[i].classList.toggle("appear")
        i += 1
        img[i].classList.toggle("appear")
    }
}
const goBack = () => {
    if (i === 0) {
        img[i].classList.toggle("appear")
        i = 2
        img[i].classList.toggle("appear")
    } else {
        img[i].classList.toggle("appear")
        i--
        img[i].classList.toggle("appear")
    }
}
// クリックした際にイベントを起こす
next.addEventListener('click', goNext)
back.addEventListener('click', goBack)















