function operationsPhotos() {
  return `<section class="wrap section operations-photos"><div class="eyebrow">${t('Our people at work', 'فريقنا أثناء العمل')}</div><h2>${t('Supporting everyday operations.', 'ندعم أعمالكم اليومية.')}</h2><div class="operations-grid"><figure><img ${photo('real-company-team')} loading="lazy" alt="${t('Team carrying out floor cleaning at a retail site', 'فريق يعمل على تنظيف الأرضيات في متجر')}"><figcaption>${t('Floor cleaning and on-site support', 'تنظيف الأرضيات والدعم في الموقع')}</figcaption></figure><figure><img ${photo('real-company-retail')} loading="lazy" alt="${t('Employee replenishing supermarket shelves', 'موظف يعيد تعبئة رفوف سوبرماركت')}"><figcaption>${t('Retail shelf replenishment', 'إعادة تعبئة الرفوف في متاجر التجزئة')}</figcaption></figure></div></section>`
}
function holdingOverview() {
  return `<section class="wrap section holding-overview" aria-labelledby="holding-title"><div class="section-head"><div><div class="eyebrow">${t('Bright Ventures Holding SAL', 'برايت فنتشرز هولدينغ ش.م.ل.')}</div><h2 id="holding-title">${t('Our businesses & services.', 'أعمالنا وخدماتنا.')}</h2></div></div><a class="overview-art" href="/assets/holding-overview.webp" target="_blank" rel="noopener" aria-label="${t('Open the holding company overview at full size in a new tab', 'افتح مخطط الشركة القابضة بالحجم الكامل في علامة تبويب جديدة')}"><img src="/assets/holding-overview-1200.webp" srcset="/assets/holding-overview-1200.webp 1200w, /assets/holding-overview.webp 1672w" sizes="(max-width: 1320px) 100vw, 1208px" width="1672" height="941" loading="lazy" alt="${t('Bright Ventures Holding SAL overview: Tomato Sky food and beverages, business solutions, Be Right by Bright Ventures Holding SAL, transportation, porters, cleaning and maintenance.', 'مخطط برايت فنتشرز هولدينغ ش.م.ل.: Tomato Sky للأغذية والمشروبات، حلول الأعمال، Be Right by Bright Ventures Holding SAL، النقل، خدمات الحمّالين، التنظيف والصيانة.')}"></a><a class="text-link" href="/assets/holding-overview.webp" target="_blank" rel="noopener">${t('View the full-size overview', 'عرض المخطط بالحجم الكامل')}</a></section>`
}
// Set by renderPage() for the page being rendered.
let ar = false
let route = 'home'
const t = (en, arabic) => (ar ? arabic : en)
// Internal link in the current language: u('/services/') is '/ar/services/' on Arabic pages.
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
    ['services', '/services/', 'Services', 'خدماتنا'],
    ['company', '/company/', 'Our company', 'شركتنا'],
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
  return `<footer class="wrap footer"><div><strong>${t('Bright Ventures Holding SAL', 'برايت فنتشرز هولدينغ ش.م.ل.')}</strong><br>${t('Integrated facility and business support services across Lebanon.', 'خدمات متكاملة للمرافق ودعم الأعمال في جميع أنحاء لبنان.')}</div><div>${t('Company profile · 2026', 'الملف التعريفي للشركة · ٢٠٢٦')}</div></footer>`
}
function stats() {
  return `<section class="stats" aria-label="${t('Bright Ventures Holding SAL in numbers', 'برايت فنتشرز هولدينغ ش.م.ل. بالأرقام')}"><div class="wrap stats-inner">${[
    ['85', 'Current employees', 'الموظفون الحاليون'],
    ['40+', 'Active sites', 'مواقع العمل النشطة'],
    ['7', 'Active clients', 'العملاء الحاليون'],
    [t('Lebanon', 'لبنان'), 'Nationwide coverage', 'تغطية على مستوى الوطن'],
  ]
    .map(([n, e, a]) => `<div class="stat"><strong>${n}</strong><span>${t(e, a)}</span></div>`)
    .join('')}</div></section>`
}
function home() {
  return `<main id="main"><section class="wrap hero"><div><div class="eyebrow">${t('Bright Ventures Holding SAL · Lebanon', 'برايت فنتشرز هولدينغ ش.م.ل. · لبنان')}</div><h1>${t('Better spaces.<br><em>Every day.</em>', 'مساحات أفضل.<br><em>كل يوم.</em>')}</h1><p>${t('Professional cleaning, maintenance and operational support. Bright Ventures Holding SAL takes care of your spaces, so you can focus on your business.', 'خدمات احترافية للتنظيف والصيانة والدعم التشغيلي. تعتني برايت فنتشرز هولدينغ ش.م.ل. بمرافقكم لتتمكنوا من التركيز على أعمالكم.')}</p><a class="button" href="${u('/services/')}">${t('Explore our services', 'اكتشف خدماتنا')}</a><a class="button secondary" href="${u('/company/')}">${t('Our company', 'شركتنا')}</a></div><div class="hero-photo"><img ${photo('real-hero')} fetchpriority="high" alt="${t('Bright Ventures Holding SAL employee operating cleaning equipment at a commercial site', 'موظف برايت فنتشرز هولدينغ ش.م.ل. يستخدم معدات التنظيف في موقع تجاري')}"><div class="photo-caption">${t('Our people. Your everyday operations.', 'فريقنا في خدمة أعمالكم اليومية.')}</div></div></section>${stats()}${holdingOverview()}<section class="wrap section"><div class="section-head"><div><div class="eyebrow">${t('What we do', 'ماذا نقدّم')}</div><h2>${t('One partner.<br>Integrated services.', 'شريك واحد.<br>خدمات متكاملة.')}</h2></div><p>${t('A coordinated approach to the facilities, teams and daily tasks that keep your business running.', 'نهج متكامل لإدارة المرافق والفرق والمهام اليومية التي تدعم استمرارية أعمالكم.')}</p></div><div class="service-list">${services.map(([id, e, a, d, b], i) => `<a class="service-link" href="${u('/services/')}#${id}"><span class="num">0${i + 1}</span><h3>${t(e, a)}</h3><p>${t(d, b)}</p></a>`).join('')}</div></section><section class="pale"><div class="wrap section split"><img ${photo('real-glass')} loading="lazy" alt="${t('Bright Ventures Holding SAL team member cleaning commercial windows', 'أحد أعضاء فريق برايت فنتشرز هولدينغ ش.م.ل. ينظف واجهة زجاجية')}"><div><div class="eyebrow">${t('People behind the service', 'الفريق وراء الخدمة')}</div><h2>${t('Professional teams.<br>Personal accountability.', 'فرق محترفة.<br>مسؤولية واضحة.')}</h2><p>${t('Trained, trustworthy employees and professional management are at the centre of Bright Ventures Holding SAL’s service. Regular inspections, supervisor follow-ups and client feedback guide how we work.', 'الموظفون المدرّبون والموثوقون والإدارة المهنية هم أساس خدمات برايت فنتشرز هولدينغ ش.م.ل.. نتابع العمل من خلال عمليات التفتيش المنتظمة وإشراف المسؤولين وملاحظات العملاء.')}</p><a class="text-link" href="${u('/company/')}#quality">${t('Our approach to quality', 'نهجنا في الجودة')}</a></div></div></section><section class="wrap section"><div class="section-head"><div><div class="eyebrow">${t('Our clients', 'عملاؤنا')}</div><h2>${t('Part of everyday<br>business in Lebanon.', 'جزء من الحياة اليومية<br>للأعمال في لبنان.')}</h2></div><p>${t('Supporting established names in retail and business through long-term operational relationships.', 'ندعم أسماء راسخة في قطاع التجزئة والأعمال من خلال علاقات تشغيلية طويلة الأمد.')}</p></div><div class="clients">${['Spinneys', 'Teska', 'Tawfeer', 'Maliks', 'Happy', 'NokNok', 'Grab’n Go'].map((n) => `<span>${n}</span>`).join('')}</div></section><section class="wrap" style="padding-bottom:70px"><div class="digital"><div><div class="eyebrow">${t('Digital services', 'الخدمات الرقمية')}</div><h3>Be Right by Bright Ventures Holding SAL</h3><p>${t('Service booking for homes and businesses. Online requests, specialist review and quote approval before dispatch.', 'حجز الخدمات للمنازل والشركات. تقديم الطلبات عبر الإنترنت ومراجعتها من المختصين والموافقة على عرض السعر قبل إرسال الفريق.')}</p></div><a class="button" href="https://be-rightbright.com" target="_blank" rel="noopener">${t('Visit Be Right', 'زيارة Be Right')}</a></div></section></main>`
}
function heading(e, a, d, b) {
  return `<div class="wrap page-heading"><div class="eyebrow">${t('Bright Ventures Holding SAL · Lebanon', 'برايت فنتشرز هولدينغ ش.م.ل. · لبنان')}</div><h1>${t(e, a)}</h1><p>${t(d, b)}</p></div>`
}
function servicesPage() {
  const group = (e, a, items) =>
    `<div><h3>${t(e, a)}</h3><ul>${items.map(([x, y]) => `<li>${t(x, y)}</li>`).join('')}</ul></div>`
  return `<main id="main">${heading('Services for your<br>everyday operations.', 'خدمات تدعم<br>أعمالكم اليومية.', 'Facility care and operational support tailored to commercial, retail and business environments.', 'العناية بالمرافق والدعم التشغيلي بما يناسب البيئات التجارية وقطاع التجزئة والشركات.')}<div class="wrap"><section class="service-detail" id="cleaning"><div><div class="eyebrow">01</div><h2>${t('Professional cleaning', 'التنظيف الاحترافي')}</h2><p>${t(services[0][3], services[0][4])}</p><img ${photo('real-cleaning')} alt="${t('Bright Ventures Holding SAL team with floor-cleaning equipment in a supermarket', 'فريق برايت فنتشرز هولدينغ ش.م.ل. مع معدات تنظيف الأرضيات في سوبرماركت')}"></div><div class="detail-list">${group(
    'Daily office cleaning',
    'التنظيف اليومي للمكاتب',
    [
      ['Interior and exterior cleaning', 'التنظيف الداخلي والخارجي'],
      ['Washroom services', 'تنظيف المرافق الصحية'],
      ['Mat services and waste handling', 'العناية بالحصائر والتعامل مع النفايات'],
    ],
  )}${group('Industrial cleaning', 'التنظيف الصناعي', [
    ['Carpet and floor maintenance', 'العناية بالسجاد والأرضيات'],
    ['Window cleaning', 'تنظيف النوافذ'],
    ['Road sweeping and grounds', 'كنس الطرق والعناية بالمساحات الخارجية'],
  ])}${group('Periodical cleaning', 'التنظيف الدوري', [
    ['Healthcare and food hygiene', 'النظافة في مرافق الرعاية الصحية والأغذية'],
    ['Industrial and retail cleaning', 'تنظيف المواقع الصناعية ومتاجر التجزئة'],
  ])}${group('Specialized cleaning', 'التنظيف المتخصص', [
    ['Duct and HVAC cleaning', 'تنظيف مجاري الهواء وأنظمة التكييف'],
    ['Height cleaning and laundry', 'التنظيف على ارتفاعات وخدمات الغسيل'],
    ['Facade and signage cleaning', 'تنظيف الواجهات واللافتات'],
  ])}</div></section><section class="service-detail" id="maintenance"><div><div class="eyebrow">02</div><h2>${t('Maintenance services', 'خدمات الصيانة')}</h2><p>${t('Vendor management for single locations and multi-site operations, covering long-term plans, everyday maintenance and emergency calls.', 'إدارة المورّدين للمواقع الفردية والعمليات متعددة المواقع، تشمل الخطط طويلة الأمد والصيانة اليومية والاستجابة للحالات الطارئة.')}</p><figure class="service-photo"><img ${photo('real-maintenance')} loading="lazy" alt="${t('Technician servicing cleaning equipment', 'فنّي يجري صيانة لمعدات التنظيف')}"><figcaption>${t('Cleaning equipment maintenance', 'صيانة معدات التنظيف')}</figcaption></figure></div><div class="detail-list">${group(
    'Building maintenance',
    'صيانة المباني',
    [
      ['Painting', 'الدهان'],
      ['Waterproofing and insulation', 'العزل والحماية من تسرب المياه'],
      ['Crack repair', 'معالجة التشققات'],
      ['Drains and parapets', 'العناية بالمصارف وحواجز الأسطح'],
      ['Rock and sandstone cleaning', 'تنظيف الصخور والحجر الرملي'],
    ],
  )}${group('Mechanical maintenance', 'الصيانة الميكانيكية', [
    ['Fire systems and air conditioning', 'أنظمة مكافحة الحريق والتكييف'],
    ['Pumps', 'المضخات'],
    ['Electrical and security systems', 'الأنظمة الكهربائية والأمنية'],
    ['Generator maintenance, installation and repair', 'صيانة المولدات وتركيبها وإصلاحها'],
  ])}</div></section><section class="service-detail" id="workforce"><div><div class="eyebrow">03</div><h2>${t('Workforce & delivery support', 'دعم القوى العاملة والتوصيل')}</h2><p>${t('Flexible teams deployed according to operational requirements, with delivery support in specific service areas.', 'فرق مرنة تُوزّع وفق المتطلبات التشغيلية، مع دعم التوصيل في مناطق الخدمة المحددة.')}</p></div><img ${photo('real-workforce')} loading="lazy" alt="${t('Bright Ventures Holding SAL team member supporting retail stock operations', 'أحد أعضاء فريق برايت فنتشرز هولدينغ ش.م.ل. يدعم ترتيب المنتجات في متجر')}"></section><section class="service-detail" id="transportation"><div><div class="eyebrow">04</div><h2>${t('Employee transportation', 'نقل الموظفين')}</h2><p>${t('Bright Ventures Holding SAL provides and manages buses between employee accommodation and work locations. Airport-to-home transfers also form part of our employee support services.', 'توفّر برايت فنتشرز هولدينغ ش.م.ل. الحافلات وتديرها لنقل الموظفين بين أماكن السكن والعمل. وتشمل خدمات دعم الموظفين أيضاً النقل من المطار إلى المنزل.')}</p></div><div><img ${photo('transport')} loading="lazy" alt="${t('Employee transportation vehicle branding concept', 'تصوّر لهوية مركبة نقل الموظفين')}"><p class="small-note">${t('Vehicle branding concept from the company profile.', 'تصوّر لهوية المركبة وارد في الملف التعريفي للشركة.')}</p></div></section><section class="service-detail" id="porter"><div><div class="eyebrow">05</div><h2>${t('Porter & facility support', 'خدمات الحمّالين ودعم المرافق')}</h2></div><div><p>${t('Porter services have formed part of Bright Ventures Holding SAL’s offering since 2013. They sit alongside professional cleaning and facility support for commercial, retail and other business establishments.', 'تشكّل خدمات الحمّالين جزءاً من خدمات برايت فنتشرز هولدينغ ش.م.ل. منذ عام ٢٠١٣، إلى جانب التنظيف الاحترافي ودعم المرافق للمؤسسات التجارية ومتاجر التجزئة وغيرها من منشآت الأعمال.')}</p></div></section></div></main>`
}
function companyPage() {
  return `<main id="main">${heading('Built around people.<br>Committed to your business.', 'فريقنا أساس خدماتنا.<br>ونجاح أعمالكم التزامنا.', 'Bright Ventures Holding SAL provides integrated facility and business support services across Lebanon through trained employees and professional management.', 'تقدّم برايت فنتشرز هولدينغ ش.م.ل. خدمات متكاملة للمرافق ودعم الأعمال في جميع أنحاء لبنان، من خلال موظفين مدرّبين وإدارة مهنية.')} ${holdingOverview()}<section class="pale"><div class="wrap section split"><div><div class="eyebrow">${t('Our purpose', 'هدفنا')}</div><h2>${t('Taking care of<br>what keeps you going.', 'نعتني بما يدعم<br>استمرارية أعمالكم.')}</h2></div><div><p>${t('Dependable facility and operational support so clients can focus on their business while Bright Ventures Holding SAL manages the rest.', 'دعم موثوق للمرافق والعمليات يتيح للعملاء التركيز على أعمالهم بينما تتولّى برايت فنتشرز هولدينغ ش.م.ل. المهام المساندة.')}</p><h3>${t('Our vision', 'رؤيتنا')}</h3><p>${t('To become one of Lebanon’s most trusted integrated facility and support-service companies.', 'أن نصبح إحدى أكثر الشركات موثوقية في لبنان في مجال خدمات المرافق والدعم المتكاملة.')}</p></div></div></section>${operationsPhotos()}<section class="wrap section"><div class="eyebrow">${t('Our core values', 'قيمنا الأساسية')}</div><h2>${t('The standards behind our service.', 'المبادئ التي تقوم عليها خدماتنا.')}</h2><div class="values">${[
    [
      'Reliability',
      'الموثوقية',
      'We deliver what was agreed, consistently.',
      'نلتزم بتنفيذ ما اتُّفق عليه باستمرار.',
    ],
    [
      'Quality',
      'الجودة',
      'Clear standards across every service and site.',
      'معايير واضحة في كل خدمة وموقع.',
    ],
    [
      'People',
      'الأفراد',
      'Our workforce is at the centre of our service.',
      'فريق العمل هو محور خدماتنا.',
    ],
    [
      'Responsiveness',
      'سرعة الاستجابة',
      'We act quickly when clients need support.',
      'نتحرّك بسرعة عندما يحتاج عملاؤنا إلى الدعم.',
    ],
    [
      'Integrity',
      'النزاهة',
      'Transparency, responsibility and respect.',
      'الشفافية والمسؤولية والاحترام.',
    ],
  ]
    .map(([e, a, d, b]) => `<div><h3>${t(e, a)}</h3><p>${t(d, b)}</p></div>`)
    .join(
      '',
    )}</div></section>${stats()}<section class="wrap section"><div class="eyebrow">${t('Company history', 'تاريخ الشركة')}</div><h2>${t('Our journey in Lebanon.', 'مسيرتنا في لبنان.')}</h2><div class="timeline">${[
    [
      '2005',
      'Service company established',
      'تأسيس شركة الخدمات',
      'Established on 6 September 2005.',
      'تأسّست في ٦ أيلول ٢٠٠٥.',
    ],
    [
      '2013',
      'Porter services',
      'خدمات الحمّالين',
      'Porter service introduced.',
      'إطلاق خدمات الحمّالين.',
    ],
    [
      '2019',
      'Bright Ventures Holding SAL',
      'Bright Ventures Holding SAL',
      '23 July 2019.',
      '٢٣ تموز ٢٠١٩.',
    ],
    ['2026', 'Tomato Sky', 'Tomato Sky', '18 June 2026.', '١٨ حزيران ٢٠٢٦.'],
  ]
    .map(
      ([y, e, a, d, b]) => `<div><strong>${y}</strong><h3>${t(e, a)}</h3><p>${t(d, b)}</p></div>`,
    )
    .join(
      '',
    )}</div><div class="cert"><h3>${t('Experience with MTO Liban', 'خبرتنا مع MTO Liban')}</h3><p>${t('From 2007 to 2016, Bright Ventures Holding SAL worked with MTO Liban in facilities management, supporting workplace and facility operations in Lebanon.', 'عملت برايت فنتشرز هولدينغ ش.م.ل. مع MTO Liban في إدارة المرافق من عام ٢٠٠٧ إلى عام ٢٠١٦، دعماً لعمليات أماكن العمل والمرافق في لبنان.')}</p></div></section><section class="pale" id="quality"><div class="wrap section"><div class="eyebrow">${t('Quality, health & safety', 'الجودة والصحة والسلامة')}</div><h2>${t('Inspect. Follow up. Improve.', 'تفتيش. متابعة. تحسين.')}</h2><div class="controls"><div><h3>${t('Quality control', 'مراقبة الجودة')}</h3><ul>${[
    ['Regular site inspections', 'تفتيش منتظم للمواقع'],
    ['Supervisor follow-ups and service checklists', 'متابعة المشرفين وقوائم التحقق'],
    ['Client updates through calls and emails', 'إطلاع العملاء عبر الاتصالات والبريد الإلكتروني'],
    ['Corrective actions for complaints', 'إجراءات تصحيحية لمعالجة الشكاوى'],
    ['Performance monitoring and evaluation', 'متابعة الأداء وتقييمه'],
  ]
    .map(([e, a]) => `<li>${t(e, a)}</li>`)
    .join(
      '',
    )}</ul></div><div><h3>${t('Health, safety & environment', 'الصحة والسلامة والبيئة')}</h3><ul>${[
    ['HSE policy and staff safety training', 'سياسة الصحة والسلامة والبيئة وتدريب الموظفين'],
    ['Personal protective equipment requirements', 'متطلبات معدات الوقاية الشخصية'],
    ['Chemical-handling procedures', 'إجراءات التعامل مع المواد الكيميائية'],
    ['Risk assessments and incident reporting', 'تقييم المخاطر والإبلاغ عن الحوادث'],
    ['Waste management and environmental practices', 'إدارة النفايات والممارسات البيئية'],
  ]
    .map(([e, a]) => `<li>${t(e, a)}</li>`)
    .join(
      '',
    )}</ul></div></div><div class="cert"><h3>ISO 9001:2015</h3><p>${t('Certified under ISO 9001:2015 from 17 August 2017 to 2019. Recertification is currently in progress. Documentation is available on request.', 'حصلت الشركة على شهادة ISO 9001:2015 من ١٧ آب ٢٠١٧ حتى عام ٢٠١٩. تجري حالياً عملية إعادة الاعتماد. الوثائق متاحة عند الطلب.')}</p></div></div></section><section class="wrap section split"><div><div class="eyebrow">${t('Leadership', 'الإدارة')}</div><h2>Mohammad Lamaa</h2><p>${t('Founder & CEO', 'المؤسس والرئيس التنفيذي')}</p><a class="text-link" href="${u('/ceo/')}">${t('Meet our founder & CEO', 'تعرّف على رئيسنا التنفيذي')}</a></div><div><h3>${t('Long-term relationships.', 'علاقات طويلة الأمد.')}</h3><p>${t('Bright Ventures Holding SAL’s company profile centres on client relationships, integrated facility services and continuous improvement in customer support.', 'يركّز الملف التعريفي لبرايت فنتشرز هولدينغ ش.م.ل. على علاقات العملاء وخدمات المرافق المتكاملة والتحسين المستمر لدعم العملاء.')}</p></div></section></main>`
}
function ceoPage() {
  return `<main id="main"><section class="wrap ceo"><div><div class="eyebrow">${t('Our leadership', 'إدارتنا')}</div><h1>Mohammad<br>Lamaa</h1><p class="role">${t('Founder & CEO', 'المؤسس والرئيس التنفيذي')}</p><p>${t('Bright Ventures Holding SAL', 'برايت فنتشرز هولدينغ ش.م.ل.')}</p><a class="button" href="${u('/company/')}">${t('About our company', 'عن شركتنا')}</a></div><div class="ceo-mark"><img src="/assets/holding-logo-700.webp" alt="Bright Ventures Holding SAL"><p>${t('Facility & support services<br>Across Lebanon', 'خدمات المرافق والدعم<br>في جميع أنحاء لبنان')}</p></div></section><section class="pale"><div class="wrap section split"><div><div class="eyebrow">${t('The company', 'الشركة')}</div><h2>${t('People at the heart<br>of every service.', 'الأفراد في صميم<br>كل خدمة.')}</h2></div><div><p>${t('Bright Ventures Holding SAL brings professional management and trained, trustworthy teams to facility and business support services across Lebanon.', 'تجمع برايت فنتشرز هولدينغ ش.م.ل. بين الإدارة المهنية والفرق المدرّبة والموثوقة لتقديم خدمات المرافق ودعم الأعمال في جميع أنحاء لبنان.')}</p><p>${t('Reliability, quality, responsiveness and integrity guide the company’s everyday work.', 'الموثوقية والجودة وسرعة الاستجابة والنزاهة هي المبادئ التي توجّه أعمال الشركة اليومية.')}</p><a class="text-link" href="${u('/services/')}">${t('Explore our services', 'اكتشف خدماتنا')}</a></div></div></section></main>`
}

export const SITE_URL = 'https://brightventuresholding.com'
export const PAGES = ['home', 'services', 'company', 'ceo']
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
      home: t('Facility & Support Services', 'خدمات المرافق والدعم'),
      services: t('Our Services', 'خدماتنا'),
      company: t('Our Company', 'شركتنا'),
      ceo: t('Mohammad Lamaa · Founder & CEO', 'Mohammad Lamaa · المؤسس والرئيس التنفيذي'),
    }[route]
  const description = {
    home: t(
      'Professional cleaning, maintenance and operational support. Bright Ventures Holding SAL takes care of your spaces, so you can focus on your business.',
      'خدمات احترافية للتنظيف والصيانة والدعم التشغيلي. تعتني برايت فنتشرز هولدينغ ش.م.ل. بمرافقكم لتتمكنوا من التركيز على أعمالكم.',
    ),
    services: t(
      'Bright Ventures Holding SAL: cleaning, maintenance, workforce and employee transportation services across Lebanon.',
      'برايت فنتشرز هولدينغ ش.م.ل.: خدمات التنظيف والصيانة ودعم القوى العاملة ونقل الموظفين في جميع أنحاء لبنان.',
    ),
    company: t(
      'Bright Ventures Holding SAL provides integrated facility and business support services across Lebanon through trained employees and professional management.',
      'تقدّم برايت فنتشرز هولدينغ ش.م.ل. خدمات متكاملة للمرافق ودعم الأعمال في جميع أنحاء لبنان، من خلال موظفين مدرّبين وإدارة مهنية.',
    ),
    ceo: t(
      'Mohammad Lamaa, Founder & CEO. Bright Ventures Holding SAL brings professional management and trained, trustworthy teams to facility and business support services across Lebanon.',
      'Mohammad Lamaa، المؤسس والرئيس التنفيذي. تجمع برايت فنتشرز هولدينغ ش.م.ل. بين الإدارة المهنية والفرق المدرّبة والموثوقة لتقديم خدمات المرافق ودعم الأعمال في جميع أنحاء لبنان.',
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
  const body =
    header() +
    { home, services: servicesPage, company: companyPage, ceo: ceoPage }[page]() +
    footer()
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
