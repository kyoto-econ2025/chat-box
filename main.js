const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

// 「フォームが送信されたときに中のコードを実行してね」という指示。eはイベントのe
form.addEventListener('submit', function (e) {
  e.preventDefault(); // フォームは本来「ページを再読み込み」するが、それを止める命令

  const message = input.value.trim(); // 入力された文字をmessageという変数に代入
  // trim()は前後の空白を取り除くという意味
  if (message === '') return; // メッセージが空なら無視

  // ユーザーのメッセージを表示させる
  const userMsg = document.createElement('div'); // 新しく<div>を作る
  userMsg.classList.add('message', 'user'); // 作った<div>にclassをつける
  userMsg.textContent = message; // 入力された文字を<div>内に表示
  chatBox.appendChild(userMsg); // 作った<div>をチャット欄の中に表示

  input.value = ''; // 入力欄を空に（次の入力のため）
  chatBox.scrollTop = chatBox.scrollHeight; // 最新のメッセージが見えるよう、スクロールを一番下に

  // 少し待ってからBotの返事
  setTimeout(() => { // ちょっと待ってから処理を行う関数
    const botMsg = document.createElement('div');
    botMsg.classList.add('message', 'bot');
    botMsg.textContent = getBotReply(message);
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight; // 先ほどユーザーに対して行ったことをチャットにも行う
  }, 500); // 0.5秒後に返信
});

// Botの返信を決める関数
function getBotReply(input) { // メッセージを元にbotの返事を考える関数
  const text = input.toLowerCase(); // 小文字にして比較（「こんにちは」でも「コンニチハ」でもOKにするため

  if (text.includes('こんにちは')) {
    return 'こんにちは！';
  } else if (text.includes('元気')) {
    return '元気だよ〜';
  } else if (text.includes('名前')) {
    return 'ボットだよ！';
  } else {
    return 'よくわかんないな…';
  } // botの返事を考える
}