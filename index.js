// Code your solutions in this file
function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'birthday';

const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);
