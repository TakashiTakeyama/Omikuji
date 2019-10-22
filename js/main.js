"use strict";

{
  const btn = document.getElementById('button');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // const results = ['大吉', '大吉', '凶', '大吉'];
    // const n = Math.floor(Math.random() * 4);
    // btn.textContent = results[Math.floor(Math.random() * 4)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉';
    } else if (n < 0.2) {
      btn.textContent = '中吉';
    } else {
      btn.textContent = '凶';
    }
  });
}
