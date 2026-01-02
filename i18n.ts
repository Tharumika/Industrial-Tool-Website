import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        products: "Products",
        about: "About Us",
        services: "Services",
        contact: "Contact",
        quote: "Get a Quote"
      },
      hero: {
        title: "Heavy-Duty Engineering for Global Industry",
        subtitle: "Equipping construction sites, factories, and workshops with world-class machinery and precision power tools.",
        cta_primary: "Explore Products",
        cta_secondary: "Request a Quote"
      },
      home: {
        about_preview_title: "Engineering Excellence Since 1999",
        about_preview_text: "Titan Industrial Tools has been a cornerstone in global infrastructure development. We provide the equipment that builds cities, powers industries, and drives innovation.",
        read_more: "Read More About Us",
        why_us_title: "Why Industry Leaders Choose Titan",
        why_quality_title: "Uncompromising Quality",
        why_quality_text: "ISO 9001:2015 certified equipment tested for extreme conditions.",
        why_support_title: "24/7 Technical Support",
        why_support_text: "Our engineers are always available to minimize your downtime.",
        why_global_title: "Global Logistics",
        why_global_text: "Fast, reliable shipping to over 50 countries worldwide.",
        final_cta_title: "Looking for reliable industrial tools?",
        final_cta_button: "Talk to an Expert"
      },
      products: {
        title: "Industrial Product Catalog",
        subtitle: "Browse our extensive range of high-performance tools designed for professionals.",
        category_power: "Power Tools",
        category_construction: "Construction Equipment",
        category_machinery: "Industrial Machinery",
        category_all: "All Products",
        intro_power: "Precision-engineered power tools for assembly lines, workshops, and heavy-duty on-site tasks.",
        intro_construction: "Robust equipment designed to withstand the rigors of modern construction sites and earthmoving projects.",
        intro_machinery: "Large-scale industrial machinery for manufacturing plants, processing facilities, and automation.",
        view_details: "View Details",
        request_quote: "Request Quote",
        use_case: "Best for:",
        filter_label: "Filter Category:"
      },
      about: {
        title: "Building the Future of Industry",
        overview_title: "Company Overview",
        overview_text: "Titan Industrial Tools is a global leader in the supply and maintenance of heavy machinery. With headquarters in Tokyo and distribution hubs worldwide, we bridge the gap between advanced Japanese engineering and global industrial needs.",
        mission: "Our Mission",
        mission_text: "To empower global industries with tools that ensure safety, efficiency, and sustainability.",
        vision: "Our Vision",
        vision_text: "To become the world's most trusted partner in industrial infrastructure development.",
        values_title: "Core Values",
        value_integrity: "Integrity",
        value_integrity_text: "We stand behind every product we sell with honest warranties.",
        value_innovation: "Innovation",
        value_innovation_text: "Constantly upgrading our catalog with the latest tech.",
        value_safety: "Safety First",
        value_safety_text: "Zero compromise on operator safety standards.",
        safety_commitment: "Our Safety Commitment",
        safety_text: "Every tool undergoes rigorous stress testing to exceed international safety regulations (ANSI, ISO, CE)."
      },
      services: {
        title: "Comprehensive Industrial Services",
        subtitle: "Beyond products, we provide end-to-end solutions to keep your operations running smoothly.",
        supply: "Global Tool Supply",
        supply_desc: "Reliable logistics ensuring your tools arrive on time, anywhere.",
        supply_benefit: "Benefit: Reduced project delays and inventory costs.",
        maintenance: "Maintenance & Repair",
        maintenance_desc: "Scheduled maintenance plans and emergency repair services.",
        maintenance_benefit: "Benefit: Extended equipment lifespan and operational uptime.",
        consulting: "Technical Consulting",
        consulting_desc: "Expert advice on workflow optimization and safety compliance.",
        consulting_benefit: "Benefit: Optimized efficiency and regulatory compliance.",
        custom: "Custom Fabrication",
        custom_desc: "Modifying tools to meet unique project specifications.",
        custom_benefit: "Benefit: Tailored solutions for specialized industrial tasks."
      },
      contact: {
        title: "Contact Our Team",
        subtitle: "Reach out for quotes, support, or general inquiries. We are here to assist.",
        intro: "Our dedicated support team is ready to answer your questions.",
        name: "Full Name",
        email: "Business Email",
        company: "Company Name",
        message: "How can we help?",
        submit: "Send Message",
        address: "Head Office Address",
        phone: "Phone Number",
        hours_label: "Business Hours",
        hours_value: "Mon - Fri: 08:00 - 18:00 (JST)",
        response_note: "We typically respond within 24 hours."
      },
      footer: {
        company_desc: "Titan Industrial Tools provides world-class machinery and power tools for construction, manufacturing, and heavy industry.",
        quick_links: "Quick Links",
        products_services: "Products & Services",
        contact_info: "Contact Info",
        rights: "All rights reserved.",
        follow_us: "Follow Us"
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: "ホーム",
        products: "製品情報",
        about: "会社概要",
        services: "サービス",
        contact: "お問い合わせ",
        quote: "見積もり依頼"
      },
      hero: {
        title: "世界の産業を支える重厚なエンジニアリング",
        subtitle: "建設現場、工場、ワークショップに世界クラスの機械と精密電動工具を提供します。",
        cta_primary: "製品を見る",
        cta_secondary: "見積もりを依頼"
      },
      home: {
        about_preview_title: "1999年創業の技術力",
        about_preview_text: "Titan Industrial Toolsは、世界のインフラ開発の礎となってきました。都市を築き、産業を動かし、革新を推進するための機器を提供しています。",
        read_more: "会社概要を読む",
        why_us_title: "業界のリーダーに選ばれる理由",
        why_quality_title: "妥協なき品質",
        why_quality_text: "過酷な条件下でテストされたISO 9001:2015認証機器。",
        why_support_title: "24時間技術サポート",
        why_support_text: "エンジニアが常時待機し、ダウンタイムを最小限に抑えます。",
        why_global_title: "グローバル物流",
        why_global_text: "世界50カ国以上への迅速で信頼性の高い配送。",
        final_cta_title: "信頼できる産業用ツールをお探しですか？",
        final_cta_button: "専門家に相談する"
      },
      products: {
        title: "産業用製品カタログ",
        subtitle: "プロフェッショナル向けに設計された高性能ツールの豊富なラインナップをご覧ください。",
        category_power: "電動工具",
        category_construction: "建設機械",
        category_machinery: "産業機械",
        category_all: "すべての製品",
        intro_power: "組立ライン、ワークショップ、現場での重作業向けの精密設計電動工具。",
        intro_construction: "現代の建設現場や土木プロジェクトの過酷さに耐える堅牢な機器。",
        intro_machinery: "製造工場、加工施設、自動化向けの大規模産業機械。",
        view_details: "詳細を見る",
        request_quote: "見積もり依頼",
        use_case: "用途:",
        filter_label: "カテゴリ:"
      },
      about: {
        title: "産業の未来を築く",
        overview_title: "会社概要",
        overview_text: "Titan Industrial Toolsは、重機の供給と保守における世界的リーダーです。東京に本社を置き、世界中に物流拠点を持つことで、日本の高度なエンジニアリングと世界の産業ニーズの架け橋となっています。",
        mission: "ミッション",
        mission_text: "安全性、効率性、持続可能性を保証するツールで世界の産業を支援すること。",
        vision: "ビジョン",
        vision_text: "産業インフラ開発において世界で最も信頼されるパートナーになること。",
        values_title: "コアバリュー",
        value_integrity: "誠実さ",
        value_integrity_text: "すべての製品に誠実な保証を提供します。",
        value_innovation: "革新",
        value_innovation_text: "最新技術でカタログを常にアップグレードします。",
        value_safety: "安全第一",
        value_safety_text: "オペレーターの安全基準には一切妥協しません。",
        safety_commitment: "安全への取り組み",
        safety_text: "すべてのツールは、国際安全基準（ANSI、ISO、CE）を超えるための厳格なストレステストを受けています。"
      },
      services: {
        title: "包括的な産業サービス",
        subtitle: "製品だけでなく、業務を円滑に進めるためのエンドツーエンドのソリューションを提供します。",
        supply: "ツール供給",
        supply_desc: "ツールを世界中どこへでも時間通りに届ける信頼性の高い物流。",
        supply_benefit: "メリット: プロジェクトの遅延と在庫コストの削減。",
        maintenance: "保守・修理",
        maintenance_desc: "定期的なメンテナンス計画と緊急修理サービス。",
        maintenance_benefit: "メリット: 機器の寿命延長と稼働時間の最大化。",
        consulting: "技術コンサルティング",
        consulting_desc: "ワークフローの最適化と安全コンプライアンスに関する専門家のアドバイス。",
        consulting_benefit: "メリット: 効率の最適化と規制遵守。",
        custom: "カスタム製造",
        custom_desc: "独自のプロジェクト仕様に合わせてツールを変更・製造。",
        custom_benefit: "メリット: 特殊な産業タスクに合わせたソリューション。"
      },
      contact: {
        title: "お問い合わせ",
        subtitle: "見積もり、サポート、一般的なお問い合わせはこちらから。私たちがサポートします。",
        intro: "専任のサポートチームがご質問にお答えします。",
        name: "お名前",
        email: "会社用メールアドレス",
        company: "会社名",
        message: "お問い合わせ内容",
        submit: "送信する",
        address: "本社住所",
        phone: "電話番号",
        hours_label: "営業時間",
        hours_value: "月 - 金: 08:00 - 18:00 (JST)",
        response_note: "通常24時間以内に返信いたします。"
      },
      footer: {
        company_desc: "Titan Industrial Toolsは、建設、製造、重工業向けに世界クラスの機械と電動工具を提供しています。",
        quick_links: "クイックリンク",
        products_services: "製品・サービス",
        contact_info: "連絡先",
        rights: "無断転載を禁じます。",
        follow_us: "フォローする"
      }
    }
  },
  si: {
    translation: {
      nav: {
        home: "මුල් පිටුව",
        products: "නිෂ්පාදන",
        about: "අපි ගැන",
        services: "සේවා",
        contact: "අමතන්න",
        quote: "මිල ගණන්"
      },
      hero: {
        title: "ගෝලීය කර්මාන්ත සඳහා බර වාහන ඉංජිනේරු තාක්ෂණය",
        subtitle: "ලෝක මට්ටමේ යන්ත්‍රෝපකරණ සහ නිරවද්‍ය බල මෙවලම් සමඟ ඉදිකිරීම් ස්ථාන, කර්මාන්තශාලා සහ වැඩමුළු සන්නද්ධ කිරීම.",
        cta_primary: "නිෂ්පාදන බලන්න",
        cta_secondary: "මිල ගණන් ඉල්ලන්න"
      },
      home: {
        about_preview_title: "1999 සිට ඉංජිනේරු විශිෂ්ටත්වය",
        about_preview_text: "Titan Industrial Tools ගෝලීය යටිතල පහසුකම් සංවර්ධනයේ මුල්ගලක් වී ඇත. අපි නගර ගොඩනැගීමට, කර්මාන්ත බලගැන්වීමට සහ නවෝත්පාදනයන් ගෙනයාමට උපකාරී වන උපකරණ සපයන්නෙමු.",
        read_more: "අපි ගැන තව කියවන්න",
        why_us_title: "කර්මාන්ත නායකයින් Titan තෝරා ගන්නේ ඇයි?",
        why_quality_title: "නොසැලෙන ගුණාත්මකභාවය",
        why_quality_text: "ISO 9001:2015 සහතික ලත් උපකරණ දැඩි තත්වයන් යටතේ පරීක්ෂා කර ඇත.",
        why_support_title: "24/7 තාක්ෂණික සහාය",
        why_support_text: "ඔබගේ අකර්මණ්‍ය කාලය අවම කිරීම සඳහා අපගේ ඉංජිනේරුවන් සැමවිටම ලබා ගත හැකිය.",
        why_global_title: "ගෝලීය සැපයුම්",
        why_global_text: "ලොව පුරා රටවල් 50කට වැඩි ගණනකට වේගවත්, විශ්වාසදායක නැව්ගත කිරීම.",
        final_cta_title: "විශ්වාසවන්ත කාර්මික මෙවලම් සොයනවාද?",
        final_cta_button: "විශේෂඥයෙකු සමඟ කතා කරන්න"
      },
      products: {
        title: "කාර්මික නිෂ්පාදන නාමාවලිය",
        subtitle: "වෘත්තිකයන් සඳහා නිර්මාණය කර ඇති අපගේ ඉහළ ක්‍රියාකාරී මෙවලම් පරාසය පිරික්සන්න.",
        category_power: "බල මෙවලම්",
        category_construction: "ඉදිකිරීම් උපකරණ",
        category_machinery: "කාර්මික යන්ත්‍රෝපකරණ",
        category_all: "සියලුම නිෂ්පාදන",
        intro_power: "එකලස් කිරීමේ මාර්ග, වැඩමුළු සහ බර වැඩ සහිත ස්ථානීය කාර්යයන් සඳහා නිරවද්‍යව නිර්මාණය කරන ලද බල මෙවලම්.",
        intro_construction: "නවීන ඉදිකිරීම් ස්ථාන සහ පස් වැඩ ව්‍යාපෘතිවල දැඩි බවට ඔරොත්තු දෙන පරිදි නිර්මාණය කර ඇති ශක්තිමත් උපකරණ.",
        intro_machinery: "නිෂ්පාදන කම්හල්, සැකසුම් පහසුකම් සහ ස්වයංක්‍රීයකරණය සඳහා මහා පරිමාණ කාර්මික යන්ත්‍රෝපකරණ.",
        view_details: "විස්තර බලන්න",
        request_quote: "මිල ගණන් ඉල්ලන්න",
        use_case: "සඳහා වඩාත් සුදුසුයි:",
        filter_label: "ප්‍රවර්ගය පෙරහන් කරන්න:"
      },
      about: {
        title: "කර්මාන්තයේ අනාගතය ගොඩනැගීම",
        overview_title: "සමාගම පිළිබඳ සමාලෝචනය",
        overview_text: "Titan Industrial Tools යනු බර යන්ත්‍රෝපකරණ සැපයීම සහ නඩත්තු කිරීම පිළිබඳ ගෝලීය නායකයෙකි. ටෝකියෝ හි මූලස්ථානය සහ ලොව පුරා බෙදාහැරීමේ මධ්‍යස්ථාන සමඟින්, අපි දියුණු ජපන් ඉංජිනේරු විද්‍යාව සහ ගෝලීය කාර්මික අවශ්‍යතා අතර පරතරය පියවන්නෙමු.",
        mission: "අපගේ මෙහෙවර",
        mission_text: "ආරක්ෂාව, කාර්යක්ෂමතාව සහ තිරසාරභාවය සහතික කරන මෙවලම් සමඟ ගෝලීය කර්මාන්ත බලගැන්වීම.",
        vision: "අපගේ දැක්ම",
        vision_text: "කාර්මික යටිතල පහසුකම් සංවර්ධනයේ ලොව විශ්වාසවන්තම හවුල්කරු බවට පත්වීම.",
        values_title: "මූලික වටිනාකම්",
        value_integrity: "අවංකභාවය",
        value_integrity_text: "අපි විකුණන සෑම නිෂ්පාදනයක්ම අවංක වගකීම් සමඟ අපි සහතික කරමු.",
        value_innovation: "නවෝත්පාදනය",
        value_innovation_text: "නවතම තාක්ෂණය සමඟ අපගේ නාමාවලිය නිරන්තරයෙන් යාවත්කාලීන කිරීම.",
        value_safety: "ආරක්ෂාව පළමුව",
        value_safety_text: "ක්‍රියාකරුගේ ආරක්ෂක ප්‍රමිතීන් පිළිබඳ කිසිදු සම්මුතියක් නැත.",
        safety_commitment: "අපගේ ආරක්ෂක කැපවීම",
        safety_text: "ජාත්‍යන්තර ආරක්ෂක රෙගුලාසි (ANSI, ISO, CE) ඉක්මවා යාම සඳහා සෑම මෙවලමක්ම දැඩි ආතති පරීක්ෂණවලට භාජනය වේ."
      },
      services: {
        title: "විස්තීරණ කාර්මික සේවා",
        subtitle: "නිෂ්පාදනවලට අමතරව, ඔබේ මෙහෙයුම් සුමටව පවත්වාගෙන යාම සඳහා අපි අන්තයේ සිට අග දක්වා විසඳුම් ලබා දෙන්නෙමු.",
        supply: "ගෝලීය මෙවලම් සැපයුම",
        supply_desc: "ඔබගේ මෙවලම් නියමිත වේලාවට, ඕනෑම තැනකට පැමිණෙන බව සහතික කරන විශ්වාසදායක සැපයුම්.",
        supply_benefit: "වාසිය: ව්‍යාපෘති ප්‍රමාදයන් සහ ඉන්වෙන්ටරි වියදම් අඩු කිරීම.",
        maintenance: "නඩත්තු සහ අලුත්වැඩියා",
        maintenance_desc: "උපලේඛනගත නඩත්තු සැලසුම් සහ හදිසි අලුත්වැඩියා සේවා.",
        maintenance_benefit: "වාසිය: උපකරණ ආයු කාලය දීර්ඝ කිරීම සහ ක්‍රියාකාරී කාලය උපරිම කිරීම.",
        consulting: "තාක්ෂණික උපදේශන",
        consulting_desc: "කාර්ය ප්‍රවාහ ප්‍රශස්තකරණය සහ ආරක්ෂක අනුකූලතාව පිළිබඳ විශේෂඥ උපදෙස්.",
        consulting_benefit: "වාසිය: කාර්යක්ෂමතාව සහ නියාමන අනුකූලතාව ප්‍රශස්ත කිරීම.",
        custom: "අභිරුචි නිෂ්පාදන",
        custom_desc: "අද්විතීය ව්‍යාපෘති පිරිවිතරයන් සපුරාලීම සඳහා මෙවලම් වෙනස් කිරීම.",
        custom_benefit: "වාසිය: විශේෂිත කාර්මික කාර්යයන් සඳහා සකස් කළ විසඳුම්."
      },
      contact: {
        title: "අපගේ කණ්ඩායම අමතන්න",
        subtitle: "මිල ගණන්, සහාය, හෝ සාමාන්‍ය විමසීම් සඳහා සම්බන්ධ වන්න. අපි උදව් කිරීමට මෙහි සිටිමු.",
        intro: "ඔබගේ ප්‍රශ්නවලට පිළිතුරු දීමට අපගේ කැපවූ සහාය කණ්ඩායම සූදානම්.",
        name: "සම්පූර්ණ නම",
        email: "ව්‍යාපාරික විද්‍යුත් තැපෑල",
        company: "සමාගමේ නම",
        message: "අපට උදව් කළ හැක්කේ කෙසේද?",
        submit: "පණිවිඩය යවන්න",
        address: "ප්‍රධාන කාර්යාල ලිපිනය",
        phone: "දුරකථන අංකය",
        hours_label: "ව්‍යාපාරික වේලාවන්",
        hours_value: "සඳුදා - සිකුරාදා: 08:00 - 18:00 (JST)",
        response_note: "අපි සාමාන්‍යයෙන් පැය 24ක් ඇතුළත ප්‍රතිචාර දක්වන්නෙමු."
      },
      footer: {
        company_desc: "Titan Industrial Tools ඉදිකිරීම්, නිෂ්පාදන සහ බර කර්මාන්ත සඳහා ලෝක මට්ටමේ යන්ත්‍රෝපකරණ සහ බල මෙවලම් සපයයි.",
        quick_links: "ඉක්මන් සබැඳි",
        products_services: "නිෂ්පාදන සහ සේවා",
        contact_info: "සම්බන්ධතා තොරතුරු",
        rights: "සියලුම හිමිකම් ඇවිරිණි.",
        follow_us: "අපව අනුගමනය කරන්න"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
    }
  });

export default i18n;