function createHtml(data) {
    var iconsArray = data
    var iconsContainer = document.getElementById("icons")
    var iconsHtml = ""

    Object.keys(iconsArray).forEach(key => {
        const obj = iconsArray[key]
        iconsHtml += obj.code + "<br>" + "Name: " + obj.name + " <br>"
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