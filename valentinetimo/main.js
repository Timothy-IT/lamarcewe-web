const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.container');

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
  container.innerHTML = `
    <h1>🎉 YAAAYY!! 🎉</h1>
    <p class="proposal-text">I knew you would say YES! ❤️</p>
  `;
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.className = 'heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = window.innerHeight + 'px';  f
      document.body.appendChild(heart);
      heart.style.display = 'block';
      
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }, i * 100);
  }
}