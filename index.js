const TelegramBot = require('node-telegram-bot-api');


const token = '5740670440:AAE9GZZ_nHwN0ueqxrMgiXHfYETxgVGROB4';

const webAppUrl = 'https://frolicking-faun-221ba0.netlify.app/';

const bot = new TelegramBot(token, {polling: true});



bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
const text = msg.text;
if(text==='/start'){
await bot.sendMessage(chatId, 'Ниже появится форма, заполните ее пожалуйста', {
  reply_markup:{
    keyboard:[
      [{text:"Заполните форму", web_app:{url:webAppUrl + '/form' }}]
    ]
  }
})

await bot.sendMessage(chatId, 'Заходи в наш интернет магазин', {
  reply_markup:{
    inline_keyboard:[
      [{text:"Сделать заказ", web_app:{url:webAppUrl }}]
    ]
  }
})
}
  
  bot.sendMessage(chatId, 'Received your message');
});