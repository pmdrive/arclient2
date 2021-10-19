let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three [0895610720367]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [0895610720367]
│ • https://saweria.co/
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
