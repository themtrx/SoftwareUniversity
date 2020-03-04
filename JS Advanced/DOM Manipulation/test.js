function solve() {
 
    let obj = document.querySelector("textarea")
    let button = document.getElementsByTagName("button")[0];
    let arrayNames = []
    let totalPrice = 0;
    let avgPrice = 0;
   
    button.addEventListener("click", (e) => {
      let furnitureData = JSON.parse(obj.value)[0]
   
      let newTableRow = document.createElement("tr")
   
      //Create td for img
      let img = document.createElement("td")
      let newImg = document.createElement("img")
      newImg.src = furnitureData.img
      img.appendChild(newImg)
      newTableRow.appendChild(img)
   
      //Create td for name
      let name = document.createElement("td")
      let newName = document.createElement("p")
      newName.innerHTML = furnitureData.name
      name.appendChild(newName)
      newTableRow.appendChild(name)
   
      //Create td for price
      let price = document.createElement("td")
      let newPrice = document.createElement("p")
      newPrice.innerHTML = furnitureData.price
      price.appendChild(newPrice)
      newTableRow.appendChild(price)
   
      //Create td for decFactor
      let decFactor = document.createElement("td")
      let newFactor = document.createElement("p")
      newFactor.innerHTML = furnitureData.decFactor
      decFactor.appendChild(newFactor)
      newTableRow.appendChild(decFactor)
   
      //Create td for price
      let checkBox = document.createElement("td")
      let newCheckBox = document.createElement("input")
      newCheckBox.type = "checkbox"
      newCheckBox.disabled = false
      checkBox.appendChild(newCheckBox)
      newTableRow.appendChild(checkBox)
   
      document.querySelector("tbody").appendChild(newTableRow)
   
    })
   
    let buttonBye = document.querySelectorAll("button")[1]
   
    buttonBye.addEventListener("click", (e) => {
      let allCheckedBoxes = document.querySelectorAll("tbody input")
      let textArea = document.querySelectorAll("textarea")
      textArea = textArea[textArea.length - 1]
      
   
      allCheckedBoxes.forEach(obj => {
        if (obj.checked) {
          let currentElemetn = obj.parentElement
   
          let decFactor = Number(currentElemetn.previousElementSibling.children[0].innerHTML)
          let price = Number(currentElemetn.previousElementSibling.previousElementSibling.children[0].innerHTML)
          let name = currentElemetn.previousElementSibling.previousElementSibling.previousElementSibling.children[0].innerHTML
   
          arrayNames.push(name)
          totalPrice += price
          avgPrice += decFactor
        }
      })
   
      textArea.innerHTML += `Bought furniture: ${arrayNames.join(', ')}\n`
      textArea.innerHTML += `Total price: ${totalPrice.toFixed(2)}\n`
      textArea.innerHTML += `Average decoration factor: ${(avgPrice/arrayNames.length)}`
    })
  }