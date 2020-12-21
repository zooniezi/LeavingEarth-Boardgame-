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

function tabmenu(id) {
	console.log("hi")
	var temp = document.getElementsByClassName("tab")
	for(var i = 0; i<temp.length; i++){
		temp[i].setAttribute("style","display: none")
	}
	document.getElementById(id).setAttribute("style","")
}

function update() { //화면 갱신
	;
}

function popUpPage(kind) { //태그에 맞는 페이지 불러오기
    ;
}

function mount(target) { //인벤토리의 내용물을 로켓에 탑재하는 함수
    ;
}