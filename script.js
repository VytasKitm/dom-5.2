let body = document.querySelector("body")
let id = document.createElement("input")
let labelId = document.createElement("label")
let name = document.createElement("input")
let labelName = document.createElement("label")
let quantity = document.createElement("input")
let labelQuantity = document.createElement("label")
let inputSelect = document.createElement("input")
let labelSelectInput = document.createElement("label")

let buttonInput = document.createElement("button")
let buttonDeleteLS = document.createElement("button")
let buttonDelete = document.createElement("button")
let buttonEdit = document.createElement("button")
let buttonTestTable = document.createElement("button")
let buttonSelect = document.createElement("button")

let headerSelect = document.createElement("h4")
let info = document.createElement("h3")

let buttonDiv = document.createElement("div")
let selectButtonDiv = document.createElement("div")
let mainDiv = document.createElement("div")
let selectDiv = document.createElement("div")

let form = document.createElement("form")
let formSelect = document.createAttribute("form")

let tableSelect 

//-------------------------------------------------------------
let buttonXCode = document.createElement("button")
let buttonXName = document.createElement("button")
let buttonXQuantity = document.createElement("button")

let inputCodeDiv = document.createElement("div")
let inputNameDiv = document.createElement("div")
let inputQuantityDiv = document.createElement("div")

inputCodeDiv.style.display = "flex"
inputNameDiv.style.display = "flex"
inputQuantityDiv.style.display = "flex"

buttonXCode.textContent = "X"
buttonXName.textContent = "X"
buttonXQuantity.textContent = "X" 

buttonXCode.style.marginRight = "5px"
buttonXName.style.marginRight = "5px"
buttonXQuantity.style.marginRight = "5px"
//-------------------------------------------------------------

const rootDiv = document.getElementById("root")

id.setAttribute("placeholder","only numbers..")
buttonInput.textContent = "Insert New"
buttonEdit.textContent = "Edit Item"
buttonDeleteLS.textContent = "Delete from LS"
buttonDelete.textContent = "Delete Table"
buttonTestTable.textContent = "Add Table"
buttonSelect.textContent = "Select from LS"

inputSelect.setAttribute("id","inputSelect")
inputSelect.setAttribute("type","number")
inputSelect.setAttribute("placeholder","only numbers..")

info.style.height = "30px"
headerSelect.textContent = "Find product by code"
body.style.minHeight = "100vh"
body.style.margin = "0"
body.style.background = "linear-gradient(165deg, rgba(164,221,246,1) 0%, rgba(232,97,82,0.8) 100%)"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "cover"

id.style.flexGrow = "1"
name.style.flexGrow = "1"
quantity.style.flexGrow = "1"

id.setAttribute("id","id")
id.setAttribute("type","number")
name.setAttribute("id","name")
name.setAttribute("type","text")
quantity.setAttribute("id","quantity")
quantity.setAttribute("type","number")
buttonInput.setAttribute("id","buttonInput")

labelId.setAttribute("for","id")
labelId.textContent = "Product Code:"
labelName.setAttribute("for","name")
labelName.textContent = "Product Name:"
labelQuantity.setAttribute("for","quantity")
labelQuantity.textContent = "Product Quantity:"
labelSelectInput.setAttribute("for","inputSelect")
labelSelectInput.textContent = "Product Code"

buttonDiv.style.display = "flex"
buttonDiv.style.justifyContent = "space-around"
buttonDiv.style.marginTop = "20px"
selectButtonDiv.style.display = "flex"
selectButtonDiv.style.justifyContent = "center"
selectButtonDiv.style.marginTop = "20px"

buttonDiv.appendChild(buttonInput)
buttonDiv.appendChild(buttonEdit)
buttonDiv.appendChild(buttonDeleteLS)
buttonDiv.appendChild(buttonDelete)
buttonDiv.appendChild(buttonTestTable)

selectButtonDiv.appendChild(buttonSelect)

//----------------------------------------------------------
inputCodeDiv.append(buttonXCode, id)
inputNameDiv.append(buttonXName, name)
inputQuantityDiv.append(buttonXQuantity, quantity)

mainDiv.style.display = "flex"
mainDiv.style.flexDirection = "column"
mainDiv.style.width = "600px"
mainDiv.style.marginTop = "50px"
mainDiv.appendChild(labelId)
// mainDiv.appendChild(buttonXCode)
// mainDiv.appendChild(id)
mainDiv.appendChild(inputCodeDiv)
mainDiv.appendChild(labelName)
mainDiv.appendChild(inputNameDiv)
// mainDiv.appendChild(name)
mainDiv.appendChild(labelQuantity)
mainDiv.appendChild(inputQuantityDiv)
// mainDiv.appendChild(quantity)
mainDiv.appendChild(buttonDiv)
mainDiv.appendChild(info)

selectDiv.style.display = "flex"
selectDiv.style.flexDirection = "column"
selectDiv.style.width = "600px"
selectDiv.style.marginTop = "50px"
selectDiv.appendChild(headerSelect)
selectDiv.appendChild(labelSelectInput)
selectDiv.appendChild(inputSelect)
selectDiv.appendChild(selectButtonDiv)


rootDiv.style.display = "flex"
rootDiv.style.justifyContent = "space-evenly"
rootDiv.style.flexWrap = "wrap"
rootDiv.appendChild(mainDiv)
rootDiv.appendChild(selectDiv)



const preke = {
        id: undefined,
        name: undefined,
        quantity: undefined
}

const testLentele = [
        {id:184939,name:"Vysnios",quantity:8745},
        {id:254324,name:"Slyvos",quantity:234},
        {id:353243,name:"Kopustai",quantity:3344},
        {id:464432,name:"Braskes",quantity:84},
        {id:574464,name:"Apelsinai",quantity:5733},
        {id:646344,name:"Bananai",quantity:823},
        {id:700632,name:"Kriauses",quantity:23},
        {id:837327,name:"Zemuoges",quantity:164},
        {id:904394,name:"Persikai",quantity:98},
        {id:183732,name:"Mandarinai",quantity:7583},
        {id:120099,name:"Obuoliai",quantity:311},
]


function createTable() {
        let table = document.createElement("table")
        let headTr = document.createElement("tr")
        let headId = document.createElement("th")
        let headCode = document.createElement("th")
        let headName = document.createElement("th")
        let headQuantity = document.createElement("th")
        table.style.borderCollapse = "collapse"
        table.style.padding = "20px"
        table.style.width = "600px"
        headId.style.width = "50px"
        headId.style.borderBottom = "2px solid black"
        headId.style.borderRight = "2px solid black"
        headCode.style.borderBottom = "2px solid black"
        headCode.style.borderRight = "2px solid black"
        headName.style.borderBottom = "2px solid black"
        headName.style.borderRight = "2px solid black"
        headQuantity.style.borderBottom = "2px solid black"
        headId.style.padding = "4px"
        headCode.style.padding = "4px"
        headName.style.padding = "4px"
        headQuantity.style.padding = "4px"
        headCode.style.width = "50px"
        headName.style.width = "450px"
        headQuantity.style.width = "50px"

        headId.textContent = "Id"
        headCode.textContent = "Code"
        headName.textContent = "Name"
        headQuantity.textContent = "Qty."

        headTr.appendChild(headId)
        headTr.appendChild(headCode)
        headTr.appendChild(headName)
        headTr.appendChild(headQuantity)

        table.appendChild(headTr)

        return table
}

function addRowToTable(id,code,name,quantity,setId) {
        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        let tdCode = document.createElement("td")
        let tdName = document.createElement("td")
        let tdQuantity = document.createElement("td")
        if (setId != -1) {
                tr.setAttribute("id",`${setId}`)
        }
        tdId.style.borderBottom = "1px solid black"
        tdId.style.borderRight = "1px solid black"
        tdCode.style.borderBottom = "1px solid black"
        tdCode.style.borderRight = "1px solid black"
        tdName.style.borderBottom = "1px solid black"
        tdName.style.borderRight = "1px solid black"
        tdQuantity.style.borderBottom = "1px solid black"
        tdId.style.padding = "4px"
        tdCode.style.padding = "4px"
        tdName.style.padding = "4px"
        tdQuantity.style.padding = "4px"
        tdId.textContent = id
        tdCode.textContent = code
        tdName.textContent = name
        tdQuantity.textContent = quantity
        tr.appendChild(tdId)
        tr.appendChild(tdCode)
        tr.appendChild(tdName)
        tr.appendChild(tdQuantity)
        return tr
}


function drawTable() {
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        let table = document.querySelector("#mainTable")
        if (table) {
                table.remove()
        }
        table = createTable()
        table.setAttribute("id","mainTable")
        for (let prekeId in prekes) {
                let tr = addRowToTable(+prekeId+1,prekes[prekeId].id,prekes[prekeId].name,prekes[prekeId].quantity,-1)
                // let tr = document.createElement("tr")
                // let tdId = document.createElement("td")
                // let tdCode = document.createElement("td")
                // let tdName = document.createElement("td")
                // let tdQuantity = document.createElement("td")
                // tdId.style.borderBottom = "1px solid black"
                // tdId.style.borderRight = "1px solid black"
                // tdCode.style.borderBottom = "1px solid black"
                // tdCode.style.borderRight = "1px solid black"
                // tdName.style.borderBottom = "1px solid black"
                // tdName.style.borderRight = "1px solid black"
                // tdQuantity.style.borderBottom = "1px solid black"
                // tdId.style.padding = "4px"
                // tdCode.style.padding = "4px"
                // tdName.style.padding = "4px"
                // tdQuantity.style.padding = "4px"
                // tdId.textContent = +prekeId+1
                // tdCode.textContent = prekes[prekeId].id
                // tdName.textContent = prekes[prekeId].name
                // tdQuantity.textContent = prekes[prekeId].quantity
                // tr.appendChild(tdId)
                // tr.appendChild(tdCode)
                // tr.appendChild(tdName)
                // tr.appendChild(tdQuantity)
                table.appendChild(tr)
                form.appendChild(table)
        }
        mainDiv.appendChild(form)
}

function createTableSelect() {
        tableSelect = document.getElementById("tableSelect")
        if (!tableSelect) {
                tableSelect = createTable()
                tableSelect.setAttribute("id","tableSelect")
                tableSelect.style.marginTop = "84px"
                tableSelect.style.marginBottom = "50px"
        }   
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        // for (let prekeId in prekes) {
                // if (+inputSelect.value-1 == prekeId && !document.getElementById(`${prekes[prekeId].id}`)) {
                        if (!document.getElementById(`${prekes[+inputSelect.value-1].id}`)) {
                        let tr = addRowToTable("",
                                                prekes[+inputSelect.value-1].id,
                                                prekes[+inputSelect.value-1].name,
                                                prekes[+inputSelect.value-1].quantity,
                                                prekes[+inputSelect.value-1].id,)
                        tableSelect.appendChild(tr)
                        }
                        else if (document.getElementById(`${prekes[+inputSelect.value-1].id}`)) {
                                info.textContent = "Toks produktas jau yra pridetas"
                        }
}



function drawTableSelect() {
        tableSelect.remove()
        updateTableSelect()
}

function deleteSelect() {
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        for (let i = 1; i < tableSelect.rows.length; i++) {
                console.log(`select table row: ${i}. prekes id: ${prekes[+id.value-1].id}`)
                if (tableSelect.rows[i].id == prekes[+id.value-1].id) {
                        tableSelect.removeChild(tableSelect.childNodes[i])
                }
        }
        // drawTableSelect()
        updateTableSelect()
}

function updateTableSelect() {
        tableSelect.remove()
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        for (let i = 1; i < tableSelect.rows.length; i++) {
                for (let preke of prekes){
                        if (tableSelect.rows[i].id == preke.id){
                                console.log(`tiko: ${preke.id} ${i}`)
                                tableSelect.childNodes[i].childNodes[0].textContent = i
                                tableSelect.childNodes[i].childNodes[2].textContent = preke.name
                                tableSelect.childNodes[i].childNodes[3].textContent = preke.quantity
                        }
                }
        }
        selectDiv.appendChild(tableSelect)
}

const prekes = localStorage.getItem("prekes") == null ? localStorage.setItem("prekes",JSON.stringify([])) : JSON.parse(localStorage.getItem("prekes"))

buttonInput.addEventListener("click", () => {
        const prekes = JSON.parse(localStorage.getItem("prekes"))

        if (id.value == '') {
                info.textContent = "Butina ivesti prekes koda"
        }
        else if (name.value == '') {
                info.textContent = "Iveskite prekes pavadinima"
        }
        else if ( quantity.value == '') {
                info.textContent = "Iveskite prekes kieki"
        }
        else if (prekes.some(el => el.id === id.value)){
                info.textContent = "Toks prekes kodas jau yra"
        }
        else {
                const preke = {}
                preke.id = id.value
                preke.name = name.value
                preke.quantity = quantity.value
                info.textContent = ''
                id.value = ''
                name.value = ''
                quantity.value = ''
                form.reset()
                prekes.push(preke)
                localStorage.setItem("prekes",JSON.stringify(prekes))
                drawTable()
        }
})

buttonEdit.addEventListener("click", () => {
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        if (name.value != '') {
                prekes[+id.value-1].name = name.value
        }
        if (quantity.value != '') {
               prekes[+id.value-1].quantity = quantity.value
        }    
        localStorage.setItem("prekes",JSON.stringify(prekes))
        drawTable()
        if (tableSelect) {
                updateTableSelect()
        }
})

buttonDeleteLS.addEventListener("click", () => {
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        tableSelect = document.getElementById("tableSelect")
        if (tableSelect) {
                deleteSelect()
                prekes.splice(+id.value-1,1)
                localStorage.setItem("prekes",JSON.stringify(prekes))
                drawTable()        
        }   
        else {
                prekes.splice(+id.value-1,1)
                localStorage.setItem("prekes",JSON.stringify(prekes))
                drawTable()
        }
})

buttonDelete.addEventListener("click", () => {
        localStorage.removeItem("prekes")
        localStorage.setItem("prekes",JSON.stringify([]))
        let table = document.querySelector("table")
        if (table) {
                table.remove()
        }
        info.textContent = ""
})

buttonTestTable.addEventListener("click", ()=> {
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        prekes.push(...testLentele)
        localStorage.setItem("prekes",JSON.stringify(prekes))
        info.textContent = ""
        drawTable()
})

buttonXCode.addEventListener("click", ()=> {
        id.value = ''
        id.focus()
})

buttonXName.addEventListener("click", ()=> {
        name.value = ''
        name.focus()
})

buttonXQuantity.addEventListener("click", ()=> {
        quantity.value = ''
        quantity.focus()
})



buttonSelect.addEventListener("click",() => {
        const prekes = JSON.parse(localStorage.getItem("prekes"))
        for (let prekeId in prekes) {
                if (+inputSelect.value-1 == prekeId) {
                        createTableSelect(prekeId)
                        updateTableSelect()
                }
        }
        inputSelect.value = ''
        inputSelect.focus()
})


drawTable()