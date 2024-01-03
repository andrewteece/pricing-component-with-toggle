// Toggle Switch

const toggleSwitch = document.querySelector('#toggle-switch')
const priceEl = document.querySelectorAll('.amount')

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        priceEl[0].innerText = '19.99'
        priceEl[1].innerText = '24.99'
        priceEl[2].innerText = '39.99'
    } else {
        priceEl[0].innerText = '199.99'
        priceEl[1].innerText = '249.99'
        priceEl[2].innerText = '399.99'
    }
})