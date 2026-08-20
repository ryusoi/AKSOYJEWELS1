import { Language } from '../types';

export interface TranslationSchema {
  nav: {
    home: string;
    allJewelry: string;
    newArrivals: string;
    bestSellers: string;
    collections: string;
    rings: string;
    earrings: string;
    necklaces: string;
    bracelets: string;
    bangles: string;
    charms: string;
    diamonds: string;
    gold: string;
    gemstones: string;
    bridal: string;
    mens: string;
    gifts: string;
    customized: string;
    ourStory: string;
    mission: string;
    vision: string;
    marmarisExperience: string;
    services: string;
    consultation: string;
    stores: string;
    contact: string;
    guides: string;
    faq: string;
    shipping: string;
    returns: string;
    securePayments: string;
    wishlist: string;
    cart: string;
    account: string;
  };
  announcement: string[];
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    ctaShop: string;
    ctaVisit: string;
    ctaStory: string;
    marmarisBadge: string;
  };
  story: {
    badge: string;
    title: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    securityTitle: string;
    securityText: string;
    p5: string;
    p6: string;
    partnersTitle: string;
    partner1Name: string;
    partner1Role: string;
    partner2Name: string;
    partner2Role: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
  };
  marmaris: {
    badge: string;
    title: string;
    subtitle: string;
    hotelLocation: string;
    description: string;
    ctaVisit: string;
    contactManager: string;
  };
  concierge: {
    title: string;
    subtitle: string;
    managerName: string;
    managerRole: string;
    tel: string;
    callNow: string;
    whatsappDirect: string;
    aiTitle: string;
    aiSubtitle: string;
    askPlaceholder: string;
    quickPrompts: {
      gift: string;
      diamonds: string;
      budget: string;
      discount: string;
      location: string;
      contactParvin: string;
    };
  };
  cart: {
    title: string;
    emptyText: string;
    subtotal: string;
    discountCode: string;
    apply: string;
    checkout: string;
    freeShippingNotice: string;
    sslNotice: string;
  };
  filters: {
    allCategories: string;
    allMaterials: string;
    allStones: string;
    priceRange: string;
    sort: string;
    featured: string;
    priceLowHigh: string;
    priceHighLow: string;
    newest: string;
  };
  product: {
    addToBag: string;
    addedToBag: string;
    selectSize: string;
    selectColor: string;
    carat: string;
    material: string;
    stone: string;
    availability: string;
    inStock: string;
    handcraftedIn: string;
    askAiAboutThis: string;
    whatsappInquire: string;
    reviews: string;
    detailsTitle: string;
    solidGoldGuarantee: string;
  };
  common: {
    viewDetails: string;
    quickView: string;
    readMore: string;
    exploreNow: string;
    bestSeller: string;
    new: string;
    limited: string;
    signature: string;
    share: string;
    close: string;
    verifiedSSL: string;
    establishedYear: string;
  };
  footer: {
    explore: string;
    about: string;
    services: string;
    customerCare: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      allJewelry: 'All Jewelry',
      newArrivals: 'New In',
      bestSellers: 'Best Sellers',
      collections: 'Collections',
      rings: 'Rings',
      earrings: 'Earrings',
      necklaces: 'Necklaces',
      bracelets: 'Bracelets',
      bangles: 'Bangles',
      charms: 'Charms',
      diamonds: 'Diamonds',
      gold: 'Solid Gold',
      gemstones: 'Gemstones',
      bridal: 'Bridal & Wedding',
      mens: "Men's",
      gifts: 'Gifts',
      customized: 'Customized',
      ourStory: 'Our Story',
      mission: 'Our Mission',
      vision: 'Our Vision',
      marmarisExperience: 'Marmaris Experience',
      services: 'Stores & Services',
      consultation: 'Private Styling',
      stores: 'Our Location',
      contact: 'Contact Us',
      guides: 'Jewelry Guides',
      faq: 'FAQs',
      shipping: 'Shipping & Delivery',
      returns: 'Returns & Exchanges',
      securePayments: 'Secure Payments',
      wishlist: 'Wishlist',
      cart: 'Bag',
      account: 'Account'
    },
    announcement: [
      'Complimentary Insured Worldwide Shipping & VIP Concierge',
      'Aksoy Jewel inside Lotus Beach Hotel, Marmaris • Established 1990',
      'Solid Gold Always • Handcrafted Mediterranean Fine Jewelry',
      'Direct WhatsApp Concierge with Mr. Parvin: +90 535 279 51 76'
    ],
    hero: {
      tagline: 'PREMIUM JEWELS IN MARMARIS',
      title: 'JEWELS THAT BELONG TO YOUR STORY',
      subtitle: 'Where Mediterranean elegance meets timeless gold and radiant diamonds. Crafted for a lifetime of moments inside Lotus Beach Hotel, Marmaris.',
      ctaShop: 'DISCOVER THE COLLECTION',
      ctaVisit: 'VISIT AKSOY JEWEL IN MARMARIS',
      ctaStory: 'MEET OUR STORY',
      marmarisBadge: 'ESTABLISHED 1990 • MARMARIS, TÜRKİYE'
    },
    story: {
      badge: 'SINCE 1990',
      title: 'Our Story',
      heading: 'Over Three Decades of Heritage, Craftsmanship & Distinction',
      p1: 'Aksoy Jewel, which took part in the sector in 1990 to provide better service in the GOLD sector, has achieved a reputable place in 2 sectors by showing a stable growth.',
      p2: 'The company, which follows the developments in the sector and the demands in the market places, aims to be one of the leading companies in the sector with its strong administration and professional staff.',
      p3: 'Aksoy Jewel, which has reached a certain level by fulfilling the duties and expected services at high quality levels, has successfully carried out strategies and organizations by improving its staff with the experience and professionalism of its personnel.',
      p4: 'Aksoy Jewel company family has proven itself in the sector and offered customer-oriented solutions by using modern management techniques in all its projects. It continues to offer these and improve itself.',
      securityTitle: '256-Bit SSL Encrypted Security',
      securityText: 'The payment methods on the site are presented in the most secure way, and they are not allowed to be stored anywhere. Secure payment methods are encrypted with 256-bit SSL. This encryption method is in no way decipherable from a technical point of view. Our site is protected by SSL certificate.',
      p5: 'Behind this success we have achieved is a customer-oriented and productivity-centered management. As a result of this approach, our company represents itself in the sector by collaborating with globally respected brands.',
      p6: 'The management approach of Aksoy Jewel reflects the corporate citizenship consciousness that the whole society will benefit from. Being aware of its responsibility in all the projects it has realized, Aksoy Jewel acts with the aim of being a pioneer in the society and contributes to the country in employment.',
      partnersTitle: 'Our Esteemed Leadership & Partners',
      partner1Name: 'Mr. Rashid Aksoy',
      partner1Role: 'Partner / Co-Founder',
      partner2Name: 'Mr. Fatih',
      partner2Role: 'Partner / Co-Founder',
      missionTitle: 'Our Mission',
      missionText: 'Our mission is to offer exceptional jewelry, trusted service, and an unforgettable customer experience. We combine experience, craftsmanship, modern presentation, and customer-focused service to help every guest discover a piece that feels personally meaningful.',
      visionTitle: 'Our Vision',
      visionText: 'To become one of the most respected jewelry destinations in Marmaris and an internationally recognized name for premium jewelry, trusted service, and Mediterranean luxury.'
    },
    marmaris: {
      badge: 'THE MEDITERRANEAN SETTING',
      title: 'AKSOY JEWELS MARMARIS',
      subtitle: 'Inside Lotus Beach Hotel, Marmaris, Muğla',
      hotelLocation: 'Lotus Beach Hotel • Marmaris, Muğla, Türkiye',
      description: 'Nestled between turquoise pine-clad mountains and the sparkling yachts of Marmaris Bay, our boutique inside the prestigious Lotus Beach Hotel offers a private sanctuary for jewelry lovers.',
      ctaVisit: 'PLAN YOUR VISIT',
      contactManager: 'Speak with Mr. Parvin (Manager & Sales Consultant)'
    },
    concierge: {
      title: 'AKSOY JEWEL CONCIERGE',
      subtitle: 'How may we help you discover something extraordinary?',
      managerName: 'Mr. Parvin',
      managerRole: 'Manager & Sales Consultant',
      tel: '+90 535 279 51 76',
      callNow: 'Call Direct',
      whatsappDirect: 'WhatsApp Concierge',
      aiTitle: 'AI Jewelry Stylist',
      aiSubtitle: 'Instant answers on gold, diamonds, sizing, custom pieces & active discount privileges.',
      askPlaceholder: 'Ask about diamonds, solid gold, budget gifts, or discount codes...',
      quickPrompts: {
        gift: 'Find me a meaningful gift',
        diamonds: 'Show me diamond & sapphire pieces',
        budget: 'Show pieces under my budget',
        discount: 'Do you have an active discount code?',
        location: 'Where is your Marmaris store located?',
        contactParvin: 'Connect me with Mr. Parvin'
      }
    },
    cart: {
      title: 'YOUR JEWELRY SELECTION',
      emptyText: 'Your selection is currently empty.',
      subtotal: 'Estimated Subtotal',
      discountCode: 'Privilege / Promotional Code',
      apply: 'Apply Code',
      checkout: 'PROCEED TO SECURE CHECKOUT',
      freeShippingNotice: 'Complimentary insured worldwide shipping included.',
      sslNotice: 'Guaranteed 256-Bit SSL Encrypted Transaction.'
    },
    filters: {
      allCategories: 'All Categories',
      allMaterials: 'All Precious Metals',
      allStones: 'All Gemstones',
      priceRange: 'Price Range',
      sort: 'Sort By',
      featured: 'Featured Curations',
      priceLowHigh: 'Price: Low to High',
      priceHighLow: 'Price: High to Low',
      newest: 'New Arrivals'
    },
    product: {
      addToBag: 'ADD TO JEWELRY SELECTION',
      addedToBag: 'ADDED TO SELECTION',
      selectSize: 'Select Size',
      selectColor: 'Select Precious Metal',
      carat: 'Total Carat Weight',
      material: 'Precious Metal',
      stone: 'Gemstone & Cut',
      availability: 'Availability',
      inStock: 'Ready to Ship from Marmaris',
      handcraftedIn: 'Handcrafted in Atelier',
      askAiAboutThis: 'Ask AI Stylist About This Piece',
      whatsappInquire: 'Inquire on WhatsApp with Mr. Parvin',
      reviews: 'Client Reviews',
      detailsTitle: 'Artisan Specifications',
      solidGoldGuarantee: '100% Certified Solid Gold & Conflict-Free Natural Gemstones'
    },
    common: {
      viewDetails: 'View Details',
      quickView: 'Quick View',
      readMore: 'Read Full Chapter',
      exploreNow: 'Explore Now',
      bestSeller: 'BEST SELLER',
      new: 'NEW IN',
      limited: 'LIMITED ATELIER',
      signature: 'AKSOY SIGNATURE',
      share: 'Share This Jewel',
      close: 'Close',
      verifiedSSL: '256-Bit SSL Protected',
      establishedYear: 'Est. 1990'
    },
    footer: {
      explore: 'Explore & Shop',
      about: 'About & Heritage',
      services: 'Boutique Services',
      customerCare: 'Customer Care & Security',
      copyright: '© 1990–2026 Aksoy Jewel. All Rights Reserved. Lotus Beach Hotel, Marmaris, Türkiye.'
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      allJewelry: 'Tüm Mücevherler',
      newArrivals: 'Yeni Koleksiyon',
      bestSellers: 'En Çok Tercih Edilenler',
      collections: 'Koleksiyonlar',
      rings: 'Yüzükler',
      earrings: 'Küpeler',
      necklaces: 'Kolyeler',
      bracelets: 'Bileklikler',
      bangles: 'Kelepçe Bilezikler',
      charms: 'Charm & Kolye Uçları',
      diamonds: 'Pırlanta & Elmas',
      gold: 'Saf Altın',
      gemstones: 'Değerli Taşlar',
      bridal: 'Düğün & Alyans',
      mens: 'Erkek Koleksiyonu',
      gifts: 'Hediyeler',
      customized: 'Kişiye Özel',
      ourStory: 'Hikayemiz',
      mission: 'Misyonumuz',
      vision: 'Vizyonumuz',
      marmarisExperience: 'Marmaris Deneyimi',
      services: 'Hizmetler & Mağazamız',
      consultation: 'Özel Stil Danışmanlığı',
      stores: 'Mağazamız',
      contact: 'İletişim',
      guides: 'Mücevher Rehberi',
      faq: 'Sıkça Sorulan Sorular',
      shipping: 'Teslimat & Kargo',
      returns: 'İade & Değişim',
      securePayments: 'Güvenli Ödeme',
      wishlist: 'Favorilerim',
      cart: 'Mücevher Sepetim',
      account: 'Hesabım'
    },
    announcement: [
      'Tüm Dünyaya Ücretsiz Sigortalı Kargo & VIP Danışmanlık',
      'Aksoy Jewel • Lotus Beach Hotel İçi, Marmaris • Kuruluş 1990',
      'Daima Saf Altın • Akdeniz İmzalı El Yapımı Mücevherler',
      'Mr. Parvin ile Doğrudan WhatsApp İletişimi: +90 535 279 51 76'
    ],
    hero: {
      tagline: 'MARMARİS’TE SEÇKİN MÜCEVHERLER',
      title: 'HİKAYENİZE AİT ZAMANSIZ MÜCEVHERLER',
      subtitle: 'Akdeniz zarafetinin saf altın ve ışıltılı pırlantalarla buluştuğu nokta. Lotus Beach Hotel Marmaris içerisinde 1990’dan bu yana hayat boyu süren anlar için üretildi.',
      ctaShop: 'KOLEKSİYONU KEŞFEDİN',
      ctaVisit: 'MARMARİS MAĞAZAMIZI ZİYARET EDİN',
      ctaStory: 'HİKAYEMİZİ OKUYUN',
      marmarisBadge: 'KURULUŞ 1990 • MARMARİS, TÜRKİYE'
    },
    story: {
      badge: '1990’DAN GÜNÜMÜZE',
      title: 'Hikayemiz',
      heading: 'Otuz Yılı Aşkın Köklü Tecrübe, Ustalık ve Güven',
      p1: 'ALTIN sektöründe daha iyi hizmet verebilmek amacıyla 1990 yılında sektöre adım atan Aksoy Jewel, istikrarlı bir büyüme göstererek 2 sektörde de saygın bir yer edinmiştir.',
      p2: 'Sektördeki gelişmeleri ve pazar yerlerindeki talepleri yakından takip eden firmamız, güçlü yönetimi ve profesyonel kadrosuyla sektörün öncü kuruluşlarından biri olmayı hedeflemektedir.',
      p3: 'Görev ve beklenen hizmetleri yüksek kalite standartlarında yerine getirerek belirli bir seviyeye ulaşan Aksoy Jewel, personelinin tecrübesi ve profesyonelliğiyle kadrosunu geliştirerek strateji ve organizasyonlarını başarıyla yürütmüştür.',
      p4: 'Aksoy Jewel şirket ailesi, tüm projelerinde modern yönetim tekniklerini kullanarak sektörde kendini kanıtlamış ve müşteri odaklı çözümler sunmuştur. Bunları sunmaya ve kendini geliştirmeye devam etmektedir.',
      securityTitle: '256-Bit SSL Şifreli Güvenli Altyapı',
      securityText: 'Sitede yer alan ödeme yöntemleri en güvenli şekilde sunulmakta olup hiçbir yerde saklanmasına izin verilmemektedir. Güvenli ödeme yöntemleri 256-bit SSL ile şifrelenmektedir. Bu şifreleme yöntemi teknik açıdan hiçbir şekilde çözülemez. Sitemiz SSL sertifikası ile korunmaktadır.',
      p5: 'Elde ettiğimiz bu başarının ardında müşteri odaklı ve verimlilik merkezli bir yönetim anlayışı yatmaktadır. Bu yaklaşımın bir sonucu olarak şirketimiz, küresel ölçekte saygı duyulan markalarla iş birliği yaparak kendini sektörde temsil etmektedir.',
      p6: 'Aksoy Jewel yönetim anlayışı, tüm toplumun faydalanacağı kurumsal vatandaşlık bilincini yansıtmaktadır. Gerçekleştirdiği tüm projelerde sorumluluğunun bilincinde olan Aksoy Jewel, toplumda öncü olma amacıyla hareket etmekte ve istihdama katkı sağlamaktadır.',
      partnersTitle: 'Değerli Ortaklarımız ve Yönetim',
      partner1Name: 'Mr. Rashid Aksoy',
      partner1Role: 'Ortak / Kurucu',
      partner2Name: 'Mr. Fatih',
      partner2Role: 'Ortak / Kurucu',
      missionTitle: 'Misyonumuz',
      missionText: 'Misyonumuz, istisnai mücevherler, güvenilir hizmet ve unutulmaz bir müşteri deneyimi sunmaktır. Tecrübemizi, ustalığımızı ve modern sunumumuzu bir araya getirerek her misafirimizin kendine özel anlam taşıyan bir parça keşfetmesini sağlıyoruz.',
      visionTitle: 'Vizyonumuz',
      visionText: 'Marmaris’in en saygın mücevher durağı ve Akdeniz lüksü, güvenilir hizmet ile seçkin mücevher alanında uluslararası ölçekte tanınan bir marka olmak.'
    },
    marmaris: {
      badge: 'AKDENİZ ATMOSFERİ',
      title: 'AKSOY JEWEL × MARMARİS',
      subtitle: 'Lotus Beach Hotel İçi, Marmaris, Muğla',
      hotelLocation: 'Lotus Beach Hotel • Marmaris, Muğla, Türkiye',
      description: 'Turkuaz çam ormanları ile Marmaris Koyu’nun büyüleyici yat limanı arasında, prestijli Lotus Beach Hotel içerisinde yer alan butiğimiz, mücevher tutkunları için eşsiz bir zarafet sığınağıdır.',
      ctaVisit: 'ZİYARETİNİZİ PLANLAYIN',
      contactManager: 'Mr. Parvin ile İletişime Geçin (Müdür & Satış Danışmanı)'
    },
    concierge: {
      title: 'AKSOY JEWEL DANIŞMANLIK',
      subtitle: 'Size özel sıra dışı bir parçayı keşfetmenize nasıl yardımcı olabiliriz?',
      managerName: 'Mr. Parvin',
      managerRole: 'Müdür & Satış Danışmanı',
      tel: '+90 535 279 51 76',
      callNow: 'Hemen Ara',
      whatsappDirect: 'WhatsApp İle Yazın',
      aiTitle: 'Yapay Zeka Mücevher Stilisti',
      aiSubtitle: 'Altın, pırlanta, ölçü rehberi, hediye seçimi ve aktif indirim kodları hakkında anında bilgi alın.',
      askPlaceholder: 'Pırlantalar, saf altın, hediye önerileri veya indirim kodunu sorun...',
      quickPrompts: {
        gift: 'Bana anlamlı bir hediye öner',
        diamonds: 'Pırlanta ve safir parçaları göster',
        budget: 'Bütçeme uygun mücevherleri listele',
        discount: 'Aktif bir indirim kodu var mı?',
        location: 'Marmaris mağazanız tam olarak nerede?',
        contactParvin: 'Beni Mr. Parvin’e bağla'
      }
    },
    cart: {
      title: 'MÜCEVHER SEÇİMİNİZ',
      emptyText: 'Seçiminiz şu anda boş.',
      subtotal: 'Tahmini Ara Toplam',
      discountCode: 'Ayrıcalık / Promosyon Kodu',
      apply: 'Kodu Uygula',
      checkout: 'GÜVENLİ ÖDEMEYE GEÇ',
      freeShippingNotice: 'Tüm dünyaya ücretsiz sigortalı teslimat dahildir.',
      sslNotice: '256-Bit SSL Şifreli Güvenli İşlem Garantisi.'
    },
    filters: {
      allCategories: 'Tüm Kategoriler',
      allMaterials: 'Tüm Değerli Metaller',
      allStones: 'Tüm Değerli Taşlar',
      priceRange: 'Fiyat Aralığı',
      sort: 'Sıralama',
      featured: 'Öne Çıkanlar',
      priceLowHigh: 'Fiyat: Düşükten Yükseğe',
      priceHighLow: 'Fiyat: Yüksekten Düşüğe',
      newest: 'En Yeniler'
    },
    product: {
      addToBag: 'MÜCEVHER SEÇİMİME EKLE',
      addedToBag: 'SEÇİME EKLENDİ',
      selectSize: 'Ölçü Seçin',
      selectColor: 'Değerli Metal Türü',
      carat: 'Karat Ağırlığı',
      material: 'Değerli Metal',
      stone: 'Değerli Taş & Kesim',
      availability: 'Stok Durumu',
      inStock: 'Marmaris Atölyesinden Sevke Hazır',
      handcraftedIn: 'Özel Atölye İmalatı',
      askAiAboutThis: 'Yapay Zeka Stilistine Bu Parçayı Sor',
      whatsappInquire: 'WhatsApp Üzerinden Mr. Parvin’e Sor',
      reviews: 'Müşteri Değerlendirmeleri',
      detailsTitle: 'Zanaat ve Teknik Detaylar',
      solidGoldGuarantee: '%100 Sertifikalı Saf Altın ve Doğal Değerli Taşlar'
    },
    common: {
      viewDetails: 'Detayları İncele',
      quickView: 'Hızlı Bakış',
      readMore: 'Devamını Oku',
      exploreNow: 'Şimdi Keşfet',
      bestSeller: 'ÇOK SATAN',
      new: 'YENİ',
      limited: 'SINIRLI ATÖLYE',
      signature: 'AKSOY İMZASI',
      share: 'Bu Mücevheri Paylaş',
      close: 'Kapat',
      verifiedSSL: '256-Bit SSL Korumalı',
      establishedYear: 'Kuruluş 1990'
    },
    footer: {
      explore: 'Keşfet & Alışveriş',
      about: 'Hakkımızda & Miras',
      services: 'Butik Hizmetleri',
      customerCare: 'Müşteri Hizmetleri & Güvenlik',
      copyright: '© 1990–2026 Aksoy Jewel. Tüm Hakları Saklıdır. Lotus Beach Hotel, Marmaris, Türkiye.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      allJewelry: 'Toda la Joyería',
      newArrivals: 'Novedades',
      bestSellers: 'Más Vendidos',
      collections: 'Colecciones',
      rings: 'Anillos',
      earrings: 'Pendientes',
      necklaces: 'Collares',
      bracelets: 'Pulseras',
      bangles: 'Brazaletes',
      charms: 'Dijes',
      diamonds: 'Diamantes',
      gold: 'Oro Macizo',
      gemstones: 'Gemas Preciosas',
      bridal: 'Bodas y Novias',
      mens: 'Hombre',
      gifts: 'Regalos',
      customized: 'Personalizado',
      ourStory: 'Nuestra Historia',
      mission: 'Nuestra Misión',
      vision: 'Nuestra Visión',
      marmarisExperience: 'Experiencia Marmaris',
      services: 'Tiendas y Servicios',
      consultation: 'Estilismo Privado',
      stores: 'Nuestra Ubicación',
      contact: 'Contacto',
      guides: 'Guías de Joyería',
      faq: 'Preguntas Frecuentes',
      shipping: 'Envíos y Entregas',
      returns: 'Devoluciones',
      securePayments: 'Pagos Seguros',
      wishlist: 'Lista de Deseos',
      cart: 'Bolsa',
      account: 'Cuenta'
    },
    announcement: [
      'Envío Internacional Asegurado de Cortesía y Conserjería VIP',
      'Aksoy Jewel dentro del Lotus Beach Hotel, Marmaris • Fundado en 1990',
      'Siempre Oro Macizo • Alta Joyería Mediterránea Hecha a Mano',
      'WhatsApp Directo con el Sr. Parvin: +90 535 279 51 76'
    ],
    hero: {
      tagline: 'JOYAS PREMIUM EN MARMARIS',
      title: 'JOYAS QUE PERTENECEN A TU HISTORIA',
      subtitle: 'Donde la elegancia mediterránea se encuentra con el oro eterno y los diamantes radiantes. Creado para momentos de por vida en el Lotus Beach Hotel, Marmaris.',
      ctaShop: 'DESCUBRIR LA COLECCIÓN',
      ctaVisit: 'VISITAR AKSOY JEWEL EN MARMARIS',
      ctaStory: 'CONOCER NUESTRA HISTORIA',
      marmarisBadge: 'FUNDADO EN 1990 • MARMARIS, TURQUÍA'
    },
    story: {
      badge: 'DESDE 1990',
      title: 'Nuestra Historia',
      heading: 'Más de Tres Décadas de Patrimonio, Artesanía y Prestigio',
      p1: 'Aksoy Jewel, que se incorporó al sector en 1990 para ofrecer un servicio superior en el sector del ORO, ha alcanzado una posición de prestigio gracias a un crecimiento constante.',
      p2: 'La empresa, atenta a las evoluciones del mercado y la demanda internacional, aspira a liderar el sector con una gestión sólida y personal altamente profesional.',
      p3: 'Cumpliendo con los más altos estándares de excelencia, Aksoy Jewel ha fortalecido sus estrategias y equipo humano con experiencia y rigurosa profesionalidad.',
      p4: 'La familia Aksoy Jewel se ha consolidado en el sector brindando soluciones orientadas al cliente mediante técnicas modernas de gestión.',
      securityTitle: 'Seguridad Cifrada SSL de 256 Bits',
      securityText: 'Los métodos de pago del sitio se presentan de la forma más segura y no se almacenan en ningún lugar. Los métodos seguros están cifrados con SSL de 256 bits, un protocolo indescifrable técnicamente.',
      p5: 'Detrás de este éxito se encuentra una dirección centrada en la productividad y la satisfacción del cliente, colaborando con marcas de prestigio global.',
      p6: 'Nuestra gestión refleja una conciencia de ciudadanía corporativa que beneficia a toda la sociedad, fomentando el empleo y el liderazgo.',
      partnersTitle: 'Nuestros Socios y Dirección',
      partner1Name: 'Sr. Rashid Aksoy',
      partner1Role: 'Socio / Co-Fundador',
      partner2Name: 'Sr. Fatih',
      partner2Role: 'Socio / Co-Fundador',
      missionTitle: 'Nuestra Misión',
      missionText: 'Nuestra misión es ofrecer joyas excepcionales, un servicio de confianza y una experiencia inolvidable. Combinamos experiencia, artesanía y atención personalizada para que cada invitado descubra una joya con significado personal.',
      visionTitle: 'Nuestra Visión',
      visionText: 'Convertirnos en el destino de joyería más respetado de Marmaris y en un referente internacional de lujo mediterráneo y confianza.'
    },
    marmaris: {
      badge: 'EL ENTORNO MEDITERRÁNEO',
      title: 'AKSOY JEWEL × MARMARIS',
      subtitle: 'En el interior de Lotus Beach Hotel, Marmaris',
      hotelLocation: 'Lotus Beach Hotel • Marmaris, Muğla, Turquía',
      description: 'Ubicada entre montañas de pinos turquesas y los elegantes yates de la bahía de Marmaris, nuestra boutique ofrece un refugio exclusivo para los amantes de la alta joyería.',
      ctaVisit: 'PLANIFIQUE SU VISITA',
      contactManager: 'Hable con el Sr. Parvin (Gerente y Consultor de Ventas)'
    },
    concierge: {
      title: 'CONSERJERÍA AKSOY JEWEL',
      subtitle: '¿Cómo podemos ayudarle a descubrir una joya extraordinaria?',
      managerName: 'Sr. Parvin',
      managerRole: 'Gerente y Consultor de Ventas',
      tel: '+90 535 279 51 76',
      callNow: 'Llamar Ahora',
      whatsappDirect: 'Contactar por WhatsApp',
      aiTitle: 'Estilista de Joyas con IA',
      aiSubtitle: 'Respuestas instantáneas sobre oro macizo, diamantes, tallas y códigos de descuento activos.',
      askPlaceholder: 'Pregunte sobre diamantes, oro de 18k o descuentos...',
      quickPrompts: {
        gift: 'Ayúdame a elegir un regalo',
        diamonds: 'Muéstrame piezas de diamantes y zafiros',
        budget: 'Buscar joyas según mi presupuesto',
        discount: '¿Tienen algún código de descuento activo?',
        location: '¿Dónde está ubicada su boutique en Marmaris?',
        contactParvin: 'Conectar con el Sr. Parvin'
      }
    },
    cart: {
      title: 'SU SELECCIÓN DE JOYAS',
      emptyText: 'Su selección está vacía.',
      subtotal: 'Subtotal Estimado',
      discountCode: 'Código Promocional / Privilegio',
      apply: 'Aplicar',
      checkout: 'TRAMITAR PEDIDO SEGURO',
      freeShippingNotice: 'Envío internacional asegurado gratuito incluido.',
      sslNotice: 'Transacción Segura y Cifrada con SSL de 256 Bits.'
    },
    filters: {
      allCategories: 'Todas las Categorías',
      allMaterials: 'Todos los Metales',
      allStones: 'Todas las Gemas',
      priceRange: 'Rango de Precio',
      sort: 'Ordenar por',
      featured: 'Destacados',
      priceLowHigh: 'Precio: Menor a Mayor',
      priceHighLow: 'Precio: Mayor a Menor',
      newest: 'Más Recientes'
    },
    product: {
      addToBag: 'AÑADIR A LA SELECCIÓN',
      addedToBag: 'AÑADIDO A LA SELECCIÓN',
      selectSize: 'Seleccionar Talla',
      selectColor: 'Seleccionar Metal Precioso',
      carat: 'Peso Total en Quilates',
      material: 'Metal Precioso',
      stone: 'Gema Preciosa',
      availability: 'Disponibilidad',
      inStock: 'Listo para envío desde Marmaris',
      handcraftedIn: 'Elaborado en Atelier',
      askAiAboutThis: 'Consultar al Estilista IA',
      whatsappInquire: 'Consultar por WhatsApp con el Sr. Parvin',
      reviews: 'Opiniones de Clientes',
      detailsTitle: 'Especificaciones Artesanales',
      solidGoldGuarantee: '100% Oro Macizo Certificado y Gemas Naturales'
    },
    common: {
      viewDetails: 'Ver Detalles',
      quickView: 'Vista Rápida',
      readMore: 'Leer Más',
      exploreNow: 'Explorar Ahora',
      bestSeller: 'MÁS VENDIDO',
      new: 'NUEVO',
      limited: 'EDICIÓN LIMITADA',
      signature: 'FIRMA AKSOY',
      share: 'Compartir Joya',
      close: 'Cerrar',
      verifiedSSL: 'Protegido por SSL de 256 Bits',
      establishedYear: 'Est. 1990'
    },
    footer: {
      explore: 'Explorar & Comprar',
      about: 'Sobre Nosotros & Herencia',
      services: 'Servicios de Boutique',
      customerCare: 'Atención al Cliente & Seguridad',
      copyright: '© 1990–2026 Aksoy Jewel. Todos los derechos reservados. Lotus Beach Hotel, Marmaris, Turquía.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      allJewelry: 'Alle Schmuckstücke',
      newArrivals: 'Neuheiten',
      bestSellers: 'Bestseller',
      collections: 'Kollektionen',
      rings: 'Ringe',
      earrings: 'Ohrringe',
      necklaces: 'Halsketten',
      bracelets: 'Armbänder',
      bangles: 'Armreifen',
      charms: 'Charms & Anhänger',
      diamonds: 'Diamanten',
      gold: 'Echtes Gold',
      gemstones: 'Edelsteine',
      bridal: 'Brautschmuck & Trauringe',
      mens: 'Herren',
      gifts: 'Geschenke',
      customized: 'Personalisiert',
      ourStory: 'Unsere Geschichte',
      mission: 'Unsere Mission',
      vision: 'Unsere Vision',
      marmarisExperience: 'Marmaris Erlebnis',
      services: 'Services & Boutique',
      consultation: 'Private Beratung',
      stores: 'Standort',
      contact: 'Kontakt',
      guides: 'Schmuck-Ratgeber',
      faq: 'Häufige Fragen',
      shipping: 'Versand & Lieferung',
      returns: 'Rückgabe & Umtausch',
      securePayments: 'Sichere Bezahlung',
      wishlist: 'Wunschliste',
      cart: 'Auswahl',
      account: 'Konto'
    },
    announcement: [
      'Kostenloser versicherter weltweiter Versand & VIP-Concierge',
      'Aksoy Jewel im Lotus Beach Hotel, Marmaris • Gegründet 1990',
      'Immer Massivgold • Handgefertigter mediterraner Feinschmuck',
      'Direkter WhatsApp-Kontakt mit Herrn Parvin: +90 535 279 51 76'
    ],
    hero: {
      tagline: 'PREMIUM-SCHMUCK IN MARMARIS',
      title: 'SCHMUCK, DER ZU IHRER GESCHICHTE GEHÖRT',
      subtitle: 'Wo mediterrane Eleganz auf zeitloses Gold und strahlende Diamanten trifft. Handgefertigt im Lotus Beach Hotel, Marmaris seit 1990.',
      ctaShop: 'KOLLEKTION ENTDECKEN',
      ctaVisit: 'AKSOY JEWEL IN MARMARIS BESUCHEN',
      ctaStory: 'UNSERE GESCHICHTE',
      marmarisBadge: 'GEGRÜNDET 1990 • MARMARIS, TÜRKEI'
    },
    story: {
      badge: 'SEIT 1990',
      title: 'Unsere Geschichte',
      heading: 'Über drei Jahrzehnte Tradition, Handwerkskunst und Exzellenz',
      p1: 'Aksoy Jewel trat 1990 in den Markt ein, um exzellenten Service im GOLDBEREICH zu bieten, und hat sich durch stetiges Wachstum einen angesehenen Platz erarbeitet.',
      p2: 'Das Unternehmen folgt den Entwicklungen und Marktanforderungen und strebt an, mit starker Führung und professionellem Team zu den Spitzenunternehmen der Branche zu gehören.',
      p3: 'Mit höchster Qualität und professioneller Kompetenz hat Aksoy Jewel seine Organisationen kontinuierlich ausgebaut.',
      p4: 'Aksoy Jewel nutzt moderne Managementtechniken, um kundenorientierte Lösungen zu bieten und sich stetig weiterzuentwickeln.',
      securityTitle: '256-Bit SSL-Verschlüsselte Sicherheit',
      securityText: 'Die Zahlungsmethoden auf der Website werden auf sicherste Weise angeboten und nirgends ungesichert gespeichert. Sichere Zahlungsmethoden sind mit 256-Bit SSL verschlüsselt.',
      p5: 'Hinter diesem Erfolg steht ein kundenorientiertes Management, das mit weltweit angesehenen Marken kooperiert.',
      p6: 'Aksoy Jewel übernimmt soziale Verantwortung als Unternehmensbürger und trägt zur Schaffung von Arbeitsplätzen bei.',
      partnersTitle: 'Unsere Partner & Geschäftsleitung',
      partner1Name: 'Herr Rashid Aksoy',
      partner1Role: 'Partner / Mitgründer',
      partner2Name: 'Herr Fatih',
      partner2Role: 'Partner / Mitgründer',
      missionTitle: 'Unsere Mission',
      missionText: 'Unsere Mission ist es, außergewöhnlichen Schmuck, verlässlichen Service und ein unvergessliches Kundenerlebnis zu bieten.',
      visionTitle: 'Unsere Vision',
      visionText: 'Das angesehenste Schmuckziel in Marmaris und ein international geschätzter Name für Feinschmuck und mediterranen Luxus zu sein.'
    },
    marmaris: {
      badge: 'DAS MEDITERRANE FLAIR',
      title: 'AKSOY JEWEL × MARMARIS',
      subtitle: 'Im Lotus Beach Hotel, Marmaris, Muğla',
      hotelLocation: 'Lotus Beach Hotel • Marmaris, Muğla, Türkei',
      description: 'Eingebettet zwischen türkisfarbenen Pinienwäldern und den edlen Yachten der Bucht von Marmaris bietet unsere Boutique im renommierten Lotus Beach Hotel ein exklusives Refugium für Feinschmuck.',
      ctaVisit: 'BESUCH PLANEN',
      contactManager: 'Kontaktieren Sie Herrn Parvin (Geschäftsführer & Berater)'
    },
    concierge: {
      title: 'AKSOY JEWEL CONCIERGE',
      subtitle: 'Wie dürfen wir Ihnen helfen, ein außergewöhnliches Schmuckstück zu finden?',
      managerName: 'Herr Parvin',
      managerRole: 'Geschäftsführer & Verkaufsberater',
      tel: '+90 535 279 51 76',
      callNow: 'Jetzt Anrufen',
      whatsappDirect: 'WhatsApp Concierge',
      aiTitle: 'KI-Schmuckberater',
      aiSubtitle: 'Sofortige Antworten zu Gold, Diamanten, Größen und Rabattcodes.',
      askPlaceholder: 'Fragen Sie nach Diamanten, Gold, Geschenken oder Gutscheincodes...',
      quickPrompts: {
        gift: 'Empfehlen Sie mir ein besonderes Geschenk',
        diamonds: 'Zeigen Sie Diamant- und Saphir-Schmuck',
        budget: 'Schmuckstücke nach meinem Budget suchen',
        discount: 'Gibt es einen aktiven Rabattcode?',
        location: 'Wo befindet sich Ihre Boutique in Marmaris?',
        contactParvin: 'Mit Herrn Parvin verbinden'
      }
    },
    cart: {
      title: 'IHRE SCHMUCKAUSWAHL',
      emptyText: 'Ihre Auswahl ist derzeit leer.',
      subtotal: 'Geschätzte Zwischensumme',
      discountCode: 'Gutschein- / Rabattcode',
      apply: 'Einlösen',
      checkout: 'ZUR SICHEREN KASSE',
      freeShippingNotice: 'Inklusive kostenlosem, versichertem Versand weltweit.',
      sslNotice: 'Garantiert 256-Bit SSL-verschlüsselte Transaktion.'
    },
    filters: {
      allCategories: 'Alle Kategorien',
      allMaterials: 'Alle Edelmetalle',
      allStones: 'Alle Edelsteine',
      priceRange: 'Preisspanne',
      sort: 'Sortieren nach',
      featured: 'Empfehlungen',
      priceLowHigh: 'Preis: Aufsteigend',
      priceHighLow: 'Preis: Absteigend',
      newest: 'Neuheiten'
    },
    product: {
      addToBag: 'ZUR AUSWAHL HINZUFÜGEN',
      addedToBag: 'ZUR AUSWAHL HINZUGEFÜGT',
      selectSize: 'Größe wählen',
      selectColor: 'Edelmetall wählen',
      carat: 'Karatgewicht',
      material: 'Edelmetall',
      stone: 'Edelstein & Schliff',
      availability: 'Verfügbarkeit',
      inStock: 'Versandbereit ab Marmaris',
      handcraftedIn: 'Handgefertigt im Atelier',
      askAiAboutThis: 'KI-Berater zu diesem Stück befragen',
      whatsappInquire: 'Per WhatsApp bei Herrn Parvin anfragen',
      reviews: 'Kundenbewertungen',
      detailsTitle: 'Handwerkliche Details',
      solidGoldGuarantee: '100% zertifiziertes Massivgold & konfliktfreie Edelsteine'
    },
    common: {
      viewDetails: 'Details ansehen',
      quickView: 'Schnellansicht',
      readMore: 'Weiterlesen',
      exploreNow: 'Jetzt Entdecken',
      bestSeller: 'BESTSELLER',
      new: 'NEU',
      limited: 'LIMITIERT',
      signature: 'AKSOY SIGNATUR',
      share: 'Teilen',
      close: 'Schließen',
      verifiedSSL: '256-Bit SSL-geschützt',
      establishedYear: 'Gegr. 1990'
    },
    footer: {
      explore: 'Entdecken & Shoppen',
      about: 'Über Uns & Tradition',
      services: 'Boutique-Services',
      customerCare: 'Kundenservice & Sicherheit',
      copyright: '© 1990–2026 Aksoy Jewel. Alle Rechte vorbehalten. Lotus Beach Hotel, Marmaris, Türkei.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      allJewelry: 'Все Украшения',
      newArrivals: 'Новинки',
      bestSellers: 'Бестселлеры',
      collections: 'Коллекции',
      rings: 'Кольца',
      earrings: 'Серьги',
      necklaces: 'Колье и Цепи',
      bracelets: 'Браслеты',
      bangles: 'Жесткие Браслеты',
      charms: 'Шармы и Подвески',
      diamonds: 'Бриллианты',
      gold: 'Чистое Золото',
      gemstones: 'Драгоценные Камни',
      bridal: 'Свадебная Коллекция',
      mens: 'Мужская Коллекция',
      gifts: 'Подарки',
      customized: 'Индивидуальный Заказ',
      ourStory: 'Наша История',
      mission: 'Наша Миссия',
      vision: 'Наше Видение',
      marmarisExperience: 'Атмосфера Мармариса',
      services: 'Бутик и Услуги',
      consultation: 'Персональный Стилист',
      stores: 'Наше Расположение',
      contact: 'Контакты',
      guides: 'Ювелирный Гид',
      faq: 'Частые Вопросы',
      shipping: 'Доставка и Страхование',
      returns: 'Возврат и Обмен',
      securePayments: 'Безопасные Платежи',
      wishlist: 'Избранное',
      cart: 'Корзина',
      account: 'Личный Кабинет'
    },
    announcement: [
      'Бесплатная застрахованная доставка по всему миру и VIP-консьерж',
      'Aksoy Jewel в отеле Lotus Beach Hotel, Мармарис • Основан в 1990 году',
      'Только массивное золото • Средиземноморские ювелирные шедевры',
      'Прямой контакт в WhatsApp с г-ном Парвином: +90 535 279 51 76'
    ],
    hero: {
      tagline: 'ПРЕМИАЛЬНЫЕ ЮВЕЛИРНЫЕ ИЗДЕЛИЯ В МАРМАРИСЕ',
      title: 'УКРАШЕНИЯ, КОТОРЫЕ СТАНОВЯТСЯ ВАШЕЙ ИСТОРИЕЙ',
      subtitle: 'Где средиземноморская элегантность соединяется с вечным золотом и сияющими бриллиантами. Создано для драгоценных моментов в Lotus Beach Hotel, Мармарис.',
      ctaShop: 'ОТКРЫТЬ КОЛЛЕКЦИЮ',
      ctaVisit: 'ПОСЕТИТЬ НАШ БУТИК В МАРМАРИСЕ',
      ctaStory: 'НАША ИСТОРИЯ',
      marmarisBadge: 'ОСНОВАНО В 1990 ГОДУ • МАРМАРИС, ТУРЦИЯ'
    },
    story: {
      badge: 'С 1990 ГОДА',
      title: 'Наша История',
      heading: 'Более трех десятилетий мастерства, наследия и безупречной репутации',
      p1: 'Компания Aksoy Jewel, начавшая свою деятельность в 1990 году для предоставления услуг высочайшего уровня в ЗОЛОТОМ секторе, добилась авторитетного положения благодаря стабильному росту.',
      p2: 'Компания внимательно следит за мировыми тенденциями и стремится быть лидером отрасли благодаря сильному руководству и профессиональной команде.',
      p3: 'Выполняя задачи на высочайшем уровне качества, Aksoy Jewel успешно развивает квалификацию персонала и реализует международные стратегии.',
      p4: 'Семья Aksoy Jewel доказала свой профессионализм, предлагая индивидуальные решения и современные методы управления.',
      securityTitle: 'Безопасность с 256-битным SSL-шифрованием',
      securityText: 'Способы оплаты на сайте представлены в максимально защищенном виде и нигде не сохраняются. Платежи защищены 256-битным SSL-шифрованием, технически исключающим возможность расшифровки.',
      p5: 'За нашим успехом стоит клиентоориентированный подход и сотрудничество с всемирно признанными брендами.',
      p6: 'Aksoy Jewel осознает свою корпоративную ответственность перед обществом и вносит значительный вклад в развитие занятости.',
      partnersTitle: 'Наши Уважаемые Партнеры',
      partner1Name: 'Г-н Рашид Аксой (Mr. Rashid Aksoy)',
      partner1Role: 'Партнер / Сооснователь',
      partner2Name: 'Г-н Фатих (Mr. Fatih)',
      partner2Role: 'Партнер / Сооснователь',
      missionTitle: 'Наша Миссия',
      missionText: 'Наша миссия — предлагать исключительные ювелирные изделия, доверительный сервис и незабываемый клиентский опыт.',
      visionTitle: 'Наше Видение',
      visionText: 'Быть самым уважаемым ювелирным пространством Мармариса и признанным мировым именем средиземноморской роскоши.'
    },
    marmaris: {
      badge: 'СРЕДИЗЕМНОМОРСКИЙ СТИЛЬ',
      title: 'AKSOY JEWEL × МАРМАРИС',
      subtitle: 'В отеле Lotus Beach Hotel, Мармарис, Мугла',
      hotelLocation: 'Lotus Beach Hotel • Мармарис, Мугла, Турция',
      description: 'Среди бирюзовых сосновых гор и белоснежных яхт залива Мармарис наш бутик в престижном Lotus Beach Hotel предлагает уединенную атмосферу для ценителей высокой ювелирной моды.',
      ctaVisit: 'ЗАПЛАНИРОВАТЬ ВИЗИТ',
      contactManager: 'Связаться с г-ном Парвином (Управляющий и консультант)'
    },
    concierge: {
      title: 'КОНСЬЕРЖ-СЛУЖБА AKSOY JEWEL',
      subtitle: 'Как мы можем помочь вам найти нечто по-настоящему особенное?',
      managerName: 'Г-н Парвин (Mr. Parvin)',
      managerRole: 'Управляющий и Главный Консультант',
      tel: '+90 535 279 51 76',
      callNow: 'Позвонить',
      whatsappDirect: 'Написать в WhatsApp',
      aiTitle: 'ИИ Ювелирный Стилист',
      aiSubtitle: 'Мгновенные ответы по золоту, бриллиантам, размерам и действующим промокодам.',
      askPlaceholder: 'Спросите о бриллиантах, золоте, подарках или скидках...',
      quickPrompts: {
        gift: 'Помогите выбрать подарок',
        diamonds: 'Покажите украшения с бриллиантами и сапфирами',
        budget: 'Подобрать изделия по моему бюджету',
        discount: 'Есть ли действующий промокод на скидку?',
        location: 'Где именно вы находитесь в Мармарисе?',
        contactParvin: 'Связать меня с г-ном Парвином'
      }
    },
    cart: {
      title: 'ВАША ЮВЕЛИРНАЯ ВЫБОРКА',
      emptyText: 'Ваша корзина пуста.',
      subtotal: 'Предварительный итог',
      discountCode: 'Промокод / Привилегия',
      apply: 'Применить',
      checkout: 'ПЕРЕЙТИ К ОПЛАТЕ',
      freeShippingNotice: 'Включена бесплатная застрахованная доставка по миру.',
      sslNotice: 'Гарантированная безопасность с 256-битным SSL-шифрованием.'
    },
    filters: {
      allCategories: 'Все Категории',
      allMaterials: 'Все Металлы',
      allStones: 'Все Камни',
      priceRange: 'Ценовой Диапазон',
      sort: 'Сортировка',
      featured: 'Рекомендуемые',
      priceLowHigh: 'По возрастанию цены',
      priceHighLow: 'По убыванию цены',
      newest: 'Новые поступления'
    },
    product: {
      addToBag: 'ДОБАВИТЬ В ВЫБОРКУ',
      addedToBag: 'ДОБАВЛЕНО',
      selectSize: 'Выберите размер',
      selectColor: 'Выберите драгоценный металл',
      carat: 'Общий вес в каратах',
      material: 'Драгоценный металл',
      stone: 'Камень и огранка',
      availability: 'Наличие',
      inStock: 'Готово к отправке из Мармариса',
      handcraftedIn: 'Ручная работа ателье',
      askAiAboutThis: 'Спросить ИИ-стилиста об этом изделии',
      whatsappInquire: 'Уточнить в WhatsApp у г-на Парвина',
      reviews: 'Отзывы клиентов',
      detailsTitle: 'Характеристики и спецификация',
      solidGoldGuarantee: '100% сертифицированное золото и натуральные камни'
    },
    common: {
      viewDetails: 'Подробнее',
      quickView: 'Быстрый просмотр',
      readMore: 'Читать далее',
      exploreNow: 'Смотреть',
      bestSeller: 'ХИТ ПРОДАЖ',
      new: 'НОВИНКА',
      limited: 'ЛИМИТИРОВАНО',
      signature: 'СИГНАТУРА AKSOY',
      share: 'Поделиться',
      close: 'Закрыть',
      verifiedSSL: 'Защита SSL 256 бит',
      establishedYear: 'Осн. 1990'
    },
    footer: {
      explore: 'Коллекции и Каталог',
      about: 'О нас и История',
      services: 'Услуги бутика',
      customerCare: 'Клиентский сервис и безопасность',
      copyright: '© 1990–2026 Aksoy Jewel. Все права защищены. Lotus Beach Hotel, Мармарис, Турция.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      allJewelry: 'جميع المجوهرات',
      newArrivals: 'وصل حديثاً',
      bestSellers: 'الأكثر طلباً',
      collections: 'المجموعات الفاخرة',
      rings: 'الخواتم',
      earrings: 'الأقراط',
      necklaces: 'القلائد والعقود',
      bracelets: 'الأساور',
      bangles: 'الأساور الصلبة',
      charms: 'التعليقات',
      diamonds: 'الألماس',
      gold: 'الذهب الخالص',
      gemstones: 'الأحجار الكريمة',
      bridal: 'مجوهرات الزفاف',
      mens: 'الرجالية',
      gifts: 'الهدايا',
      customized: 'تصميم خاص',
      ourStory: 'قصتنا',
      mission: 'رسالتنا',
      vision: 'رؤيتنا',
      marmarisExperience: 'تجربة مارماريس',
      services: 'المتاجر والخدمات',
      consultation: 'استشارة خاصة',
      stores: 'موقعنا',
      contact: 'اتصل بنا',
      guides: 'دليل المجوهرات',
      faq: 'الأسئلة الشائعة',
      shipping: 'الشحن والتوصيل',
      returns: 'الإرجاع والاستبدال',
      securePayments: 'الدفع الآمن',
      wishlist: 'المفضلة',
      cart: 'حقيبة التسوق',
      account: 'حسابي'
    },
    announcement: [
      'شحن دولي مؤمّن مجاني وخدمة كونسيرج كبار الشخصيات',
      'أكسوي جول في فندق لوتس بيتش، مارماريس • تأسست عام 1990',
      'ذهب خالص دائماً • مجوهرات متوسطية فاخرة مصنوعة يدوياً',
      'تواصل مباشر عبر الواتساب مع السيد برفين: 76 51 279 535 90+'
    ],
    hero: {
      tagline: 'مجوهرات فاخرة في مارماريس',
      title: 'مجوهرات تنبض بفرادة قصتك',
      subtitle: 'حيث تلتقي أناقة البحر الأبيض المتوسط بالذهب الخالص والألماس المتألق. مصاغة للحظات تدوم مدى الحياة داخل فندق لوتس بيتش، مارماريس.',
      ctaShop: 'استكشف المجموعة',
      ctaVisit: 'زيارة متجرنا في مارماريس',
      ctaStory: 'تعرف على قصتنا',
      marmarisBadge: 'تأسست عام 1990 • مارماريس، تركيا'
    },
    story: {
      badge: 'منذ عام 1990',
      title: 'قصتنا',
      heading: 'أكثر من ثلاثة عقود من الأصالة والحرفية والتميز الرفيع',
      p1: 'انطلقت مجوهرات أكسوي (Aksoy Jewel) في عام 1990 لتقديم خدمات استثنائية في قطاع الذهب، وحققت مكانة مرموقة من خلال نمو مستدام وثابت.',
      p2: 'تتابع الشركة تطورات السوق واحتياجاته، وتطمح إلى ترسيخ ريادتها بإدارتها الحكيمة وفريقها المتخصص ذو الخبرة العالية.',
      p3: 'من خلال تقديم خدمات راقية بأعلى معايير الجودة العالمية، نجحت أكسوي جول في تنفيذ استراتيجيات طموحة وتطوير كوادرها المهنية.',
      p4: 'أثبتت عائلة أكسوي جول كفاءتها العالية عبر تقديم حلول متميزة ترتكز على إرضاء العميل واعتماد أحدث أساليب الإدارة العصرية.',
      securityTitle: 'حماية وأمان مشفر بتشفير 256-Bit SSL',
      securityText: 'طرق الدفع المعروضة على الموقع محمية بأعلى مستويات الأمان التام ولا يتم تخزين أي بيانات في أي مكان. عمليات الدفع مشفرة بنظام 256-bit SSL غير القابل للاختراق تقنياً.',
      p5: 'يقف وراء هذا النجاح إدارة متميزة تركز على خدمة العملاء والإنتاجية، مما أثمر عن شراكات موثوقة مع أرقى العلامات التجارية العالمية.',
      p6: 'تعكس إدارة أكسوي جول مفهوم المواطنة المؤسسية المسؤولة، وتساهم بفاعلية في دفع عجلة التوظيف ودعم المجتمع.',
      partnersTitle: 'شركاؤنا المؤسسون وإدارتنا',
      partner1Name: 'السيد رشيد أكسوي (Mr. Rashid Aksoy)',
      partner1Role: 'شريك / مؤسس',
      partner2Name: 'السيد فاتح (Mr. Fatih)',
      partner2Role: 'شريك / مؤسس',
      missionTitle: 'رسالتنا',
      missionText: 'رسالتنا هي تقديم مجوهرات استثنائية وخدمة موثوقة وتجربة لا تُنسى لضيوفنا، لنساعد كل زائر في اقتناء قطعة ذات قيمة شخصية خالدة.',
      visionTitle: 'رؤيتنا',
      visionText: 'أن نكون الوجهة الأكثر تميزاً للمجوهرات في مارماريس واسماً عالمياً معروفاً بالذهب الخالص والفخامة المتوسطية.'
    },
    marmaris: {
      badge: 'أجواء البحر الأبيض المتوسط',
      title: 'مجوهرات أكسوي × مارماريس',
      subtitle: 'داخل فندق لوتس بيتش، مارماريس، موغلا',
      hotelLocation: 'فندق لوتس بيتش • مارماريس، موغلا، تركيا',
      description: 'بين جبال الصنوبر الخضراء ومياه خليج مارماريس الفيروزية، يقدم بوتيكنا داخل فندق لوتس بيتش الشهير ملاذاً فاخراً لعشاق المجوهرات الراقية.',
      ctaVisit: 'خطط لزيارتك',
      contactManager: 'تحدث مع السيد برفين (المدير ومستشار المبيعات)'
    },
    concierge: {
      title: 'كونسيرج مجوهرات أكسوي',
      subtitle: 'كيف يمكننا مساعدتك في اكتشاف مجوهراتك الاستثنائية؟',
      managerName: 'السيد برفين (Mr. Parvin)',
      managerRole: 'المدير ومستشار المبيعات',
      tel: '+90 535 279 51 76',
      callNow: 'اتصال مباشر',
      whatsappDirect: 'محادثة عبر الواتساب',
      aiTitle: 'مستشار الذكاء الاصطناعي',
      aiSubtitle: 'إجابات فورية حول الذهب الخالص والألماس والمقاسات ورموز الخصم المعتمدة.',
      askPlaceholder: 'اسأل عن الألماس، الذهب عيار 18، هدايا الميزانية، أو كود الخصم...',
      quickPrompts: {
        gift: 'اقترح عليّ هدية راقية ومميزة',
        diamonds: 'اعرض مجوهرات الألماس والياقوت الأزرق',
        budget: 'ابحث عن قطع تناسب ميزانيتي',
        discount: 'هل يتوفر كود خصم نشط حالياً؟',
        location: 'أين يقع متجركم في مارماريس؟',
        contactParvin: 'تواصل مباشرة مع السيد برفين'
      }
    },
    cart: {
      title: 'مختاراتك من المجوهرات',
      emptyText: 'قائمة اختيارك فارغة حالياً.',
      subtotal: 'المجموع التقديري',
      discountCode: 'رمز الخصم / الامتياز',
      apply: 'تطبيق الرمز',
      checkout: 'الانتقال إلى الدفع الآمن',
      freeShippingNotice: 'شحن دولي مؤمّن ومجاني متضمن.',
      sslNotice: 'معاملة مالية مشفرة ومحمية بنظام SSL 256-Bit.'
    },
    filters: {
      allCategories: 'جميع الفئات',
      allMaterials: 'جميع المعادن الثمينة',
      allStones: 'جميع الأحجار الكريمة',
      priceRange: 'نطاق السعر',
      sort: 'ترتيب حسب',
      featured: 'المختارات المميزة',
      priceLowHigh: 'السعر: من الأقل للأعلى',
      priceHighLow: 'السعر: من الأعلى للأقل',
      newest: 'أحدث التشكيلات'
    },
    product: {
      addToBag: 'إضافة إلى مختارات المجوهرات',
      addedToBag: 'تمت الإضافة بنجاح',
      selectSize: 'اختر المقاس',
      selectColor: 'اختر نوع المعدن الثمين',
      carat: 'الوزن بالقيراط',
      material: 'المعدن الثمين',
      stone: 'الحجر الكريم والقطع',
      availability: 'التوفر',
      inStock: 'جاهز للشحن الفوري من مارماريس',
      handcraftedIn: 'صياغة يدوية في أتليه مارماريس',
      askAiAboutThis: 'استشر المستشار الذكي حول هذه القطعة',
      whatsappInquire: 'استفسر عبر الواتساب مع السيد برفين',
      reviews: 'تقييمات العملاء',
      detailsTitle: 'المواصفات الحرفية الدقيقة',
      solidGoldGuarantee: 'ذهب خالص 100% معتمد وأحجار كريمة طبيعية خالية من النزاعات'
    },
    common: {
      viewDetails: 'عرض التفاصيل',
      quickView: 'نظرة سريعة',
      readMore: 'اقرأ المزيد',
      exploreNow: 'استكشف الآن',
      bestSeller: 'الأكثر مبيعاً',
      new: 'جديد',
      limited: 'إصدار محدود',
      signature: 'توقيع أكسوي',
      share: 'مشاركة القطعة',
      close: 'إغلاق',
      verifiedSSL: 'محمي بتشفير 256-Bit SSL',
      establishedYear: 'تأسست 1990'
    },
    footer: {
      explore: 'استكشف وتسوق',
      about: 'عن أكسوي وتراثنا',
      services: 'خدمات البوتيك',
      customerCare: 'خدمة العملاء والأمان',
      copyright: '© 1990–2026 مجوهرات أكسوي. جميع الحقوق محفوظة. فندق لوتس بيتش، مارماريس، تركيا.'
    }
  },
  fa: {
    nav: {
      home: 'صفحه اصلی',
      allJewelry: 'تمام جواهرات',
      newArrivals: 'تازه‌ترین‌ها',
      bestSellers: 'محبوب‌ترین‌ها',
      collections: 'مجموعه‌ها',
      rings: 'انگشترها',
      earrings: 'گوشواره‌ها',
      necklaces: 'گردنبندها و آویزها',
      bracelets: 'دستبندها',
      bangles: 'النگوهای مدرن',
      charms: 'پلاک‌ها و چارم',
      diamonds: 'الماس و برلیان',
      gold: 'طلای خالص',
      gemstones: 'سنگ‌های قیمتی',
      bridal: 'جواهرات عروس و ازدواج',
      mens: 'مجموعه آقایان',
      gifts: 'هدایا',
      customized: 'سفارشی‌سازی',
      ourStory: 'داستان ما',
      mission: 'ماموریت ما',
      vision: 'چشم‌انداز ما',
      marmarisExperience: 'تجربه مارماریس',
      services: 'فروشگاه و خدمات',
      consultation: 'مشاوره اختصاصی استایل',
      stores: 'موقعیت ما',
      contact: 'تماس با ما',
      guides: 'راهنمای جواهرات',
      faq: 'پرسش‌های متداول',
      shipping: 'ارسال و تحویل',
      returns: 'مرجوعی و تعویض',
      securePayments: 'پرداخت امن',
      wishlist: 'علاقه‌مندی‌ها',
      cart: 'کیف خرید',
      account: 'حساب کاربری'
    },
    announcement: [
      'ارسال رایگان بیمه‌شده به سراسر جهان و خدمات کانسیرژ VIP',
      'جواهرات آکسوی در هتل لوتوس بیچ، مارماریس • تاسیس ۱۹۹۰',
      'همیشه طلای خالص • دست‌ساز با ظرافت مدیترانه‌ای',
      'ارتباط مستقیم واتساپ با آقای پروین: 76 51 279 535 90+'
    ],
    hero: {
      tagline: 'جواهرات فاخر و اصیل در مارماریس',
      title: 'جواهراتی که به داستان زندگی شما تعلق دارند',
      subtitle: 'جایی که زیبایی مدیترانه با طلای ناب و الماس‌های درخشان پیوند می‌خورد. ساخته شده برای لحظات ماندگار در هتل لوتوس بیچ، مارماریس.',
      ctaShop: 'کشف مجموعه',
      ctaVisit: 'بازدید از بوتیک مارماریس',
      ctaStory: 'داستان ما',
      marmarisBadge: 'تاسیس ۱۹۹۰ • مارماریس، ترکیه'
    },
    story: {
      badge: 'از سال ۱۹۹۰',
      title: 'داستان ما',
      heading: 'بیش از سه دهه اصالت، هنر دست و اعتبار پایدار',
      p1: 'جواهرات آکسوی (Aksoy Jewel) که در سال ۱۹۹۰ با هدف ارائه برترین خدمات در صنعت طلا آغاز به کار کرد، با رشدی مستمر به جایگاهی ممتاز و معتبر دست یافته است.',
      p2: 'این شرکت با پیگیری دقیق تحولات بازار و تقاضای مشتریان، همواره در پی پیشگامی با مدیریت توانمند و کادری متخصص بوده است.',
      p3: 'با ارائه خدمات مطابق بالاترین استانداردهای کیفی، آکسوی جول کادر حرفه‌ای خود را ارتقا بخشیده و استراتژی‌های بین‌المللی موفقی را اجرا نموده است.',
      p4: 'خانواده آکسوی جول با بهره‌گیری از متدهای مدرن مدیریتی، راه‌حل‌های مشتری‌محور ارائه داده و پیوسته در حال ارتقای خدمات خویش است.',
      securityTitle: 'امنیت با رمزنگاری پیشرفته 256-Bit SSL',
      securityText: 'تمامی درگاه‌های پرداخت به امن‌ترین شکل ممکن ارائه شده و هیچ‌گونه اطلاعاتی ذخیره نمی‌شود. تراکنش‌ها با پروتکل رمزنگاری ۲۵۶ بیتی SSL محافظت می‌شوند.',
      p5: 'در پس این موفقیت، مدیریتی مشتری‌مدار و بهره‌ور قرار دارد که نتیجه آن همکاری با برندهای معتبر جهانی است.',
      p6: 'رویکرد مدیریتی آکسوی جول بازتاب‌دهنده مسئولیت اجتماعی سازمانی است و نقش موثری در کارآفرینی و پیشرفت جامعه ایفا می‌کند.',
      partnersTitle: 'شرکا و هیئت موسس گرامی',
      partner1Name: 'جناب آقای رشید آکسوی (Mr. Rashid Aksoy)',
      partner1Role: 'شریک و هم‌بنیانگذار',
      partner2Name: 'جناب آقای فاتح (Mr. Fatih)',
      partner2Role: 'شریک و هم‌بنیانگذار',
      missionTitle: 'ماموریت ما',
      missionText: 'ماموریت ما ارائه جواهراتی بی‌نظیر، خدماتی قابل اعتماد و تجربه‌ای فراموش‌نشدنی است تا هر میهمان قطعه‌ای سرشار از معنای ماندگار را انتخاب نماید.',
      visionTitle: 'چشم‌انداز ما',
      visionText: 'تبدیل شدن به معتبرترین مقصد جواهرات در مارماریس و نامی شناخته‌شده در سطح بین‌المللی برای طلای ناب و لوکس مدیترانه‌ای.'
    },
    marmaris: {
      badge: 'جلوه مدیترانه‌ای',
      title: 'جواهرات آکسوی × مارماریس',
      subtitle: 'واقع در هتل لوتوس بیچ، مارماریس، موغلا',
      hotelLocation: 'هتل لوتوس بیچ • مارماریس، موغلا، ترکیه',
      description: 'میان کوه‌های سرسبز کاج و قایق‌های مجلل خلیج مارماریس، بوتیک ما در هتل لوتوس بیچ فضایی رویایی و اختصاصی را برای دوستداران جواهرات فاخر فراهم آورده است.',
      ctaVisit: 'برنامه‌ریزی بازدید',
      contactManager: 'گفتگو با آقای پروین (مدیر و مشاور فروش)'
    },
    concierge: {
      title: 'کانسیرژ جواهرات آکسوی',
      subtitle: 'چگونه می‌توانیم شما را در انتخاب جواهری خارق‌العاده راهنمایی کنیم؟',
      managerName: 'جناب آقای پروین (Mr. Parvin)',
      managerRole: 'مدیر و مشاور ارشد فروش',
      tel: '+90 535 279 51 76',
      callNow: 'تماس مستقیم',
      whatsappDirect: 'گفتگو در واتساپ',
      aiTitle: 'مشاور استایل هوش مصنوعی',
      aiSubtitle: 'پاسخ فوری درباره طلای خالص، الماس‌ها، اندازه‌گیری و کدهای تخفیف معتبر.',
      askPlaceholder: 'درباره الماس، طلای ۱۸ عیار، هدیه یا کد تخفیف سوال بپرسید...',
      quickPrompts: {
        gift: 'یک هدیه باارزش به من پیشنهاد دهید',
        diamonds: 'جواهرات الماس و یاقوت کبود را نشان دهید',
        budget: 'یافتن جواهرات متناسب با بودجه من',
        discount: 'آیا کد تخفیف فعالی وجود دارد؟',
        location: 'بوتیک شما در مارماریس کجاست؟',
        contactParvin: 'اتصال مستقیم به آقای پروین'
      }
    },
    cart: {
      title: 'انتخاب جواهرات شما',
      emptyText: 'سبد انتخاب شما در حال حاضر خالی است.',
      subtotal: 'جمع تخمینی',
      discountCode: 'کد تخفیف / امتیاز ویژه',
      apply: 'اعمال کد',
      checkout: 'ادامه جهت پرداخت امن',
      freeShippingNotice: 'شامل ارسال رایگان و بیمه‌شده بین‌المللی.',
      sslNotice: 'تراکنش امن با گواهی معتبر SSL ۲۵۶ بیتی.'
    },
    filters: {
      allCategories: 'تمام دسته‌ها',
      allMaterials: 'تمام فلزات گرانبها',
      allStones: 'تمام سنگ‌های قیمتی',
      priceRange: 'محدوده قیمت',
      sort: 'مرتب‌سازی',
      featured: 'برگزیده‌ها',
      priceLowHigh: 'قیمت: از کم به زیاد',
      priceHighLow: 'قیمت: از زیاد به کم',
      newest: 'جدیدترین‌ها'
    },
    product: {
      addToBag: 'افزودن به سبد انتخاب',
      addedToBag: 'به انتخاب افزوده شد',
      selectSize: 'انتخاب سایز',
      selectColor: 'انتخاب نوع طلا',
      carat: 'وزن قیراط',
      material: 'فلز گرانبها',
      stone: 'سنگ قیمتی و تراش',
      availability: 'وضعیت موجودی',
      inStock: 'آماده ارسال فوری از مارماریس',
      handcraftedIn: 'دست‌ساز در آتلیه اختصاصی',
      askAiAboutThis: 'مشاوره هوش مصنوعی درباره این قطعه',
      whatsappInquire: 'استعلام واتساپ از آقای پروین',
      reviews: 'نظرات مشتریان گرامی',
      detailsTitle: 'مشخصات هنری و فنی',
      solidGoldGuarantee: '۱۰۰٪ طلای خالص با ضمانت و سنگ‌های طبیعی اصیل'
    },
    common: {
      viewDetails: 'مشاهده جزئیات',
      quickView: 'نگاه سریع',
      readMore: 'مطالعه بیشتر',
      exploreNow: 'کشف کنید',
      bestSeller: 'پرفروش',
      new: 'جدید',
      limited: 'تعداد محدود',
      signature: 'امضای آکسوی',
      share: 'اشتراک‌گذاری',
      close: 'بستن',
      verifiedSSL: 'دارای نماد امنیتی SSL',
      establishedYear: 'تاسیس ۱۹۹۰'
    },
    footer: {
      explore: 'کشف و خرید',
      about: 'درباره ما و اصالت',
      services: 'خدمات بوتیک',
      customerCare: 'خدمات مشتریان و امنیت',
      copyright: '© ۱۹۹۰–۲۰۲۶ جواهرات آکسوی. تمامی حقوق محفوظ است. هتل لوتوس بیچ، مارماریس، ترکیه.'
    }
  }
};
