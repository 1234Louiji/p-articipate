var navigation = document.createElement("div")
const bar = [{name:'intro',function: null},{name:'categories', function: null},{name:'community', function: null}]
navigation.innerHTML = `<div onclick="location.reload(true)>P-ARTICIPATE</div>"`
for(let i in bar){
    bar[i].element = document.createElement("div")
    bar[i].element.textContent = bar[i].name.toLocaleUpperCase(0)
    navigation.appendChild(bar[i].element)
}
document.getElementById("navigate").appendChild(navigation)