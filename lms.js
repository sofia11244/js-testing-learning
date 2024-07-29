function checkStorage(storage, item) {
  if (storage.includes("pear")) {
    console.log(`${item} is available to order!`);
  } else {
    console.log("Sorry! We are out of stock!");
  }
}

// checkStorage(storage, item) adlı fonksiyon iki parametre alır:

// storage - depodaki mevcut ürünleri açıklayan bir dizi.
// item - kontrol edilmesi gereken ürünün adıyla ilgili bir dize.
// Fonksiyonun kodunu, storage dizisinde böyle bir ürünün olup olmadığını kontrol edecek şekilde güncelleyin şu değerleri döndürün:

// Ürün bulunduğunda, "<item> is available to order!" dizesini döndürün. Burada item ürün adıdır ve ürün bulunduğunda kullanılır.
// Ürün dizide yoksa, "Sorry! We are out of stock!" dizesini döndürün.
// Ürün adıyla aramanın büyük-küçük harf duyarsız olmasını sağlayın, yani örneğin "plum" ve "pLuM" gibi kelimelerin ["apple", "plum", "pear"] dizisinde bulunabilmesi için.

// checkStorage(["apple", "plum", "pear"], "plum") işlemi "plum is available to order!" sonucunu döndürmelidir.
// checkStorage(["apple", "plum", "pear"], "pLuM") işlemi "plum is available to order!" sonucunu döndürmelidir.
// checkStorage(["apple", "plum", "pear"], "pear") işlemi "pear is available to order!" sonucunu ddöndürmelidir.
// checkStorage(["apple", "plum", "pear"], "pEAr") işlemi "pear is available to order!" sonucunu döndürmelidir.
// checkStorage(["apple", "plum", "pear"], "orange") işlemi "Sorry! We are out of stock!" sonucunu döndürmelidir.
// checkStorage(["apple", "plum", "pear"], "carrot") işlemi "Sorry! We are out of stock!" sonucunu döndürmelidir.
