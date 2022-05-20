new Vue({
    el: '#app',
    data: {
        hamburguerMenu: '&#9776;',
        counter: 0,
    },
    methods: {
        mobileMenu() {
            if (!toogle.checked) {
                this.hamburguerMenu = '&#10006;'
            } else {
                this.hamburguerMenu = '&#9776;'
            }
        },
        closeMenu() {
            toogle.checked = false
            this.hamburguerMenu = '&#9776;'
        },
        addCounter() {
            this.counter++
        },
    }
})
