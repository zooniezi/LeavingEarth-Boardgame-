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