document.addEventListener('DOMContentLoaded', function () {
  // fill year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorage.theme === 'dark' || (!localStorage.theme && prefersDark)) {
    document.documentElement.classList.add('dark');
    if (themeToggle) themeToggle.setAttribute('aria-pressed','true');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
      themeToggle.setAttribute('aria-pressed', String(isDark));
    });
  }

  // Text-to-speech (Polish)
  const readBtn = document.getElementById('readBtn');
  if (readBtn && 'speechSynthesis' in window) {
    readBtn.addEventListener('click', () => {
      const main = document.querySelector('main');
      if (!main) return;
      const text = Array.from(main.querySelectorAll('h2,h3,h4,p,li')).map(el => el.textContent.trim()).filter(Boolean).join('. ');
      if (!text) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pl-PL';
      utter.rate = 1;
      window.speechSynthesis.speak(utter);
    });
  } else if (readBtn) {
    readBtn.style.display = 'none';
  }

   if (!localStorage.getItem("cookiesAccepted")) {
      document.getElementById("cookie-banner").style.display = "block";
    }

    document.getElementById("cookie-accept").addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      document.getElementById("cookie-banner").style.display = "none";
    });
});