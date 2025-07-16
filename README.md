# 🎌 Anime Finder

Anime Finder, Jikan API'yi kullanarak anime aramanıza olanak tanıyan basit bir web uygulamasıdır.  
Kullanıcılar bir anime ismi yazarak o animeye ait poster ve başlığa ulaşabilir.  

---

## 🚀 Canlı Demo

[🔗 Link](https://aytugzn.github.io/anime-finder/)

---

## 🧱 Proje Yapısı

anime-finder/
- public/
  - styles/
    - main.css
- views/
  - index.ejs
  - partials/
    - header.ejs
    - footer.ejs
- index.js
- package.json
- .gitignore


---

## 🛠️ Kullanılan Teknolojiler

- **Node.js** – Sunucu tarafı JavaScript
- **Express.js** – Minimal web framework
- **EJS** – Template engine
- **Axios** – API isteklerini yapmak için
- **HTML/CSS** – Temel frontend yapısı
- **Jikan API** – MyAnimeList'in açık kaynak REST API'si


---

## ⚙️ Kurulum ve Çalıştırma

1. Bu repoyu klonla:

```bash
git clone https://github.com/aytugzn/anime-finder.git
```
---

2. Klasöre gir ve bağımlılıkları kur:

```bash
cd anime-finder
npm install
```
---

3. Uygulamayı başlat:

```bash
node index.js
```

---

4. Tarayıcıdan ulaş:

```bash
http://localhost:3000
```

---

## 📄 API Bilgisi

Bu proje Jikan API kullanır.
Anime aramak için şu endpoint'e istek atar:

```http
GET https://api.jikan.moe/v4/anime?q=animeAdi
```
API key gerekmez, tamamen ücretsizdir.

---

### 📌 Özellikler

🔍 Kullanıcıdan anime ismi alır

📥 Jikan API ile eşleşen verileri çeker

🖼️ Anime posteri ve başlığıyla birlikte kart şeklinde listeler

✨ Hover animasyonları ile görsel zenginlik

---

### ✍️ Geliştiren

Bayram Aytuğ Uzun