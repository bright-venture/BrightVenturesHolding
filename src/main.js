// Pages are pre-rendered at build time (see src/content.js); only the mobile menu needs JS.
document.querySelector('.menu').addEventListener('click', (e) => {
  const opened = document.querySelector('.nav').classList.toggle('open')
  e.currentTarget.setAttribute('aria-expanded', opened)
})

// The Business Solutions section was merged into the businesses list; keep old links working.
if (location.hash === '#business-solutions') {
  document.getElementById('our-businesses')?.scrollIntoView()
}
