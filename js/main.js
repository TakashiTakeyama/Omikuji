"use strict";

{
  const btn = document.getElementById('button');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);
//    btn.textContet = n;

    switch (n) {
      case 0:
        btn.textContent = '大吉';
        break;
      case 1:
        btn.textContent = '中吉';
        break;
      case 2:
        btn.textContent = '凶';
        break;
    }
  });
}
