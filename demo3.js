const listOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
let olEl = document.createElement('ol')
//let divEl = document.createEvent('div')
const divEl =document.getElementById('listOfweek')

for(let i = 0; i < listOfWeek.length; i++)
{
let liEl = document.createElement('li')

liEl.textContent = `${listOfWeek[i]}`
console.log(`${listOfWeek[i]}`)
olEl.appendChild(liEl)
}
divEl.appendChild(olEl)