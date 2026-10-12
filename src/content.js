function businessDetails() {
  const businesses = [
    [
      'vardenia',
      'Vardenia',
      'A print and digital tourism and lifestyle guide to Lebanon’s hotels, dining, destinations and experiences.',
      'دليل مطبوع ورقمي للسياحة وأسلوب الحياة في لبنان، يعرّف بالفنادق والمطاعم والوجهات والتجارب المميّزة.',
      '<img class="brand-logo" src="/assets/vardenia-logo-en.webp" alt="Vardenia" loading="lazy">',
      'https://vardenia.com/',
    ],
    [
      'virgin-valley',
      'Virgin Valley',
      'A nature and leisure project combining outdoor recreation, scenic experiences and relaxation.',
      'مشروع للطبيعة والترفيه يجمع الأنشطة الخارجية والتجارب في أحضان الطبيعة والاسترخاء.',
      '<img class="brand-logo virgin-valley-logo" src="/assets/virgin-valley-logo.webp" alt="Virgin Valley" loading="lazy">',
      'https://virginvalleyview.com/',
    ],
    [
      'tomato-sky',
      'Tomato Sky',
      'A Lebanese company working across agriculture, food and produce, trade and marketing.',
      'شركة لبنانية تعمل في الزراعة والأغذية والمحاصيل الزراعية والتجارة والتسويق.',
      '<img ' + photo('tomato-sky-hero') + ' alt="Tomato Sky" loading="lazy">',
      'https://tomatosky.com/',
    ],
    [
      'bright',
      'Bright',
      'Facility services for businesses: professional cleaning, maintenance, workforce and retail support, transportation and porter services.',
      'خدمات مرافق للشركات تشمل التنظيف والصيانة ودعم القوى العاملة ومتاجر التجزئة والنقل وخدمات الحمّالين.',
      '<img class="brand-logo" src="/assets/bright-logo-400.webp" alt="Bright" loading="lazy">',
      'https://brightlb.com/',
    ],
    [
      'be-right',
      'Be Right',
      'An online platform for home and business maintenance, with specialist review and price approval before technician dispatch.',
      'منصّة لحجز الصيانة والخدمات للمنازل والشركات، مع مراجعة مختص والموافقة على السعر قبل إرسال الفنّي.',
      '<img class="brand-logo" src="/assets/be-right-wordmark.webp" alt="Be Right" loading="lazy">',
      'https://be-rightbright.com/',
    ],
  ]
  return `<section class="pale compact-portfolio" id="our-businesses"><div class="wrap"><div class="compact-section-head"><div class="eyebrow">${t('Our businesses', 'أعمالنا')}</div><h2>${t('Five names. One group.', 'خمس علامات. مجموعة واحدة.')}</h2></div><div class="compact-business-grid">${businesses.map(([id, name, en, arabic, art, url]) => `<article class="compact-business-card" id="${id}"><div class="compact-business-art">${art}</div><div class="compact-business-copy"><h3><bdi>${name}</bdi></h3><p>${t(en, arabic)}</p>${url ? `<a class="text-link" href="${url}" target="_blank" rel="noopener" aria-label="${t('Visit ' + name, 'زيارة موقع ' + name)}">${t('Visit website', 'زيارة الموقع')} ↗</a>` : ''}</div></article>`).join('')}</div></div></section>`
}

// Set by renderPage() for the page being rendered.
let ar = false
let route = 'home'
const t = (en, arabic) => (ar ? arabic : en)
// Internal link in the current language: u('/') is '/ar/' on Arabic pages.
const u = (path) => (ar ? '/ar' + path : path)
// Responsive photo attributes; widths must match PHOTO_WIDTHS in scripts/optimize-images.mjs.
const photo = (name) =>
  `src="/assets/${name}-1200.webp" srcset="/assets/${name}-700.webp 700w, /assets/${name}-1200.webp 1200w" sizes="(max-width: 650px) 100vw, 50vw"`
function header() {
  return `<a class="skip" href="#main" style="position:absolute;top:-100px" onfocus="this.style.top='0'" onblur="this.style.top='-100px'">${t('Skip to content', 'انتقل إلى المحتوى')}</a><header class="wrap header"><a class="brand" href="${u('/')}" aria-label="Bright Ventures Holding SAL"><img src="/assets/holding-logo-360.webp" alt="Bright Ventures Holding SAL"><span>${t('Facility & support<br>services', 'خدمات المرافق<br>والدعم')}</span></a><button class="menu" aria-expanded="false" aria-controls="nav">${t('Menu', 'القائمة')}</button><nav class="nav" id="nav" aria-label="${t('Main navigation', 'التنقل الرئيسي')}">${[
    ['home', '/', 'Home', 'الرئيسية'],
    ['businesses', '/#our-businesses', 'Our businesses', 'أعمالنا'],
  ]
    .map(
      ([r, h, e, a]) =>
        `<a href="${u(h)}" ${route === r ? 'class="active" aria-current="page"' : ''}>${t(e, a)}</a>`,
    )
    .join(
      '',
    )}<a class="lang" href="${ar ? pagePath(route, 'en') : pagePath(route, 'ar')}" lang="${ar ? 'en' : 'ar'}" hreflang="${ar ? 'en' : 'ar'}">${ar ? 'English' : 'العربية'}</a></nav></header>`
}
function footer() {
  return `<footer class="wrap footer"><div><strong>${t('Bright Ventures Holding SAL', 'برايت فنتشرز هولدينغ ش.م.ل.')}</strong><br>${t('A Lebanese group with a shared vision.', 'مجموعة لبنانية تجمعها رؤية مشتركة.')}</div><div>${t('Company profile · 2026', 'الملف التعريفي للشركة · ٢٠٢٦')}</div></footer>`
}
function agreementChart() {
  const data = [
    [2005, 37000],
    [2006, 100000],
    [2010, 300000],
    [2016, 2500000],
    [2020, 750000],
    [2025, 2500000],
  ]
  const baseline = 270,
    plotHeight = 240,
    max = 2500000
  const grid = [0, 500000, 1000000, 1500000, 2000000, 2500000]
    .map((value) => {
      const y = baseline - (value / max) * plotHeight
      const label = value === 0 ? '0' : value < 1000000 ? '500K' : value / 1000000 + 'M'
      return `<line x1="50" x2="514" y1="${y}" y2="${y}" class="chart-grid"/><text x="42" y="${y + 5}" text-anchor="end" class="chart-tick">${label}</text>`
    })
    .join('')
  const bars = data
    .map(([year, value], i) => {
      const x = 65 + i * 76,
        height = (value / max) * plotHeight
      return `<g><title>${year}: USD ${value.toLocaleString('en-US')}</title><rect x="${x}" y="${baseline - height}" width="42" height="${height}" rx="2" fill="${i === 5 ? 'var(--cyan)' : 'var(--blue)'}"/><text x="${x + 21}" y="${baseline - height - 10}" text-anchor="middle" class="chart-value">$${value.toLocaleString('en-US')}</text><text x="${x + 21}" y="297" text-anchor="middle" class="chart-year">${year}</text></g>`
    })
    .join('')
  return `<figure class="agreement-chart"><figcaption><h3>${t('Value of Agreement', 'قيمة الاتفاقية')}</h3><span>${t('USD · Selected years', 'دولار أمريكي · سنوات مختارة')}</span></figcaption><svg viewBox="0 0 528 316" role="img" aria-labelledby="agreement-title agreement-desc" dir="ltr" xmlns="http://www.w3.org/2000/svg"><title id="agreement-title">${t('Value of Agreement in USD', 'قيمة الاتفاقية بالدولار الأمريكي')}</title><desc id="agreement-desc">2005: USD 37,000; 2006: USD 100,000; 2010: USD 300,000; 2016: USD 2,500,000; 2020: USD 750,000; 2025: USD 2,500,000.</desc>${grid}${bars}</svg></figure>`
}
function home() {
  return `<main id="main" class="compact-home"><section class="wrap hero holding-hero" id="holding-company"><div><div class="eyebrow">${t('Bright Ventures Holding SAL · Lebanon', 'برايت فنتشرز هولدينغ ش.م.ل. · لبنان')}</div><h1>${t('Distinct businesses.<br><em>One shared vision.</em>', 'أعمال متنوّعة.<br><em>رؤية مشتركة.</em>')}</h1><p>${t('Vardenia, Virgin Valley, Tomato Sky, Bright and Be Right, together under Bright Ventures Holding SAL.', 'تجمع برايت فنتشرز هولدينغ ش.م.ل. كلّاً من <bdi>Vardenia</bdi> و<bdi>Virgin Valley</bdi> و<bdi>Tomato Sky</bdi> و<bdi>Bright</bdi> و<bdi>Be Right</bdi>.')}</p><a class="button" href="${u('/')}#our-businesses">${t('Our businesses', 'أعمالنا')}</a></div>${agreementChart()}</section>${businessDetails()}</main>`
}
function heading(e, a, d, b) {
  return `<div class="wrap page-heading"><div class="eyebrow">${t('Bright Ventures Holding SAL · Lebanon', 'برايت فنتشرز هولدينغ ش.م.ل. · لبنان')}</div><h1>${t(e, a)}</h1><p>${t(d, b)}</p></div>`
}

export const SITE_URL = 'https://brightventuresholding.com'
export const PAGES = ['home']
export const LANGS = ['en', 'ar']

export function pagePath(page, lang) {
  return (lang === 'ar' ? '/ar' : '') + (page === 'home' ? '/' : `/${page}/`)
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function meta() {
  const title =
    t('Bright Ventures Holding SAL | ', 'برايت فنتشرز هولدينغ ش.م.ل. | ') +
    {
      home: t('Our Group & Businesses', 'المجموعة وأعمالها'),
    }[route]
  const description = {
    home: t(
      'Bright Ventures Holding SAL: Vardenia, Virgin Valley, Tomato Sky, Bright and Be Right, together under one Lebanese group.',
      'تجمع برايت فنتشرز هولدينغ ش.م.ل. كلّاً من Vardenia وVirgin Valley وTomato Sky وBright وBe Right.',
    ),
  }[route]
  return { title, description }
}

function head({ title, description }) {
  const url = (lang) => SITE_URL + pagePath(route, lang)
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bright Ventures Holding SAL',
    alternateName: 'برايت فنتشرز هولدينغ ش.م.ل.',
    url: SITE_URL + '/',
    logo: SITE_URL + '/assets/holding-logo-700.webp',
    description: meta().description,
    areaServed: { '@type': 'Country', name: 'Lebanon' },
  }
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${url(ar ? 'ar' : 'en')}">`,
    `<link rel="alternate" hreflang="en" href="${url('en')}">`,
    `<link rel="alternate" hreflang="ar" href="${url('ar')}">`,
    `<link rel="alternate" hreflang="x-default" href="${url('en')}">`,
    `<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">`,
    `<link rel="icon" type="image/png" sizes="192x192" href="/assets/icon-192.png">`,
    `<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">`,
    `<meta name="theme-color" content="#102b3a">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Bright Ventures Holding SAL">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${url(ar ? 'ar' : 'en')}">`,
    `<meta property="og:image" content="${SITE_URL}/assets/og-image.jpg">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:locale" content="${ar ? 'ar_LB' : 'en_GB'}">`,
    `<meta property="og:locale:alternate" content="${ar ? 'en_GB' : 'ar_LB'}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap">`,
    route === 'home'
      ? `<script type="application/ld+json">${JSON.stringify(organization)}</script>`
      : '',
  ]
    .filter(Boolean)
    .join('\n    ')
}

// Full markup for one page in one language, used at build time (and by the dev server).
export function renderPage(page, lang) {
  route = page
  ar = lang === 'ar'
  const body = header() + { home }[page]() + footer()
  return { lang, dir: ar ? 'rtl' : 'ltr', head: head(meta()), body }
}

export function sitemap() {
  const urls = PAGES.flatMap((page) =>
    LANGS.map(
      (lang) => `  <url>
    <loc>${SITE_URL}${pagePath(page, lang)}</loc>
${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${pagePath(page, l)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${pagePath(page, 'en')}"/>
  </url>`,
    ),
  )
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
}
