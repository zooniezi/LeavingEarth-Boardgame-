//DATA

//

function accessById(id_code) {
    return document.getElementById(id_code)
}

function accessByClass(class_code) {
	return document.getElementsByClassName(class_code)
}

function boost(thrust, mass, difficulty) {
	if(mass * difficulty <= thrust) {
        return true
    }
    return false
}


function popUp(tabCode) {
    var temp = accessByClass("tab")
    for(var i = 0; i < 5; ++i) {
        temp[i].style.display = "none"
        temp[i].style.visibility = "hidden"
    }
    temp[tabCode].style.display = "block"
    temp[tabCode].style.visibility = "visible"
}

function nextTurn() {
	var year = (document.getElementById("timeline").innerText*1)
	var nowMoney = (document.getElementById("moneyleft").innerText.split("$")[1]*1)
	if(nowMoney != 0){
		if(!confirm("You don't use your money all. Are you sure?")){
			return
		}
	}
	var money = "$25"
	year += 1
	document.getElementById("timeline").innerText = year
	document.getElementById("moneyleft").innerText = money
}