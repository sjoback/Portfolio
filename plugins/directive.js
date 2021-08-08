import Vue from 'vue';

const makeObserver = options => new IntersectionObserver(( entries ) => {
    var offset = options.threshold
    var duration = '.3s'

    entries.forEach(( entry) => {
        // if( options.duration ) duration = options.duration

        if( entry.intersectionRatio >= offset ) entry.target.classList.add('popper')
    });
}, options);

Vue.directive( 'stagger' , {
    inserted( element, binding ) {
        element.style.opacity = 0
        const options = binding.value || {}
        const observer = makeObserver( options )
        observer.observe( element );
    }
});
