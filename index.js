const baseUrl = "http://localhost:3000"
const availableItems = document.getElementById('shop-items')
const logInForm = document.getElementById('logIn')
const easterEggImage = document.getElementById('easterEgg')    

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
     document.getElementById('itemDescription').textContent = item.description    
  }

logInForm.addEventListener('submit', handleLogin)


function handleLogin(event) {
  event.preventDefault()
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  if (username === 'osgamer' && password === 'runelite'){
    alert('You are now logged in!')
  }

  else {
    alert('Invalid Log In. Please try again....')
  }
}

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key.toLowerCase() === "h") {
    easterEggImage.style.display = "block";
  }
}