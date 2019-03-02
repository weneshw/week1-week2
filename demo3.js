const listOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

const listOfStudent =['Mina Ford','Sara Chase','Anderson Jeff','Dan jack','Smith Bill']
let olEl = document = listOfStudent
//let olEl = document.createElement('ol')
const divEl = document.createElement(divEl)
//let divEl = document.createEvent('div')
const divEl =document.getElementById('listOfweek')

for(let i = 0; i < listOfWeek.length; i++)
{
let liEl = document.createElement('li')

liEl.textContent = `${listOfWeek[i]}`
console.log(`${listOfWeek[i]}`)
olEl.appendChild(liEl)

 divEl.appendChild(olEl)

}
for(let i = 0; i < listOfStudent.lengtht; i++)
{
let liEl = document.createElement('li')
liEl.textContent - `${listOfStudent.lengtht[i]}`
console.log(`listOfStudet[i]}`)
olEl.appendChild(liEl)
divEl.appendChild(olEl)
}