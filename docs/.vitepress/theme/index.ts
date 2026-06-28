import DefaultTheme from 'vitepress/theme'
import './custom.css'

import SheetItem from './components/SheetItem.vue'
import Done from './components/Done.vue'
import Caution from './components/Caution.vue'
import RuleBlock from './components/RuleBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SheetItem', SheetItem)
    app.component('Done', Done)
    app.component('Caution', Caution)
    app.component('RuleBlock', RuleBlock)
  }
}