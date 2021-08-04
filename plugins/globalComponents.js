import Vue from 'vue'
import Navbar from '@/components/includes/TheNavigation.vue'
import Footer from '@/components/includes/TheFooter.vue'

const components = {
    Navbar,
    Footer
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
