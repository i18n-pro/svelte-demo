<script lang="ts">
  import {I18nProvider} from '@i18n-pro/svelte/context'
  import App from './App.svelte'
  import i18nState from './i18n'
</script>

<I18nProvider {...i18nState}>
  <App />
</I18nProvider>
