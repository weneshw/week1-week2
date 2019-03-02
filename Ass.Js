


// let listOfStudent =['Mina Ford','Sara Chase','Anderson Jeff','Dan jack','Smith Bill']

// let olEl = document.createElement('ol')
// const divEl = document.getElementById('list')

// for (let i=0; i < listOfStudent.length; i++){
//   let liEl = document.createElement('li')
//   liEl.textContent = listOfStudent[i]
//   olEl.appendChild(liEl)
// }
// divEl.appendChild(olEl)
const students =[
  ['First Name','Mina, Ford','Sara','Anderson','Dan'],
  ['Last Name','Ford','Chase','Jeff','Smith']
]
function createTable(arr){
  let tbl= document.createElement('table')
  
  for (let i = 0; i < arr.length; i++){
    let tr = document.createElement('tr')
    for (let j = 0; j < arr[i].length; j++){
    let td = document.createElement('td')
    td.textContent = arr[i][j]
    tr.appendChild(td)
  }
tbl.appendChild(tr)
}
document.querySelector('body').appendChild(tbl)
}
createTable(students)

                