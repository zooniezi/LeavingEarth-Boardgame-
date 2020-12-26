//tech 종류 12 개
var numtech = 12
var success = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]		//success 카드 개수
var bought = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]	// tech 구매 유무 및 연구 상태 0: ban 1: dev 2: complete
var itemindex = ["junorocket.png","atlasrocket.png","soyuzrocket.png","saturnrocket.png","ProtonRocket.png","ionthrusterTech.png","landing.png","re-entry.png","surveying.png","rendezvous.png","lifesupport.png","Aerobreaking.png"]
function update() {
	for(var i =0; i<numtech; i++){	// tech 상태 갱신	
		if(bought[i]==1 && success[i][0]+success[i][1]+success[i][2]==0){
			bought[i] = 2
		}
		if(bought[i] == 1){
			document.getElementsByClassName("researchimg")[i].src = "dev.png"
		}
		if(bought[i] == 2){
			document.getElementsByClassName("researchimg")[i].src = "star.png"
		}
	}
}

function buy(num) {
	var dollar = parent.document.getElementById("moneyleft")
	var money_left = dollar.innerText.substr(1,2) * 1
	if(bought[num]!=0){
		alert("You already bought this technology!")
		return
	}
	if(document.getElementsByName("option")[0].checked){	//buy 체크박스 체크여부
		if(num == 4 && bought[3] == 0){
			alert("You need to buy Soyuz Rocket Technology First!")
			return
		}
		if(num == 11 && bought[7] == 0){
			alert("You need to buy Re-Entry Technology First!")
			return
		}
		if(money_left-10>=0){	//현재 잔고로 구매가능여부 확인
			dollar.innerText = "$" + (money_left - 10)
			bought[num]=1	//change researchimg to 'dev.png'
			for(var i=0; i<3; i++){			//Allocating success cards 4 : 1 : 1
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
	document.getElementsByName("option")[0].checked = false
	update()
}

function tabmenu(id) {
	var temp = document.getElementsByClassName("techimage")
	for(var i = 0; i<temp.length; i++){
		temp[i].setAttribute("style","display: none")
	}
	document.getElementById(id).setAttribute("style","")
}

function tabout() {
	var temp = document.getElementsByClassName("techimage")
	for(var i = 0; i<temp.length; i++){
		temp[i].setAttribute("style","display: none")
	}
} 
