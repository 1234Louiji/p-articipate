var navigation = document.createElement("div")
const bar = [{name:'intro',function: null},{name:'categories', function: null},{name:'community', function: null}]
navigation.innerHTML = `<div onclick="window.location.replace(https://1234louiji.github.io/p-articipate/)">P-ARTICIPATE</div>`
for(let i in bar){
    bar[i].element = document.createElement("div")
    bar[i].element.textContent = bar[i].name[0].toUpperCase() + bar[i].name.slice(1)
    navigation.appendChild(bar[i].element)
}
document.getElementById("navigate").appendChild(navigation)