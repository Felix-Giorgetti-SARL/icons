function createHtml(data) {
    var iconsObject = data
    var iconsContainer = document.getElementById("icons")
    var datePlaceholder = document.getElementById("date-placeholder")

    fetch('https://api.github.com/repos/Felix-Giorgetti-SARL/icons/commits?per_page=1')
        .then(res => res.json())
        .then(res => {
        datePlaceholder.innerHTML = res[0].commit?.committer?.date.toLocaleString()
    })

    Object.keys(iconsObject).forEach(key => {
        const obj = iconsObject[key]

        let iconDiv = document.createElement("div")
        iconDiv.innerHTML = obj.code
        iconDiv.classList.add('icon-container')

        console.log(obj.code)

        let nameDiv = document.createElement("div")
        nameDiv.append(obj.name)
        nameDiv.classList.add('label')

        let itemDiv = document.createElement("div")
        itemDiv.append(iconDiv, nameDiv)
        itemDiv.classList.add('item')

        iconsContainer.append(itemDiv)
    })


}

function main() {

    fetch("assets/icons.json")
    .then(function (response) {
        return response.json()
    })
    .then(createHtml)

}
main()