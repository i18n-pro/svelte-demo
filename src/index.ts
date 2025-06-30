import {createI18n} from '@i18n-pro/svelte'
import App from './App.svelte'
import initI18nState from './i18n' 


async function init() {
  const params = new URLSearchParams(
    new URLSearchParams(window.location.search.slice(1)),
  )
  const locale = params.get('locale') || 'en'

  const langs = initI18nState.langs || {}
  if (locale !== 'zh') {
    const lang = await (await fetch(`../i18n/${locale}.json`)).json()
    langs[locale] = lang
  }

  createI18n({
    ...initI18nState,
    langs,
    locale,
  })

  new App({
    target: document.getElementById('app'),
  })
}

init()
