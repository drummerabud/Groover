new Vue({
    el: '#app',
    data: {
        hamburguerMenu: '&#9776;',
        market: [],
        items: ['Orange', 'Strawberry', 'Apple', 'Banana', 'Tomato'],
        search: '',
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
        addFruit(fruit) {
            fruit = this.items[0]
            this.market.push(fruit)
        },
    }
})
