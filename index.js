// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result = message.length <= maxLength ? message : message.slice(0, maxLength - 1) + "...";
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (number of order) {
//     total += number;
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (word of words) {
//     longestWord = word.length > longestWord.length ? (longestWord = word) : longestWord;
//   }

//   return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {
//     // Change code below this line
//     let array = [];
//     for(const object of products){
//         if(Object.keys(object).includes(propName)){
//         array.push(object[propName]);
//       };
//     };
//     return array;
//     // Change code above this line
//   }

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let price = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       price = product.price * product.quantity;
//     }
//   }

//   return price;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Radar'));

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 	for(let i = 0; i < this.books.length; i += 1){
//       if(this.books[i] === oldName){
//         this.books[i] = newName;
//       };
//     };

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook(111, 222))

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for(const potion of this.potions) {
//        if(potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//        }
//       };
//       this.potions.push(newPotion)
//     },
//     removePotion(potionName) {
//       let potionNames = [];
//       for(const potion of this.potions) {
//         potionNames.push(potion.name)
//       };
//       const potionIndex = potionNames.indexOf(potionName);

//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }

//       this.potions.splice(potionIndex, 1);
//     },

//     updatePotionName(oldName, newName) {
//       let potionNames = [];
//       for(const potion of this.potions) {
//         potionNames.push(potion.name)
//       };
//       const potionIndex = potionNames.indexOf(oldName);
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }

//       this.potions[potionIndex].name = newName;
//     },
//   };

// console.log(atTheOldToad.updatePotionName("Stone pike", "Invulnerability potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
//   console.log(atTheOldToad.potions)

// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];

//   // Пиши код ниже этой строки
//   function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//   }
//   const messages = [];

//   for(let i = 0; i < orders.length; i += 1) {
//     messages.push(composeMessage.call(orders[i], i + 1));
// };
//   console.log(messages);

// const service = {
//     mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//     subscribe(email) {
//       this.mailingList.push(email);
//       return `Почта ${email} добавлена в рассылку.`;
//     },
//     unsubscribe(email) {
//       this.mailingList = this.mailingList.filter((e) => e !== email);
//       return `Почта ${email} удалена из рассылки.`;
//     },
//   };

//   function logAndInvokeAction(email, action) {
//     console.log(`Выполняем действие с ${email}.`);
//     return action(email);
//   }

//   const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
//   console.log(firstInvoke);
//   // Почта kiwi@mail.uk добавлена в рассылку.

//   console.log(service.mailingList);
//   /* ['mango@mail.com',
//       'poly@hotmail.de',
//       'ajax@jmail.net',
//       'kiwi@mail.uk']*/
//   const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
//   console.log(secondInvoke);
//   // Почта poly@hotmail.de удалена из рассылки.
//   console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

///////////////////////////////////////////////////////

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function() {
//   return this.value;
// };
// StringBuilder.prototype.padStart = function(item) {
//   let array = this.value.split("");
//   array.splice(0, 0, item);
//   this.value = array.join("");
// };
// StringBuilder.prototype.padEnd = function(item) {
//   let array = this.value.split("");
//   array.splice(array.length, 0, item);
//   this.value = array.join("");
// };
// StringBuilder.prototype.padBoth = function(item) {
//   let array = this.value.split("");
//   array.splice(0, 0, item);
//   array.splice(array.length, 0, item);
//   this.value = array.join("");
// };
// Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

///////////////////////////////////////////////////////

// class StringBuilder {
//   #value
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

///////////////////////////////////////////////////////

// class Storage {
//   #items
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
//   }
// };
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return "Внимание! Цена превышает допустимую.";
//     }
//     return "Всё хорошо, цена в порядке.";
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

///////////////////////////////////////////////////////

// class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Пиши код ниже этой строки
//     blacklistedEmails = [];

//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };

//     accessLevel;

//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }

//     blacklist(email) {
//       this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email);
//     }
//     // Пиши код выше этой строки
//   }

//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });

//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser
//   mango.blacklist('poly@mail.com');
//   console.log(mango.blacklistedEmails); // 'poly@mail.com'
//   console.log(mango.isBlacklisted('mango@mail.com')); //  false
//   console.log(mango.isBlacklisted('poly@mail.com')); // true

///////////////////////////////////////////////////////

// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"]
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"]
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"]
//   }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, allGenres) => allGenres.indexOf(genre) === index);

// console.log(uniqueGenres);

///////////////////////////////////////////////////////

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>  secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>  firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>  secondBook.rating - firstBook.rating);

///////////////////////////////////////////////////////

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books].sort((a, b) => a.author.localeCompare(b.author)).filter(book => book.rating > MIN_BOOK_RATING).map(user => user.author);

///////////////////////////////////////////////////////

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, allFriends) => allFriends.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// };

// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0);
// };

// console.log(getTotalBalanceByGender(users, "female"));
