# 📚 Books List Uygulaması

Bu proje, React kullanılarak oluşturulmuş basit bir kitap ya da roman listemele uygulamasıdır.

## 🚀 Özellikler

- Kitapları listeleme


## 🎥 Uygulama Görseli

![Bookstore Demo](./images/bookstore.gif)




# React Router Dom

- React Router Dom kütüphanesi react'ın temel yapılarından biri olan SPA (Single Page Application)'a uygun olarak birden fazla sayfayı bir arada kolay bir şekilde yönetmemizi sağlar.

- React Router Dom kütüphanesi çok sayfalı bir proje yönetimi yaparken kullanacağımız bazı bileşenler mevcuttur.

1. BrowserRouter: React Router Dom kütüphanesinin çalışması için gerekli olan temel bileşendir.Tüm routing yapısını kapsar.

2. Routes: Tarayıcıdaki url'değişimine göre hangi bileşenin render edileceğini belirler.[Ör: / ==> Home page;/details ==> Details page]

3. Route:Her sayfa birer route'dur.Route oluştururken bilmemiz gereken iki yapı mevcuttur:

i. path ==> Hangi sayfanın renderlanacağını belirleyen kısımdır.
ii. element ==> path değerine karşılık gelen bileşendir.

4. Link: Proje içerisinde sayfalar arasındaki geçiş işlemini SPA a uygun şekilde gerçekleştirir.Aslında kendisi bir a etiketidir.Eğer Link etiketi stillendirilmek istenirse bunu stillendirme noktasında a etiketine ulaşarak yaparız.

5. NavLink: Tıpkı Link etiketi gibi sayfalar arasında geçiş yapmamızı sağlar.NavLink'in Link'den farkı yönlendirme yapılan sayfada iken bu elemanın active classı alabilmesidir.Bu class sayesinde hangi sayfadaysak bu sayfanın NavLink'ini özelleştirebiliriz.

# Route'lardaki Ortak Bileşenlerin Yönetimi

- Tüm route'larda header,footer gibi ortak bileşenler bulunur.Bu şekilde tüm sayfalarda geçerli olması istenen elemanları BrowserRouter içerisinde Routes dışarısında yazarız.Bu sayede ortak yapılar tüm route'larda geçerli olacaktır.

# Dynamic Routes:

- Bir sayfa farklı farklı content'ler ile renderlanacaksa bu noktada her content için bir detay sayfası oluşturulması söz konusu değildir.Bunun yerine bir sayfa farklı contentler için dinamik şekilde render edilir.[Ör:İnstagram profil sayfası birden fazla kullanıcı renderlanır.Bu işlm yapılırken hangi kullanıcının sayfası renderlanacak bu tespit edilir.Sonrasında bu kullanıcı için arayüz render edilir.]

- Dynamic Routes oluşturulurken useParams adında bir hook kullanılır.Bu hook react router dom içerisinde gelir ve url'deki parametreleri yakalamamızı sağlar.

# Nested Routes

- Bir kapsam route içerisinde başka route'lar oluşturulmasına `Nested Routes` denir.Bu özellik sayesinde sadece belirli sayfalarda ortak olacak özellikler kullanılabilir.

# useSearchParams

- React router dom içerisinde url'deki parametreleri yönetmek için useSearchParams hook'u kullanılır.Kullanımı ise useState'e benzerdir.useSearchParams import edilir.Sonrasında bu hook bir değişkene atanır.Devamında get ile url'den parametre alınır set ile parametre url'e set edilir.

# useNavigate:

- Link veya NavLink etiketlerinin fonksiyon halidir.Belirli bir durumda başka sayfaya yönlendirme yapmak için kullanılır.[Ör: Eğer aratılan sonuç bulunamadıysa notFound sayfasına yönlendir]
