const { join } = require('path')

module.exports = {
  funcName: 't',
  entry: join(__dirname, './src/'),
  fileRegExp: /\.(ts)|(svelte)$/,
  output: {
    path: join(__dirname, './i18n/'),
  },
  translator: 'googlex',
  googlexConfig: {
    from: 'zh-CN',
    to: ['en', 'ja', 'zh-TW'],
    codeLocaleMap: {
      ja: 'jp',
      'zh-TW': 'cht',
    },
    proxy: 'http://127.0.0.1:1087',
  },
}
