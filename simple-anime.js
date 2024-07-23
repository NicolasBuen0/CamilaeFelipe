window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll('[data-anime]')), this.init();
  }
  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute('data-anime'));
      isNaN(e) ||
        setTimeout(() => {
          t.classList.add('anime');
        }, e);
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? 'visible' === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener('visibilitychange', this.handleVisibility);
  }
};
new SimpleAnime();

document.querySelector('.copy-button').addEventListener('click', function () {
  var pixKey = '21979919696'; // Substitua pelo valor da sua chave Pix
  var textArea = document.createElement('textarea');
  textArea.value = pixKey;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  var copyMessage = document.getElementById('copy-message');
  copyMessage.classList.remove('hidden');

  setTimeout(function () {
    copyMessage.classList.add('hidden');
  }, 2000);
});
