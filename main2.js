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


function popUp(target) {
    var temp = accessById("area")
    temp.src = "Interface/" + target + ".html"
}
