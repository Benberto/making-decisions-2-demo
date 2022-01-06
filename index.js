let backPack = []

backPack.push('sword', 'potion')
backPack.push('shield')
backPack.push('food')

let onBelt = backPack.splice(0,1)
let furCoat = 'fur coat'

backPack.push(furCoat)

backPack.pop()

let itemCount = backPack.length

backPack.push("flint", "blanket", "knife", "toothbrush")

let backPack2 = backPack.splice(3,3)

// console.log('Backpack', backPack,'Backpack2: ',backPack2, 'Belt: ', onBelt, 'item-count ',itemCount);

for(let i = 0;i < 3; i++){
  console.log(backPack[i])
}

console.log('________')

for(let i = 0;i < backPack2.length; i++){
  console.log(backPack2[i])
}