//Global

fetch('https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=c&page=14')
    .then(response => console.log(response))
    .catch(error => console.error(error))