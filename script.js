const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-navigation');
const followButton = document.querySelector('.follow-button');
const authorLinks = document.querySelector('.author-links');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});

navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}));

followButton?.addEventListener('click', () => {
  const open = followButton.getAttribute('aria-expanded') !== 'true';
  followButton.setAttribute('aria-expanded', String(open));
  authorLinks.classList.toggle('open', open);
});
