//DATA

//

function accessById(id_code) {
    return document.getElementById(id_code)
}

function accessByClass(class_code) {
	return document.getElementsByClassName(class_code)
}

function zooming(address){
	var target = parent.document.getElementById("zoom") //zoom은 돋보기 이미지
    var temp = document.getElementsByClassName("tile")[address].children[0]
	target.src = temp.src
}

function popUp(target) {
    var temp = accessById("area")
    temp.src = "Interface/" + target + ".html"
}
