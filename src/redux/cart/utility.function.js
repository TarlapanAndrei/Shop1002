export const addItemsToArray = (arrayForItems, itemToAdd) =>{
  const itemChek = arrayForItems.find(item => item.id === itemToAdd.id)
  console.log(5)
  if(itemChek){
    console.log(8)
  return arrayForItems.map(item =>(
    item.id === itemToAdd.id ?
    {...item, quantity: item.quantity+1}:item
  ))} else {
    console.log(6)
    arrayForItems = [...arrayForItems, {...itemToAdd, quantity:1}]
  }
  return arrayForItems;
}
export const minusAnItemFromArray = (arrayForItems, itemToMinus) =>{
  if(itemToMinus.quantity > 1){
   return arrayForItems.map(item => (
      item.id === itemToMinus.id ? 
      {...item, quantity: item.quantity -1} : item
    ))
  } else {
    return arrayForItems.filter(item => item.id !== itemToMinus.id)
  }
}