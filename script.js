const card = document.querySelector('.card')

card.addEventListener('click', changeCard)
let isIgnite = true
function changeCard(event){
  const card2 = event.currentTarget
  const bg = isIgnite ? "explorer" :"ignite"
  isIgnite = !isIgnite
  card2.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}