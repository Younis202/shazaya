# شذايا (Shadaya) - متجر عطور React

## نظرة عامة
متجر إلكتروني لبراند عطور شذايا مبني بـ React + Vite، مستوحى من تصميم متجر الرصاصي (store.rasasi.com.sa).

## المكونات

| الملف | الوظيفة |
|---|---|
| `src/App.jsx` | الجذر - يجمع كل المكونات |
| `src/index.css` | نظام التصميم الكامل (أبيض + ذهبي + RTL) |
| `src/components/AnnouncementBar.jsx` | شريط الإعلانات المتحرك في الأعلى |
| `src/components/TopBar.jsx` | شريط البريد واللغة |
| `src/components/Navbar.jsx` | الهيدر: شعار + قائمة + بحث + سلة |
| `src/components/HeroBanner.jsx` | البانر الرئيسي مع سلايدر وأنيميشن |
| `src/components/FeaturedProducts.jsx` | شبكة المنتجات (4 أعمدة) |
| `src/components/Features.jsx` | شريط المميزات (شحن، جودة، إرجاع، دعم) |
| `src/components/Footer.jsx` | الفوتر الداكن مع الروابط وبوابات الدفع |

## الأصول
- `public/assets/لوجو_فاضي_1_1776217284462.png` - شعار شذايا
- `public/assets/hero-bg.png` - صورة البانر الرئيسي
- `public/assets/p1.png ... p8.jpg` - صور المنتجات (منقولة من ملفات الرصاصي)
- `public/assets/pay-*.png` - أيقونات بوابات الدفع

## نظام الألوان
- الخلفية: `#ffffff` أبيض نظيف
- اللون الأساسي: `#ad8538` ذهبي
- النص: `#111827`
- الفوتر: `#0a0a0a` أسود داكن

## التشغيل
- Framework: React 19 + Vite 8
- Port: 5000
- Command: `npm run dev -- --host 0.0.0.0`

## ملاحظات
- الملف الأصلي `مرحبا بكم في متجر الرصاصي للعطور الرسمي.html` محتفظ به كمرجع
- جميع مكونات Salla / Web Components المعقدة تم استبدالها بـ React نظيف
