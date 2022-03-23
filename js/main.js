function createHtml(data) {
    var iconsObject = data
    var iconsContainer = document.getElementById("icons")
    var iconsHtml = ""

    Object.keys(iconsObject).forEach(key => {
        const obj = iconsObject[key]

        let iconDiv = document.createElement("div")
        iconDiv.append(obj.code)
        iconDiv.classList.add('icon-container')

        console.log(obj.code)

        let nameDiv = document.createElement("div")
        nameDiv.append(obj.name)
        nameDiv.classList.add('label')

        let itemDiv = document.createElement("div")
        itemDiv.append(iconDiv, nameDiv)
        itemDiv.classList.add('item')

        iconsHtml += itemDiv
    })

    iconsContainer.innerHTML = iconsHtml
}

function main() {

    fetch("assets/icons.json")
    .then(function (response) {
        return response.json()
    })
    .then(createHtml)

}
main()