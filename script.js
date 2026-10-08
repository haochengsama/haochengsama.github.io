const buttons = document.querySelectorAll('[data-lang]');
function setLanguage(language) {
  document.body.dataset.language = language;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh'
    ? (document.body.dataset.titleZh || '孙浩成 · 研究主页')
    : (document.body.dataset.titleEn || 'Haocheng Sun · Research');
  buttons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('haocheng-site-language', language);
}
buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
if (localStorage.getItem('haocheng-site-language') === 'zh') setLanguage('zh');
document.getElementById('year').textContent = new Date().getFullYear();
