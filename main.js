let items = document.querySelectorAll('.slider .list .item')// カンマ区切りで複数のセレクターを指定することができ、これによって複数の異なる要素を一度に取得することができる,ここでは別にカンマで区切ってないからなんもない
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let thumbnails = document.querySelectorAll('.thumbnail .item')

let countItem = items.length;// items要素のnodelistの要素数の合計、ここでは１０
let itemActive = 0;

next.onclick = function(){
    itemActive++;
    // クリックされたらitemActiveを１増やす、そうすることでitemActiveのindexが１増え、そこにactiveのclassが追加される
    if(itemActive >= countItem){
        itemActive = 0;
    }
    // itemActiveが最後（５つ目）まで行ったら初期化（ここでのitemActiveの初期値は０だから０にする）
    showslider();
    // この上の一覧の操作が終わったらshowslider関数を呼び出す
}

prev.onclick = function(){
    itemActive--; // 前のアイテムへ
    if(itemActive < 0){
        itemActive = countItem - 1
    }
    // アイテムが-1になってしまったら最後のスライド（インデックス＝４）に行く
    showslider()
}

function showslider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active')
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
    // 前回activeだったsliderとthumbnailを取得する
    
    if(itemActiveOld)itemActiveOld.classList.remove('active');
    if(thumbnailActiveOld)thumbnailActiveOld.classList.remove('active');
    // もしitemActiveOldだったらactiveを削除する

    items[itemActive].classList.add('active')// items 配列の中で itemActive 番目の要素に active クラスを追加する操作を意味する。itemActive は、その インデックス を指す変数で、items の中の特定の要素（itemActive 番目の要素）を指定している。
    thumbnails[itemActive].classList.add('active')
//     重要！　array[index]で配列または配列風オブジェクト（nodelistなど）を持ってこれる
//     インデックスは０から始まることも忘れないように、let items = document.querySelectorAll('.slider .list .item');
//     console.log(items[0]);  最初の `.item` 要素を取得する
// 
}

thumbnails.forEach((thumbnail, index)=>{
    thumbnail.addEventListener('click', ()=>{
        itemActive = index;
        showslider()
    })
})
// サムネイル配列（配列風オブジェクトであるnodelist）の各要素にクリックイベントを追加する
// array.forEach((element, index, array) => {});
// クリックされたサムネイル要素のインデックスをitemActiveに代入している
// この項目によりクリックされたサムネイルに対応するスライダーの項目をアクティブにする

