import initI18nState from './i18n' 
import Root from './Root.svelte'

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

  new Root({
    target: document.getElementById('app'),
    props:{
      langs,
      locale,
    }
  })
}

init()
