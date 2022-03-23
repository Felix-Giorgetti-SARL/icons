function createHtml(data) {
    var iconsArray = data
    var iconsContainer = document.getElementById("icons")
    var iconsHtml

    iconsArray.forEach(element => {
        iconsHtml += obj.code + "<br>" + "Name: " + obj.name + " <br>"
    })

    iconsContainer.innerHTML = iconsHtml
}

function main() {

    fetch("assets/icons.json")
    .then(function (response) {
        return response.json()
    })
    .then(createHtml(data))

}
main()