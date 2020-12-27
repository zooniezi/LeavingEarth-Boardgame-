//tech 종류 12 개
var numtech = 12
var success = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]	//success 카드 개수
var sucleft = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
var bought = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]	// tech 구매 유무 및 연구 상태 0: ban 1: dev 2: complete
var techindex = ["junorocket.png","atlasrocket.png","soyuzrocket.png","saturnrocket.png","ProtonRocket.png","ionthrusterTech.png","landing.png","re-entry.png","surveying.png","rendezvous.png","lifesupport.png","Aerobreaking.png"]


function update() { // 화면 렌더링 용 함수
	for(var i =0; i<numtech; i++){	// tech 상태 갱신	
		if(bought[i]==1){
			sucleft[i] = success[i][0]+success[i][1]+success[i][2]	//남은 연구카드 최신화
			for(var j = 0; j<(3-sucleft[i]); j++){	//과녁 이미지 개수 갱신
				document.getElementsByClassName("outcomeimg")[j+(i*3)].style = "display: none; visibility: hidden"
			}
		}
		if(bought[i]==1 && sucleft[i]==0){
			bought[i] = 2
		}
		if(bought[i] == 1){
			document.getElementsByClassName("researchimg")[i].src = "dev.png"
			document.getElementsByClassName("researchimg")[i].name = "2"		//기술 구입시 아이콘 변경
		}
		if(bought[i] == 2){
			document.getElementsByClassName("researchimg")[i].src = "star.png"	//기술 안정화시 아이콘 변경
		}
	}
	
}

function buytech(num) {	//기술 구입하는 함수
	var dollar = parent.document.getElementById("moneyleft")
	var money_left = dollar.innerText.substr(1,2) * 1
	if(bought[num]!=0){
		alert("You already bought this technology!")
		return
	}
	if(document.getElementsByName("option")[0].checked){	//buy 체크박스 체크여부
		if(num == 4 && bought[2] == 0){
			alert("You need to buy Soyuz Rocket Technology First!")
			return
		}
		if(num == 11 && bought[7] == 0){
			alert("You need to buy Re-Entry Technology First!")
			return
		}
		if(!confirm("Are you sure to buy this Technology?")){return}
		if(money_left-10>=0){	//현재 잔고로 구매가능여부 확인
			dollar.innerText = "$" + (money_left - 10)
			bought[num]=1 //change researchimg to 'dev.png'
			for(var i=0; i<3; i++){ //Allocating success cards 4 : 1 : 1
				var rannum = Math.floor(Math.random()*6)
				if(rannum >= 0 && rannum <= 3){
					success[num][0] += 1
				}
				if(rannum == 4){
					success[num][1] += 1
				}
				if(rannum == 5){
					success[num][2] += 1
				}
				document.getElementsByClassName("outcomeimg")[i+(num*3)].style = ""
			}
		}
		else{
			alert("Not enough budget!")
			return
		}
	}
	else{
		return
	}
	update()
}

function research(tech) {	//연구결과 반영함수 성공 : 0리턴 작은실패 : 1리턴 큰실패 : 2리턴
	var dollar = parent.document.getElementById("moneyleft")
	var money_left = dollar.innerText.substr(1,2) * 1
	
	if(bought[tech] == 2){		//연구가 끝난거라 연구할 필요가 없음
		return
	}
	
	var standard	// tech번째 기술에 존재하는 연구카드 중 무작위로 1개 추출 
	while(true){
		var temp = Math.floor(Math.random()*3)
		if(success[tech][temp] != 0){
			standard = temp
			break
		}
	}
	if(temp==0){	//when the outcome card result is success
		if(!confirm("Success! Will you remove this outcome? Cost : $10")){
			return
		}
		else if(money_left-10>=0){	//남은 잔고로 제거 가능여부 확인
			dollar.innerText = "$" + (money_left - 10)
			success[tech][0] -= 1
			update()
			return 0
		}
		else{
			alert("Not enough budget!")
		}
	}
	else if(temp == 1){		//When the outcome result is minifail
		if(!confirm("Minor Failure! Will you remove this outcome? Cost : $5")){
			return
		}
		else if(money_left-5>=0){	//남은 잔고로 제거 가능여부 확인
			dollar.innerText = "$" + (money_left - 5)
			success[tech][1] -= 1
			update()
			return 1
		}
		else{
			alert("Not enough budget!")
		}
	}
	else if(temp == 2){		//When the outcome result is hugefail
		if(!confirm("Major Failure! Will you remove this outcome? Cost : $5")){
			return
		}
		else if(money_left-5>=0){	//남은 잔고로 제거 가능여부 확인
			dollar.innerText = "$" + (money_left - 5)
			success[tech][2] -= 1
			update()
			return 2
		}
		else{
			alert("Not enough budget!")
		}
	}
	else{alert("Something wrong!!!")}	//버그 잡기용
	
	update()
}


function tabmenu(id) {	//이미지 띄우는 함수
	var temp = document.getElementsByClassName("techimage")
	for(var i = 0; i<temp.length; i++){
		temp[i].setAttribute("style","display: none")
	}
	document.getElementById(id).setAttribute("style","")
}

function tabout() {	//이미지 가리는 함수
	var temp = document.getElementsByClassName("techimage")
	for(var i = 0; i<temp.length; i++){
		temp[i].setAttribute("style","display: none")
	}
} 
