// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://bot.rave.my.id')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Astagfirullah Inget Dosa!'
  conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i

module.exports = handler
