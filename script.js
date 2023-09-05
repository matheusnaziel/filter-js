const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterSearch)
  function filterSearch(){
  if(filterElement.value != ""){
    for(let card of cards){
      let cardTitle = card.querySelector('h2')
      cardTitle = cardTitle.textContent.toLowerCase()
      let filterText = filterElement.value.toLowerCase()
        if(!cardTitle.includes(filterText)){
          card.style.display = 'none'
        }
        else { 
          card.style.display = 'block'
        }
    }
  }
  else {
    for(let card of cards){
      card.style.display = 'block'
    }
  }
}