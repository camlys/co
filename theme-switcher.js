const themeSwitchButton = document.querySelector('.theme-switch-button');

if (themeSwitchButton) {
  themeSwitchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

// check for saved theme preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

function resizeIframe(obj) {
  obj.style.height = '650px'; // default height
  setTimeout(() => {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }, 500); // wait for 500ms before resizing
}