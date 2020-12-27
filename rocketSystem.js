class spaceShip {
	consturctor(num, location, rockets, ionThrusters, extraParts, timeRemaining = 0){
		this.num = num
		this.location = location
		this.rockets = rockets
		this.ionThrusters = ionThrusters
		this.extraParts = extraParts
		this.timeRemaining = timeRemaining
	}
    
    calcMass () {
        let result = 0
        for(let i=0; i<this.rocket.length; i++){
            result += this.rockets[i].mass
        }
        for(let i=0; i<this.ionThrusters.length; i++){
            result += this.ionThrusters[i].mass
        }
   		for(let i=0; i<this.extraParts.length; i++){
			result += this.extraParts[i].mass
		}
        return result
	}
    
    calcThrustPower (year, usingRockets = this.rockets) {
        let result = 0
        for(let i=0; i<this.ionThrusters.length; i++){
            result += this.ionThrusters[i].thrustPerYear * year
        }
        for(let i=0; i<usingRockets.length; i++){
            result += usingRockets.thrust
        }
        return result
    }
}

class shipPart {
    constructor (mass) {
        this.mass = mass
    }
    
}

class rocket extends shipPart {
	constructor(mass, name, thrust, isDamaged = false){
		super(mass)
        this.name = name
		this.thrust = thrust
		this.isDamaged = isDamaged
	}
}

class ionThruster extends shipPart {
    constructor (mass, name, thrustPerYear, isDamaged = false) {
        super(mass)
        this.name = name
        this.thrustPerYear = thrustPerYear
		this.isDamaged = isDamaged
	}
}

class capsule extends shipPart {
	constructor(mass, name, seatNumber, reEntryResist, radioResist, isDamaged = false){
		super(mass)
		this.name = name
		this.seatNumber = seatNumber
		this.reEntryResist = reEntryResist
		this.radioResist = radioResist
		this.isDamaged = isDamaged
	}
}

class passanger extends shipPart {
	constructor(job, isInjured = false){
		super(0)
		this.job = job
		this.isInjured = isInjured
	}
}

class sample extends shipPart {
	constructor(isFrom, amount){
		super(1)
        this.isFrom = isFrom
		this.amount = amount
	}
}

class supply extends shipPart {
	constructor(amount){
		super(1)
		this.amount = amount
	}
}