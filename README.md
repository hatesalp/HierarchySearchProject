# Departman Arama Uygulaması

Bu uygulama, bir dizi departman verisi üzerinde arama yapmayı ve bu verileri bir hiyerarşik yapıda görüntülemeyi sağlar. Kullanıcılar, arama terimi girerek departmanları veya açıklamalarını hızlıca bulabilirler. Uygulama, aynı zamanda arama sonuçlarına uygun şekilde veri vurgulama, açılır-kapanır (accordion) yapısı ve hata mesajları gibi işlevsellikler sunar.

## Özellikler

- **Recursive Arama**: Departmanların adları ve açıklamaları üzerinden recursive bir şekilde arama yapılabilir.
- **Dinamik Veri Vurgulama**: Arama sonuçları vurgulanır ve ilgili kelimeler yeşil renkte gösterilir.
- **Accordion Yapısı**: Her bir departman, alt departmanlarıyla birlikte açılıp kapanabilir.
- **Temizleme Butonu**: Arama kutusunda bulunan "×" butonu ile arama terimi temizlenebilir.
- **Hata Yönetimi**: Geçersiz,boş arama vs. terimlerine karşı hata mesajları gösterilir.

## Kurulum

### 1. Vite ile Proje Kurulumu

Bu projede, hızlı bir geliştirme deneyimi için **Vite** kullanılmıştır. Vite, modern bir geliştirme sunucusudur ve React projelerinde hızlı derleme ve hızlı yeniden yükleme özellikleri sunar.

### 2. Proje Klonlama

Öncelikle, projeyi klonlayın:

```bash
git clone https://github.com/hatesalp/department-search-project.git
cd search-project
```

### 3. Gerekli Bağımlılıkları Yükleme

Proje içerisinde gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

```bash
npm install
```

### 4. Projeyi Çalıştırma

Projeyi çalıştırmak için şu komutu kullanın:

```bash
npm run dev
```

Uygulama, [http://localhost:5173/](http://localhost:5173/) adresinde çalışacaktır.

## Kullanım

- **Arama Yapma**: Arama kutusuna departman adı veya açıklaması ile ilgili anahtar kelimeleri girerek ilgili veriyi hızlıca bulabilirsiniz. Arama kutusundaki "×" butonuna tıklayarak arama terimini temizleyebilirsiniz.
- **Accordion**: Her bir departmanı tıklayarak alt departmanları açıp kapatabilirsiniz.
- **Veri Vurgulama**: Arama sonucu içeren departmanlar ve açıklamaları, arama terimiyle eşleşen kelimeler yeşil renkte vurgulanır.

## Teknolojiler

- **React.js**: Kullanıcı arayüzü bileşenleri için.
- **TypeScript**: Tip güvenliği ve geliştirilmiş kod tamamlama.
- **CSS**: Görsel stil ve düzenleme.
- **React Hooks**: State yönetimi ve bileşen işlevselliği için.

## Kod Yapısı

### `App.tsx`

- Ana uygulama bileşenidir.
- Departman verisini içerir ve arama işlemi ile ilgili tüm işlevselliği yönetir.
- `SearchInput` ve `List` bileşenlerine veri ve fonksiyonlar iletilir.

### `SearchInput.tsx`

- Arama kutusunun görsel bileşenidir.
- Arama terimi girişi ve temizleme butonunu içerir.

### `List.tsx`

- Departmanların ve alt departmanlarının liste halinde gösterilmesi.
- Accordion yapısı ile her departmanın alt departmanları açılabilir.

### `useErrorMessages.ts`

- Hata mesajlarını içeren Costom Hook.

### `types.ts`

- Type objelerinin tutulduğu dosyadır.
- Departman type içerir.

### `textUtils.tsx`

- Arama yapıldığında girilen metini belirginleştiren ve filtreyen metodları içerir.

### `app.sass`

- Uygulama ve arama bileşeninin stil dosyasıdır.
- BEM metodolojisi kullanılarak sass yazılmıştır.

### `data.json`

- Veri içeren JSON dosyasıdır.

### `README.md` dosyasındaki açıklamalar:

1. **Proje Özellikleri**: Uygulamanın temel işlevselliklerini tanımlar.
2. **Kurulum Adımları**: Projeyi yerel ortamda çalıştırabilmek için gerekli adımları sağlar.
3. **Kullanım**: Kullanıcıların projeyi nasıl kullanacaklarına dair kısa bir açıklama sunar.
4. **Teknolojiler**: Uygulamanın hangi teknolojilerle yazıldığını belirtir.
5. **Kod Yapısı**: Projedeki dosya ve bileşenlerin açıklamaları.
