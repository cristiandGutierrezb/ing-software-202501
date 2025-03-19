document.addEventListener('DOMContentLoaded', () => {
  const onGetData = async () => {
    await fetch('http://localhost:3333/api/v1/products')
    .then((data) => data.json())
    .then((info) => {
      const { data } = info
      setAllCardsOnHTML(data)
    })
  }

  onGetData()
})


const onChangeText = () => {
  const title = document.getElementById('title')
  title.innerText = 'This is the new Title'
}

const setAllCardsOnHTML = (arrayProducts) => {
  const containerCard = document.getElementById('containerItems')
  arrayProducts.forEach((product) => {
    const productHTML = document.createElement('div')
    productHTML.classList.add('principal__content--items-item')

    const titleHTML = document.createElement('p')
    titleHTML.classList.add('title')
    titleHTML.innerText = product.title

    const descriptionHTML = document.createElement('p')
    descriptionHTML.classList.add('description')
    descriptionHTML.innerText = product.description

    const stockHTML = document.createElement('p')
    stockHTML.classList.add('stock')
    stockHTML.innerText = product.stock

    const valueHTML = document.createElement('p')
    valueHTML.classList.add('value')
    valueHTML.innerText = product.value


    productHTML.appendChild(titleHTML)
    productHTML.appendChild(descriptionHTML)
    productHTML.appendChild(stockHTML)
    productHTML.appendChild(valueHTML)
    containerCard.appendChild(productHTML)

  })
}


