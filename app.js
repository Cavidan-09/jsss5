// let word = "hello";
// let length = word.length;
// console.log(length); // 








// function isvalidnumber(phoneNumber) {
//     // Проверяем, начинается ли номер с +7 и состоит ли он из 12 символов (+7 и 10 цифр)
//     return phoneNumber.startsWith("+7") && phoneNumber.length === 12 && /^\+7\d{10}$/.test(phoneNumber);
// }

// Примеры использования:
// console.log(isvalidnumber("+71234567890")); // 
// console.log(isvalidnumber("+7123456789"));  // 
// console.log(isvalidnumber("+70123456789")); // 
// console.log(isvalidnumber("71234567890"));  // 




function CapitalizeWords(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  

  const result = CapitalizeWords('Salam menim adim Cavidan di');
  console.log(result); 