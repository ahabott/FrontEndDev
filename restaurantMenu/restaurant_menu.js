const breakfastMenu = ['Pancakes- $5', 'Eggs Benedict- $11.99', 'Oatmeal- $7.99', 'Frittata- $15'];
const mainCourseMenu = ['Steak- $20', 'Pasta- $18', 'Burger- $12', 'Salmon- $14.99'];
const dessertMenu = ['Cake- $5', 'Ice Cream- $7', 'Pudding- $3', 'Fruit Salad- $9'];

const breakfastMenuItemsHtml = breakfastMenu.map(function(item, index){
    return `<p>Item ${index+1}: ${item}</p>`
}).join('')

document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHtml

let mainCourseItem = ''
mainCourseMenu.forEach(function(item, index){
    mainCourseItem= mainCourseItem + `<p>Item ${index+1}: ${item}</p>`
})
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem

let dessertItem = ''
for(i=0; i< dessertMenu.length; i++){
    dessertItem = dessertItem + `<p>Item ${i+1}: ${dessertMenu[i]}</p>`
}

document.getElementById("dessertMenuItems").innerHTML = dessertItem