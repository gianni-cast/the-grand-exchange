const baseUrl = "http://localhost:3000"
const availableItems = document.getElementById('shop-items')

document.addEventListener("DOMContentLoaded", function() {
    getItems()
})

function getItems() {
    fetch(`${baseUrl}/items`)
    .then(response => response.json())
    .then(items => displayItems(items))
}

function displayItems (items) {
    items.forEach(item => {
      displayItem(item)
    })
  }
  
  function displayItem(item) {
    const itemImgHolder = document.createElement('img')
    itemImgHolder.src = item.icon_large
    availableItems.append(itemImgHolder)
    itemImgHolder.addEventListener('click', () => handleClick(item))
  }

  function handleClick(item) { 
     document.getElementById('itemData').src = item.icon_large         
     document.getElementById('nameData').textContent = item.name
     document.getElementById('priceData').textContent = item.current.price       
     document.getElementById('changeData').textContent = item.current.trend        
  }