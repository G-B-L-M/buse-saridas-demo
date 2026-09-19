# Buse Sarıdaş — tasarım demosu

Paylaşılabilir ön yüz demosu: https://g-b-l-m.github.io/buse-saridas-demo/

Bu sürüm tasarım değerlendirmesi içindir. İçerikler onay bekler; gerçek form gönderimi, veri tabanı, yönetim paneli ve bülten servisi içermez. Arama motorları için noindex korunur; ziyaret etmek için giriş gerekmez.

## Geliştirme

```sh
npm ci
npm run dev
```

Yerel yol: `/buse-saridas-demo/`. Üretim için `npm run build` statik `out/` dizinini üretir. GitHub Pages, `main` dalındaki `docs/` dizinini yayınlar; güncellemede `out/` içeriği `docs/` ile eşitlenir ve `docs/.nojekyll` korunur.

Next.js, React, TypeScript, GSAP ve CSS Modules kullanılır. Yönetim paneli/CMS ayrı bir sonraki aşamadır. Fotoğraflar ve marka varlıkları yeniden kullanım lisansı anlamına gelmez; font lisansları `licenses/` altındadır.

Bu temiz paylaşım kopyasında kişisel çalışma notları, müşteri değerlendirme belgeleri, ham fotoğraf arşivi, kimlik bilgileri, ortam dosyaları ve eski Git geçmişi bulunmaz.
