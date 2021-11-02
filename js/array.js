const url='https://jsonplaceholder.typicode.com/posts';


fetch(url)
  .then(response => response.json())
  // .then(json => console.log(json))
  .then(function (myjson) {

  //  json形式のデータをWebページに出力する
      makeTable(myjson);
    });

function makeTable(jsonlist) {


  // for(let i=0; i<jsonlist.length; i++) {

    // table要素を生成
    let table = document.createElement('table');
    // ヘッダーを作成
    let tr = document.createElement('tr');
    for (key in jsonlist[0]) {
          // th要素を生成
          let th = document.createElement('th');
          // th要素内にテキストを追加
          th.textContent = key;
          // th要素をtr要素の子要素に追加
          tr.appendChild(th);

          if(key === 'body') {
            
          }

          console.log('key:',key)
          }
      // tr要素をtable要素の子要素に追加
      table.appendChild(tr);

    // テーブル本体を作成
    for (let tbl = 0; tbl < jsonlist.length; tbl++) {
      // tr要素を生成
      let tr = document.createElement('tr');
      console.log(`jsonlist:${jsonlist[0]}`)
      // th・td部分のループ
      for (key in jsonlist[0]) {
            // td要素を生成
            let td = document.createElement('td');
            // td要素内にテキストを追加
            td.textContent = jsonlist[tbl][key];
            // td要素をtr要素の子要素に追加
            tr.appendChild(td);
          }
      // tr要素をtable要素の子要素に追加
      table.appendChild(tr);
      }
    // 生成したtable要素を追加する
    document.getElementById('body').appendChild(table);

  // }
}