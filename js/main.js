function main() {

    fetch("../assets/icons.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })

    var iconsArray = response.json()
    var iconsContainer = document.getElementById("icons")
    var iconsHtml

    iconsArray.forEach(element => {
        iconsHtml += obj.code + "<br>" + "Name: " + obj.name + " <br>"
    })

    iconsContainer.innerHTML = iconsHtml

}
main()