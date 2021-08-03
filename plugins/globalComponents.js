import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const components = {
    Navbar,
    Footer
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
