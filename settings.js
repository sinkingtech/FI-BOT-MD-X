//
//project_name : 𝘍𝘐 𝘉𝘖𝘛 𝘔𝘋 
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram  : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : heyit-tylor
// @tiktok :hey.its_tylor
// @whatsapp : +256704376077
//*
//*
//=================================================//
const fs = require('fs')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//=================================================//

global.ytname = process.env.YT_NAME || "YT: heyits_tylor"
//Enter your YouTube channel name

//=================================================//

global.socialm = process.env.MEDIA || "GitHub: dontechincu"
//Enter your GitHub or Instagram username 

//=================================================//

global.location = process.env.GL_INFO || "Kenya, Nairobi"
 //Type your location location

//=================================================//

global.botname = process.env.BOT_NAME || '𝗙𝗜 𝗕𝗢𝗧 𝗠𝗗' 
//Your desured bot name

//=================================================//

global.ownernumber = process.env.OWNER_NUMBER || '256704376077'
//Type your number here

//=================================================//


global.ownername = process.env.OWNER_NAME || 'Tylor' 
//Type your name here

//=================================================//

global.websitex = process.env.YT_LINK || "https://youtube.com/@heyits_tylor"

//=================================================//

global.wagc = process.env.GL_PUSH || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r"

//=================================================//

global.themeemoji = process.env.GL_EMOJI || '□'

//=================================================//

global.wm = process.env.GL_WM || "©𝗙𝗜 𝗕𝗢𝗧 𝗠𝗗"

//=================================================//

global.packname = process.env.PACK_NAME || "𝗙𝗜 𝗕𝗢𝗧 𝗠𝗗"
//The sticker pack name 

//=================================================//

global.author = process.env.AUTHOR_NAME || "Bot"
//The sticker author name 

//=================================================//

global.creator = process.env.GL_DEVS || "256704376077@s.whatsapp.net"

//=================================================//

global.xprefix = process.env.PREFIX || '.'
//Set your desired prefix

//=================================================//

global.premium = process.env.PREMIUM_VIP || ["256704376077"] 
//Premium User

//=================================================//

global.hituet = 0

//=================================================//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" //Don't edit this if you don't know!

//=================================================//

global.typemenu = process.env.MENU_DESIGN || 'v2' 
//Choose a menu type 'v1' for iOS and Android user's or 'v2' for Android user's only 

//=================================================//

global.typereply = process.env.REPLY_TYPE || 'v2' 
//Bot's reply type 'v1' to 'v3'

//=================================================//

global.autoblocknumber = process.env.AUTO_BAN || '' 
//set autoblock country code

//=================================================//

global.antiforeignnumber = process.env.AUTO_BLOCK || '' 
//set anti foreign number country code

//=================================================//

global.welcome = process.env.WELCOME_MSG || false 
//Set true to enable and false to disable welcome/left messages in groups

//=================================================//

global.anticall = process.env.ANTI_CALL || false 
//Set true to enable and false to disable bot blocking user's who call you

//=================================================//

global.autoswview = process.env.AUTO_STATUS_SEEN || false 
//Set true to enable and false to disable auto status view

//=================================================//

global.adminevent = process.env.ANNOUNCE_MSG  || false 
//show promote/demote messages

//=================================================//

global.groupevent = process.env.GROUP_ANNOUNCE_MSG || false 
//show group changes message in group chat

//=================================================//

//=================================================//

//Replies
global.mess = {
	limit: '*Your limit is used up!*',
	nsfw: '*Tell the admin to enable NSFW first!*',
    done: '*Done*',
    error: '*Sorry, I cannot perform that action!*',
    success: '*©𝘍𝘐 𝘉𝘖𝘛 𝘔𝘋*',
    owner: '*Apologies, only my owner can use this command!*',
    group: '*This feature becomes available when you use it in a group!*',
    admin: '*You’ll unlock this feature with me as an admin!*',
    notadmin: '*This feature will work once you become an admin. A way of ensuring order!*'
}

//=================================================//

//thumbnail
global.thumb = fs.readFileSync('./XploaderMedia/theme/Xploader.jpg')

//=================================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Updated'${__filename}'`, 'red'))
    delete require.cache[file]
    require(file)
})
//=================================================//
