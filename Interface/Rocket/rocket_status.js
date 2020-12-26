var temparray = document.getElementsByClassName("amount")
var itemarray = []
var boxchecked = document.getElementsByName("option")[0]
var itemindex = [
"juno.png",
"atlas.png",
"soyuz.png",
"saturn.png",
"Proton.png",
"ionthruster.png",
"vostok.png",
"apollo.png",
"eagle.png",
"probe.png",
"Explorer.png",
"Galileo.png",
"aldrin.png",
"Pilot.png",
"Engineer.png",
"Doctor.png",
"Scientist.png",
"supply.png",
"moonsample.png",
"mercurysample.png",
"venussample.png",
"marssample.png",
"phobossample.png",
"ceressample.png",
"GanymedeSample.png",
"CalistoSample.png",
"EuropaSample.png",
"IoSample.png",
"TitanSample.png",
"EnceladusSample.png"
]
function inventoryPage() {
	var ans = parent.document.getElementsByClassName("tab")[1].contentDocument
	return ans
}

function nowitem () {
	for(var i =0; i<temparray.length; i++){
		itemarray[i] = temparray[i].innerHTML.trim()
	}
}

function drop(temCode, rocketNum) {	//로켓의 내용물을 인벤토리로 보내는 함수
	nowitem()
	if(!boxchecked.checked){	//체크박스 체크여부 확인하기
		return
	}
	if(itemarray[temCode+(rocketNum*19)] == 0){
		return
	}
	itemarray[temCode+(rocketNum*19)] = itemarray[temCode+(rocketNum*19)]-1
	if(itemarray[temCode+(rocketNum*19)] == 0){
		document.getElementsByClassName("components")[temCode+(rocketNum*19)].style.display = "none"
		document.getElementsByClassName("components")[temCode+(rocketNum*19)].style.visibility = "hidden"
		document.getElementsByClassName("amount")[temCode+(rocketNum*19)].style.visibility = "hidden"
        document.getElementsByClassName("amount")[temCode+(rocketNum*19)].style.display = "none"
	}
	
	var temp = document.getElementsByClassName("amount")[temCode+(rocketNum*19)]
	temp.innerText = itemarray[temCode+(rocketNum*19)]	// rocket_status 페이지 내용 최신화
	
	//about inventory.html page
	var page = inventoryPage()
	var num = page.getElementsByClassName("item")[temCode]
	num.innerText = num.innerText.split(" : ")[0] + " : " + (num.innerText.split(" : ")[1]*1 +1)
    
}

function toolTip(index) {
	 var target = parent.document.getElementById("toolTip")
	 target.src = "Interface/ItemImage/" + itemindex[index]
}
function toolTipOut() {
	var target = parent.document.getElementById("toolTip")
	target.src = ""
}
/*
function debug() {
	
	if(boxchecked.checked == true){
		return 1;
	}
	return 0;
}*/