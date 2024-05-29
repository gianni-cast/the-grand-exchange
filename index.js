const baseUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", function() {
    getItems()
})

function getItems() {
    fetch(`${baseUrl}/items`)
    .then(response => response.json())
    .then(items => console.log(items))
}