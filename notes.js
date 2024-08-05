const sortByDescendingFriendCount = (users) => {
  return users.slice().sort((a, b) => b.friends.length - a.friends.length);
};

// users.slice().sort((a, b) => b.friends.length - a.friends.length);
// Bu kod, users dizisini azalan arkadaş sayısına göre sıralar. Kodun adım adım nasıl çalıştığını inceleyelim:

// users.slice():

// Bu kısım, users dizisinin bir kopyasını oluşturur. slice() metodu, orijinal diziyi değiştirmeden yeni bir dizi döndürür.
// Bu şekilde, orijinal users dizisi bozulmadan kalır ve sıralama işlemi kopya üzerinde yapılır.
// .sort((a, b) => b.friends.length - a.friends.length):

// sort() metodu, bir diziyi belirli bir sıralama düzenine göre sıralar. Burada, sıralama düzenini belirleyen bir karşılaştırma fonksiyonu kullanılır.
// (a, b) => b.friends.length - a.friends.length karşılaştırma fonksiyonu, her iki elemanın friends dizisinin uzunluğunu karşılaştırır:
// a ve b dizideki iki öğedir.
// b.friends.length - a.friends.length ifadesi, b'nin arkadaş sayısından a'nın arkadaş sayısını çıkarır.
// Eğer b'nin arkadaş sayısı a'nın arkadaş sayısından fazla ise, sonuç pozitif olur ve b önce gelir. Böylece dizi azalan sıraya göre sıralanır.
// Özetle, bu kod, users dizisini arkadaş sayısına göre azalan sırada sıralar ve sıralanmış diziyi döndürür.