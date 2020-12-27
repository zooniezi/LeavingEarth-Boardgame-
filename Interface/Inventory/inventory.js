//rocket data
var juno = 0
var atlas = 0
var soyuz = 0
var saturn = 0
var proton = 0
//thruster data
var ionThruster = 0
//capsule data
var vostok = 0
var apollo = 0
var eagle = 0
var probe = 0
var probe = 0
var explorer = 0
var galileo = 0
var aldrin = 0
//supply data
var supplies = 0
//astronaut data
var pilot = 0
var engineer = 0
var doctor = 0
var scientist = 0
//sample data
var moonSample = 0
var mercurySample = 0
var venusSample = 0
var marsSample = 0
var phobosSample = 0
var ceresSample = 0
var ganymedeSample = 0
var calistoSample = 0
var europaSample = 0
var ioSample = 0
var titanSample = 0
var enceladusSample = 0
var itemarray = [0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0]
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

function rocketPage() {
	
	var answer = parent.document.getElementsByClassName("tab")[3].contentDocument
	return answer
}

function technologyPage() {
	var answer = parent.document.getElementsByClassName("tab")[4].contentDocument
	return answer
}

function noRocketMultiCheck(chk) {
	
	var objnum = document.getElementsByName("option")
	for(var i = 0; i<objnum.length; i++){
		if(i==chk){
			continue
		}
		objnum[i].checked = false
	}
	
	
}
function update () {
	for(var i = 0; i<itemarray.length; i++){
		itemarray[i] = (document.getElementsByClassName("item")[i].innerText.split(" : ")[1])*1
	}
}
function tabmenu(id) {
	var temp = document.getElementsByClassName("tab")
	for(var i = 0; i<temp.length; i++){
		temp[i].setAttribute("style","display: none")
	}
	document.getElementById(id).setAttribute("style","")
}

function buy(item_num, item_price) {
	update()
	var techpage = technologyPage()
	
	for(var i = 0; i<6; i++){
		if(techpage.getElementsByClassName("researchimg")[i].name == "" && item_num == i){
			alert("Develope the prior research first to deal with this Rocket!")
			return
		}
	}
    var dollar = parent.document.getElementById("moneyleft")
	var money_left = dollar.innerText.substr(1,2) * 1
	if(document.getElementsByName("option")[0].checked){	//buy 라디오 버튼 체크여부
			if(money_left-item_price>=0){	//현재 잔고로 구매가능여부 확인
				dollar.innerText = "$" + (money_left - item_price)
				itemarray[item_num] = itemarray[item_num]+1
			}
            else{
                alert("Not enough budget!")
            }
	}
    var temp = document.getElementsByClassName("item")[item_num]
    temp.innerText = temp.id + " : " + itemarray[item_num]
}



function popUpPage(kind) { //태그에 맞는 페이지 불러오기
    
}

function mount(temCode) { //인벤토리의 내용물을 로켓에 탑재하는 함수
	
	update()
	var rocket = -1
	for(var i = 0; i<6; i++){
		if(document.getElementsByName("option")[i].checked){
			rocket = (i-1)  //로켓 인덱스 받아옴 (성공적임)//
		}
	}
    
    if(rocket == -1)
    {return} //buy 옵션일 때, 어떤 버튼도 선택되지 않은 경우에는 작동하지 않음
    
	if(itemarray[temCode] <= 0) {
        alert("You have none of this")
        return
    } // mount하려는 아이템이 0개일때
    
    //about inventory.html
	itemarray[temCode] = itemarray[temCode]-1
	var temp = document.getElementsByClassName("item")[temCode]
	temp.innerText = temp.id + " : " + itemarray[temCode]	// inventory 페이지 내용 최신화
    var page = rocketPage()
    
	//about rocket_status.html
	var itemname = page.getElementsByClassName("components")[temCode+(rocket*19)]
	var amount = page.getElementsByClassName("amount")[temCode+(rocket*19)]
    itemname.style.display = "inline"
	itemname.style.visibility = "visible"
    amount.style.display = "inline-block"
	amount.style.visibility = "visible" //아이템이 들어가면 보이게 해줌
    amount.innerText = (amount.innerText * 1)+1//로켓 페이지 내용 수정
}

function toolTip(index) {
	 var target = parent.document.getElementById("toolTip")
	 target.src = "Interface/ItemImage/" + itemindex[index]
}

function toolTipOut() {
	var target = parent.document.getElementById("toolTip")
	target.src = ""
} 

function debug() {
	for(var i = 0; i<itemarray.length; i++){
	console.log(document.getElementsByClassName("item")[i].innerText)
	}
}