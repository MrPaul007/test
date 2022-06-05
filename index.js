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