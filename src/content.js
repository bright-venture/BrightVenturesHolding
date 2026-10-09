function operationsPhotos() {
  return `<section class="wrap section operations-photos"><div class="eyebrow">${t('Our people at work', 'فريقنا أثناء العمل')}</div><h2>${t('Supporting everyday operations.', 'ندعم أعمالكم اليومية.')}</h2><div class="operations-grid"><figure><img ${photo('real-company-team')} loading="lazy" alt="${t('Team carrying out floor cleaning at a retail site', 'فريق يعمل على تنظيف الأرضيات في متجر')}"><figcaption>${t('Floor cleaning and on-site support', 'تنظيف الأرضيات والدعم في الموقع')}</figcaption></figure><figure><img ${photo('real-company-retail')} loading="lazy" alt="${t('Employee replenishing supermarket shelves', 'موظف يعيد تعبئة رفوف سوبرماركت')}"><figcaption>${t('Retail shelf replenishment', 'إعادة تعبئة الرفوف في متاجر التجزئة')}</figcaption></figure></div></section>`
}
function holdingOverview() {
  return `<section class="wrap section holding-overview" aria-labelledby="holding-title"><div class="section-head"><div><div class="eyebrow">${t('Bright Ventures Holding SAL', 'برايت فنتشرز هولدينغ ش.م.ل.')}</div><h2 id="holding-title">${t('Our businesses & services.', 'أعمالنا وخدماتنا.')}</h2></div></div><div class="overview-art"><img src="/assets/holding-overview-1200.webp" srcset="/assets/holding-overview-1200.webp 1200w, /assets/holding-overview.webp 1672w" sizes="(max-width: 1320px) 100vw, 1208px" width="1672" height="941" loading="lazy" alt="${t('Bright Ventures Holding SAL overview: Tomato Sky food and beverages, business solutions, Be Right by Bright Ventures Holding SAL, transportation, porters, cleaning and maintenance.', 'مخطط برايت فنتشرز هولدينغ ش.م.ل.: Tomato Sky للأغذية والمشروبات، حلول الأعمال، Be Right by Bright Ventures Holding SAL، النقل، خدمات الحمّالين، التنظيف والصيانة.')}"><a class="tomato-hotspot" href="https://tomatosky.com/" target="_blank" rel="noopener" aria-label="${t('Visit Tomato Sky website', 'زيارة موقع Tomato Sky')}" title="${t('Visit Tomato Sky', 'زيارة موقع Tomato Sky')}"></a><a class="be-right-hotspot" href="https://be-rightbright.com/" target="_blank" rel="noopener" aria-label="${t('Visit Be Right website', 'زيارة موقع Be Right')}" title="${t('Visit Be Right', 'زيارة موقع Be Right')}"></a></div><a class="text-link" href="/assets/holding-overview.webp" target="_blank" rel="noopener">${t('View the full-size overview', 'عرض المخطط بالحجم الكامل')}</a></section>`
}

function businessCards() {
  const cards = [
    [
      'bright',
      'Bright',
      'Bright',
      'Facility & workforce services',
      'خدمات المرافق والقوى العاملة',
      'Facility and operational support for businesses in Lebanon.',
      'خدمات المرافق والدعم التشغيلي للشركات في لبنان.',
      '<img ' +
        photo('real-cleaning') +
        ' alt="' +
        t('Bright facility services team', 'فريق خدمات المرافق في Bright') +
        '" loading="lazy">',
    ],
    [
      'be-right',
      'Be Right',
      'Be Right',
      'Service booking & maintenance',
      'حجز الخدمات والصيانة',
      'An online service platform for homes, restaurants, offices, buildings and businesses, with specialist review and price approval before dispatch.',
      'منصّة لحجز الخدمات للمنازل والمطاعم والمكاتب والمباني والشركات، مع مراجعة المختصين والموافقة على السعر قبل إرسال الفريق.',
      '<img class="portfolio-wordmark" src="/assets/be-right-wordmark.webp" alt="Be Right by Bright" loading="lazy">',
    ],
    [
      'tomato-sky',
      'Tomato Sky',
      'Tomato Sky',
      'Food & agriculture',
      'الأغذية والزراعة',
      'A Lebanese company connecting food and agriculture, with VirginValley and Black Beauty Tomato in its brand family.',
      'شركة لبنانية تربط بين الأغذية والزراعة، وتضمّ علامتَي <bdi>VirginValley</bdi> و<bdi>Black Beauty Tomato</bdi>.',
      '<img ' +
        photo('tomato-sky-hero') +
        ' alt="' +
        t('Tomato Sky: a tomato glowing in the sky', 'Tomato Sky: ثمرة طماطم مضيئة في السماء') +
        '" loading="lazy">',
    ],
    [
      'business-solutions',
      'Business Solutions',
      'حلول الأعمال',
      'Business support',
      'دعم الأعمال',
      'Business solutions form another part of the Bright Ventures Holding SAL portfolio.',
      'تشكل حلول الأعمال مجالاً آخر ضمن أنشطة برايت فنتشرز هولدينغ ش.م.ل..',
      '<div class="solutions-art" aria-hidden="true"><span>' +
        t('Business', 'حلول') +
        '</span><strong>' +
        t('Solutions', 'الأعمال') +
        '</strong></div>',
    ],
  ]
  return `<section class="wrap section portfolio" id="group-businesses"><div class="section-head"><div><div class="eyebrow">${t('Our businesses', 'أعمالنا')}</div><h2>${t('Different strengths.<br>A wider group.', 'مجالات متنوّعة.<br>مجموعة متكاملة.')}</h2></div><p>${t('Explore the businesses and activities that make up Bright Ventures Holding SAL.', 'تعرّفوا على الشركات والأنشطة التي تشكّل برايت فنتشرز هولدينغ ش.م.ل..')}</p></div><div class="business-grid">${cards.map(([id, en, arabic, sector, sectorAr, desc, descAr, art]) => `<article class="business-card" id="${id}"><div class="business-art ${id === 'be-right' ? 'be-right-art' : ''}">${art}</div><div class="business-copy"><div class="eyebrow">${t(sector, sectorAr)}</div><h3>${t(en, arabic)}</h3><p>${t(desc, descAr)}</p><a class="text-link" href="${u('/')}#${id}">${t('Explore ' + en, 'اكتشف ' + arabic)} →</a></div></article>`).join('')}</div></section>`
}
function beRightCategories() {
  return [
    ['Plumbing', 'السباكة'],
    ['Electrical', 'الكهرباء'],
    ['Air conditioning', 'التكييف'],
    ['Appliance repair', 'إصلاح الأجهزة'],
    ['Carpentry', 'النجارة'],
    ['Painting & repairs', 'الدهان والإصلاحات'],
    ['Waterproofing', 'العزل المائي'],
    ['Installation & assembly', 'التركيب والتجميع'],
    ['Locksmith', 'الأقفال والمفاتيح'],
    ['Cameras & alarms', 'الكاميرات وأنظمة الإنذار'],
    ['Pest control', 'مكافحة الآفات'],
    ['Cleaning', 'التنظيف'],
    ['Landscaping', 'تنسيق الحدائق'],
    ['Porter', 'خدمات الحمّالين'],
    ['Valet & event staff', 'خدمة صفّ السيارات وفرق الفعاليات'],
    ['Security', 'الأمن'],
  ]
}
function businessDetails() {
  return `<section class="wrap section businesses-intro" id="our-businesses"><div class="section-head"><div><div class="eyebrow">${t('Our businesses', 'أعمالنا')}</div><h2>${t('Different strengths.<br>A wider group.', 'مجالات متنوّعة.<br>مجموعة متكاملة.')}</h2></div><p>${t('Explore the companies and activities that make up Bright Ventures Holding SAL.', 'تعرّفوا على الشركات والأنشطة التي تشكّل برايت فنتشرز هولدينغ ش.م.ل..')}</p></div></section><nav class="wrap business-jump" aria-label="${t('Businesses on this page', 'الأعمال في هذه الصفحة')}">${[
    ['bright', 'Bright', 'Bright'],
    ['be-right', 'Be Right', 'Be Right'],
    ['tomato-sky', 'Tomato Sky', 'Tomato Sky'],
    ['business-solutions', 'Business Solutions', 'حلول الأعمال'],
  ]
    .map(([id, en, arabic]) => `<a href="#${id}">${t(en, arabic)}</a>`)
    .join(
      '',
    )}</nav><section class="wrap section group-detail bright-brief" id="bright"><div class="split"><div><div class="eyebrow">${t('01 · Facility & workforce services', '01 · خدمات المرافق والقوى العاملة')}</div><h2>Bright</h2><p>${t('Bright provides facility and operational support for businesses in Lebanon, covering cleaning, maintenance and workforce services.', 'تقدّم <bdi>Bright</bdi> خدمات المرافق والدعم التشغيلي للشركات في لبنان، وتشمل التنظيف والصيانة ودعم القوى العاملة.')}</p></div><img ${photo('real-hero')} loading="lazy" alt="${t('Bright employee operating cleaning equipment', 'موظف Bright يستخدم معدات التنظيف')}"></div></section><section class="pale" id="be-right"><div class="wrap section group-detail"><div class="split"><div><div class="eyebrow">${t('02 · Service booking & maintenance', '02 · حجز الخدمات والصيانة')}</div><h2>Be Right</h2><p>${t('Be Right connects homes, restaurants, offices, buildings and businesses with maintenance and practical services. Requests are booked online, reviewed by a specialist, and quoted for customer approval before a technician is dispatched.', 'تربط <bdi>Be Right</bdi> المنازل والمطاعم والمكاتب والمباني والشركات بخدمات الصيانة والخدمات العملية. تُقدّم الطلبات عبر الإنترنت ويراجعها مختص، ثم يُعرض السعر للموافقة قبل إرسال الفنّي.')}</p><a class="button" href="https://be-rightbright.com/" target="_blank" rel="noopener">${t('Visit Be Right', 'زيارة موقع Be Right')} ↗</a><p class="small-note">${t('Service and appointment availability is confirmed for your address.', 'يُؤكَّد توفر الخدمة والمواعيد لعنوانكم.')}</p></div><div class="be-right-brand"><img src="/assets/be-right-wordmark.webp" alt="Be Right by Bright" loading="lazy"></div></div><div class="business-subhead"><h3>${t('Services for everyday needs.', 'خدمات للاحتياجات اليومية.')}</h3><p>${t('Sixteen service categories listed on Be Right’s website.', 'ست عشرة فئة من الخدمات على موقع Be Right.')}</p></div><ul class="category-grid">${beRightCategories()
    .map(([en, arabic]) => `<li>${t(en, arabic)}</li>`)
    .join(
      '',
    )}</ul><h3 class="process-title">${t('From request to completion.', 'من الطلب إلى إنجاز العمل.')}</h3><ol class="booking-steps">${[
    [
      'Describe the job',
      'وصف العمل',
      'Choose a service, explain the issue and add photos if needed.',
      'اختيار الخدمة وشرح المشكلة وإضافة الصور عند الحاجة.',
    ],
    [
      'Review & approve',
      'المراجعة والموافقة',
      'A specialist reviews the request. You approve the quote before dispatch.',
      'يراجع مختص الطلب وتوافقون على عرض السعر قبل إرسال الفريق.',
    ],
    [
      'Complete the work',
      'إنجاز العمل',
      'A qualified technician carries out the job with specialist follow-up.',
      'ينجز فنّي مؤهل العمل مع متابعة من المختص.',
    ],
  ]
    .map(
      ([en, arabic, desc, descAr], i) =>
        `<li><span>0${i + 1}</span><h4>${t(en, arabic)}</h4><p>${t(desc, descAr)}</p></li>`,
    )
    .join(
      '',
    )}</ol><a class="text-link" href="https://be-rightbright.com/#how" target="_blank" rel="noopener">${t('See how Be Right works', 'تعرّف على آلية عمل Be Right')} ↗</a></div></section><section class="wrap section group-detail tomato-group" id="tomato-sky"><div class="split"><div><div class="eyebrow">${t('03 · Food & agriculture', '03 · الأغذية والزراعة')}</div><h2>Tomato Sky</h2><p>${t('Tomato Sky SAL brings VirginValley and Black Beauty Tomato together under one Lebanese company. It connects food and agriculture while keeping a distinct identity for each brand.', 'تجمع شركة <bdi>Tomato Sky SAL</bdi> علامتَي <bdi>VirginValley</bdi> و<bdi>Black Beauty Tomato</bdi> تحت مظلة شركة لبنانية واحدة. وتربط بين الأغذية والزراعة مع الحفاظ على هوية خاصة لكل علامة.')}</p><a class="button" href="https://tomatosky.com/" target="_blank" rel="noopener">${t('Visit Tomato Sky', 'زيارة موقع Tomato Sky')} ↗</a></div><img ${photo('tomato-sky-hero')} loading="lazy" alt="${t('Tomato Sky visual: a tomato in a cloudy sky', 'صورة Tomato Sky: ثمرة طماطم في سماء غائمة')}"></div><div class="business-subhead"><h3>${t('The Tomato Sky family.', 'عائلة Tomato Sky.')}</h3></div><div class="brand-family">${[
    ['virgin-valley', 'VirginValley'],
    ['black-beauty', 'Black Beauty Tomato'],
  ]
    .map(
      ([file, name]) =>
        `<article><img ${photo(file)} alt="${name}" loading="lazy"><h4 dir="ltr">${name}</h4><p>${t('A Tomato Sky brand', 'إحدى علامات Tomato Sky')}</p></article>`,
    )
    .join(
      '',
    )}</div><h3 class="process-title">${t('Areas of activity.', 'مجالات العمل.')}</h3><div class="activity-tags">${[
    ['Agriculture', 'الزراعة'],
    ['Food & produce', 'الأغذية والمحاصيل الزراعية'],
    ['Trade & marketing', 'التجارة والتسويق'],
  ]
    .map(([en, arabic]) => `<span>${t(en, arabic)}</span>`)
    .join(
      '',
    )}</div><a class="text-link" href="https://tomatosky.com/#brands" target="_blank" rel="noopener">${t('Explore the Tomato Sky family', 'اكتشف عائلة Tomato Sky')} ↗</a></section><section class="pale" id="business-solutions"><div class="wrap section"><div class="eyebrow">${t('04 · Business support', '04 · دعم الأعمال')}</div><h2>${t('Business Solutions', 'حلول الأعمال')}</h2><p>${t('Business solutions are also part of the Bright Ventures Holding SAL portfolio, alongside its service and food businesses.', 'تشكل حلول الأعمال أيضاً جزءاً من أنشطة برايت فنتشرز هولدينغ ش.م.ل.، إلى جانب شركات الخدمات والأغذية.')}</p></div></section>`
}

// Set by renderPage() for the page being rendered.
let ar = false
let route = 'home'
const t = (en, arabic) => (ar ? arabic : en)
// Internal link in the current language: u('/ceo/') is '/ar/ceo/' on Arabic pages.
const u = (path) => (ar ? '/ar' + path : path)
// Responsive photo attributes; widths must match PHOTO_WIDTHS in scripts/optimize-images.mjs.
const photo = (name) =>
  `src="/assets/${name}-1200.webp" srcset="/assets/${name}-700.webp 700w, /assets/${name}-1200.webp 1200w" sizes="(max-width: 650px) 100vw, 50vw"`
const services = [
  [
    'cleaning',
    'Professional cleaning',
    'التنظيف الاحترافي',
    'Clean, welcoming environments for employees, customers and guests.',
    'بيئات نظيفة ومرحّبة للموظفين والعملاء والزوار.',
  ],
  [
    'maintenance',
    'Maintenance',
    'الصيانة',
    'Building and mechanical maintenance for everyday operations.',
    'صيانة المباني والأنظمة الميكانيكية لدعم العمليات اليومية.',
  ],
  [
    'workforce',
    'Workforce support',
    'دعم القوى العاملة',
    'Flexible teams adapted to your operational requirements.',
    'فرق مرنة تتناسب مع متطلبات أعمالكم.',
  ],
  [
    'transportation',
    'Transportation',
    'النقل',
    'Employee transport between work, accommodation and the airport.',
    'نقل الموظفين بين العمل والسكن والمطار.',
  ],
  [
    'porter',
    'Porter services',
    'خدمات الحمّالين',
    'Practical support for commercial and retail operations.',
    'دعم عملي للعمليات التجارية وقطاع التجزئة.',
  ],
]
function header() {
  return `<a class="skip" href="#main" style="position:absolute;top:-100px" onfocus="this.style.top='0'" onblur="this.style.top='-100px'">${t('Skip to content', 'انتقل إلى المحتوى')}</a><header class="wrap header"><a class="brand" href="${u('/')}" aria-label="Bright Ventures Holding SAL"><img src="/assets/holding-logo-360.webp" alt="Bright Ventures Holding SAL"><span>${t('Facility & support<br>services', 'خدمات المرافق<br>والدعم')}</span></a><button class="menu" aria-expanded="false" aria-controls="nav">${t('Menu', 'القائمة')}</button><nav class="nav" id="nav" aria-label="${t('Main navigation', 'التنقل الرئيسي')}">${[
    ['home', '/', 'Home', 'الرئيسية'],
    ['businesses', '/#our-businesses', 'Our businesses', 'أعمالنا'],
    ['ceo', '/ceo/', 'Founder & CEO', 'المؤسس والرئيس التنفيذي'],
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
  return `<footer class="wrap footer"><div><strong>${t('Bright Ventures Holding SAL', 'برايت فنتشرز هولدينغ ش.م.ل.')}</strong><br>${t('A Lebanese group across services, business solutions, food and agriculture.', 'مجموعة لبنانية تجمع الخدمات وحلول الأعمال والأغذية والزراعة.')}</div><div>${t('Company profile · 2026', 'الملف التعريفي للشركة · ٢٠٢٦')}</div></footer>`
}
function home() {
  return `<main id="main"><section class="wrap hero holding-hero"><div><div class="eyebrow">${t('Bright Ventures Holding SAL · Lebanon', 'برايت فنتشرز هولدينغ ش.م.ل. · لبنان')}</div><h1>${t('Distinct businesses.<br><em>One shared vision.</em>', 'أعمال متنوّعة.<br><em>رؤية مشتركة.</em>')}</h1><p>${t('A group connecting facility services, service booking, business solutions, and food and agriculture. Discover Bright, Be Right and Tomato Sky, each with its own focus.', 'مجموعة تجمع خدمات المرافق وحجز الخدمات وحلول الأعمال والأغذية والزراعة. اكتشفوا <bdi>Bright</bdi> و<bdi>Be Right</bdi> و<bdi>Tomato Sky</bdi>، ولكل منها مجالها الخاص.')}</p><a class="button" href="${u('/')}#our-businesses">${t('Explore our businesses', 'اكتشف أعمالنا')}</a></div><div class="holding-identity"><img src="/assets/holding-logo-900.webp" srcset="/assets/holding-logo-700.webp 700w, /assets/holding-logo-900.webp 900w" sizes="(max-width: 650px) 90vw, 450px" fetchpriority="high" alt="Bright Ventures Holding SAL"><div>${t('Services · Business · Food & agriculture', 'الخدمات · الأعمال · الأغذية والزراعة')}</div></div></section>${businessDetails()}${holdingOverview()}<section class="pale" id="holding-company"><div class="wrap section split"><div><div class="eyebrow">${t('The holding company', 'الشركة القابضة')}</div><h2>${t('A shared direction.<br>Distinct expertise.', 'توجّه مشترك.<br>خبرات متنوّعة.')}</h2><p>${t('Bright Ventures Holding SAL brings together businesses with different roles: supporting facilities and teams, helping customers book services, and connecting food with agriculture.', 'تجمع برايت فنتشرز هولدينغ ش.م.ل. أعمالاً ذات أدوار متنوّعة: دعم المرافق والفرق، ومساعدة العملاء في حجز الخدمات، والربط بين الأغذية والزراعة.')}</p></div><div><div class="eyebrow">${t('Leadership', 'الإدارة')}</div><h3>Mohammad Lamaa</h3><p>${t('Founder & CEO · Bright Ventures Holding SAL', 'المؤسس والرئيس التنفيذي · برايت فنتشرز هولدينغ ش.م.ل.')}</p><a class="text-link" href="${u('/ceo/')}">${t('Meet our founder & CEO', 'تعرّف على المؤسس والرئيس التنفيذي')}</a></div></div></section></main>`
}
function heading(e, a, d, b) {
  return `<div class="wrap page-heading"><div class="eyebrow">${t('Bright Ventures Holding SAL · Lebanon', 'برايت فنتشرز هولدينغ ش.م.ل. · لبنان')}</div><h1>${t(e, a)}</h1><p>${t(d, b)}</p></div>`
}
function ceoPage() {
  return `<main id="main"><section class="wrap ceo"><div><div class="eyebrow">${t('Our leadership', 'إدارتنا')}</div><h1>Mohammad<br>Lamaa</h1><p class="role">${t('Founder & CEO', 'المؤسس والرئيس التنفيذي')}</p><p>${t('Bright Ventures Holding SAL', 'برايت فنتشرز هولدينغ ش.م.ل.')}</p><a class="button" href="${u('/')}#holding-company">${t('About the holding company', 'عن الشركة القابضة')}</a></div><div class="ceo-mark"><img src="/assets/holding-logo-700.webp" alt="Bright Ventures Holding SAL"><p>${t('Services · Business · Food & agriculture', 'الخدمات · الأعمال · الأغذية والزراعة')}</p></div></section><section class="pale"><div class="wrap section"><div class="eyebrow">${t('The holding company', 'الشركة القابضة')}</div><h2>${t('Distinct businesses.<br>One shared direction.', 'أعمال متنوّعة.<br>توجّه مشترك.')}</h2><p>${t('Explore Bright, Be Right, Tomato Sky and business solutions within the group.', 'اكتشفوا Bright وBe Right وTomato Sky وحلول الأعمال ضمن المجموعة.')}</p><a class="text-link" href="${u('/')}#our-businesses">${t('Explore our businesses', 'اكتشف أعمالنا')}</a></div></section></main>`
}

export const SITE_URL = 'https://brightventuresholding.com'
export const PAGES = ['home', 'ceo']
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
      ceo: t('Mohammad Lamaa · Founder & CEO', 'Mohammad Lamaa · المؤسس والرئيس التنفيذي'),
    }[route]
  const description = {
    home: t(
      'Bright Ventures Holding SAL: a Lebanese group across facility services, service booking, business solutions, food and agriculture.',
      'برايت فنتشرز هولدينغ ش.م.ل.: مجموعة لبنانية تجمع خدمات المرافق وحجز الخدمات وحلول الأعمال والأغذية والزراعة.',
    ),
    ceo: t(
      'Mohammad Lamaa, Founder and CEO of Bright Ventures Holding SAL.',
      'Mohammad Lamaa، المؤسس والرئيس التنفيذي لبرايت فنتشرز هولدينغ ش.م.ل.',
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
    founder: { '@type': 'Person', name: 'Mohammad Lamaa', jobTitle: 'Founder & CEO' },
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
  const body = header() + { home, ceo: ceoPage }[page]() + footer()
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
