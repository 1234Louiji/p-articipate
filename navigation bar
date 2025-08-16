var navigation = document.createElement("div")
const bar = [{name:'intro',function: null},{name:'categories', function: null},{name:'community', function: null}]
var logo = document.createElement("div")
logo.onclick = location.reload(true)
logo.textContent = 'P-ARTICIPATE'
for(let i in bar){
    console.log(bar[i])
    bar[i].element = document.createElement("div")
    bar[i].element.textContent = bar[i].name.toLocaleUpperCase(0)
    navigation.appendChild(bar[i].element)
}
document.getElementById("navigate").appendChild(navigation)