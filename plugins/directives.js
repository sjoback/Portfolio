import Vue from 'vue';

Vue.directive('fade', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight)
  },

  bind(el, binding) {
    el.classList.add('before-enter')
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('enter')
        el.classList.remove('before-enter')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})

Vue.directive('slideLeft', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight - 300)
  },

  bind(el, binding) {
    el.classList.add('before-slideLeft')
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('slideLeft')
        el.classList.remove('before-slideLeft')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})

Vue.directive('slideRight', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||             
             rect.top > window.innerHeight - 300)
  },

  bind(el, binding) {
    el.classList.add('before-slideRight')
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('slideRight')
        el.classList.remove('before-slideRight')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})

Vue.directive('pop', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight - 300)
  },

  bind(el, binding) {
    el.classList.add('before-popIn')
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('popIn')
        el.classList.remove('before-popIn')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})
