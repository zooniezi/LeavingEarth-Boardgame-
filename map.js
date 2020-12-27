var slingShot = {
    ALL: 0,
    RED: 1,
    YELLOW: 2,
    GREEN: 3,
    BLUE: 4
}

var techRequired = {
    Y: true,
    N: false
}

class mapTileMovement {
    constructor(destination, level, time, isRadio, isLandingRequired, isReEntryRequired, isAerobreakingRequired, slingShotType, affectingPlanet = -1){
        this.destination = destination	//num
        this.level = level
        this.time = time
        this.isRadio = isRadio
        this.isLandingRequired = isLandingRequired
		this.isReEntryRequired = isReEntryRequired
		this.isAerobreakingRequired = isAerobreakingRequired
		this.slingShotType = slingShotType	// 0:default 1~4 : outerplanetpath
        this.affectingPlanet = new Array()
        this.affectingPlanet.push(affectingPlanet)
    }
    
    addAffectingPlanet (tileNum) {
        this.affectingPlanet.push(tileNum)
    }
}

class mapTile {
    constructor(num, name, isSurveyed, isDanger){
        this.num = num
        this.name = name
		this.isSurveyed = isSurveyed
		this.isDanger = isDanger	//lost
        this.penalties = new Array()
        this.path = new Array()
        this.canSurvey = new Array()
    }
    
    addPath (movement) {
        this.path.push(movement)
    }
    
    addSurveyCandidate (tileNum) {
        this.canSurvey.push(tileNum)
    }
    
    addPenalty (penalty) {
        this.penalty.push(penalty)
    }
    
    explorePenalty () {
        if(!isSurveyed) {
            isSurveyed = random(0, penalties.length)
        }
    }
    
    executePenalty () {
        if(!isSurveyed) {
            isSurveyed = random(0, penalties.length)
        }
        penalties[isSurveyed]()
    }
}

class map {
    constructor(){
        this.tiles = new Array()
    }
    
    addTile (tile) {
        this.tiles.push(tile)
    }
}

var gameMap = new map()

var temp = new mapTile(56, "Earth", false, false)
temp.addPath(new mapTileMovement(50, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 8, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(-1, "NothingHappen", false, false)
gameMap.addTile(temp)

temp = new mapTile(0, "Lost", false, true)
gameMap.addTile(temp)

temp = new mapTile(1, "Uranus", false, false)
gameMap.addTile(temp)

temp = new mapTile(2, "Uranus Fly-By", false, true)
temp.addPath(new mapTileMovement(2, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(3, 0, 4, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.BLUE, 1))
temp.addPath(new mapTileMovement(26, 4, 9, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(3, "Neptune Fly-By", false, true)
temp.addPath(new mapTileMovement(3, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
gameMap.addTile(temp)

temp = new mapTile(4, "Neptune", false, false)
gameMap.addTile(temp)

temp = new mapTile(6, "Saturn", false, false)
gameMap.addTile(temp)

temp = new mapTile(12, "Enceladus", false, false)
temp.addPath(new mapTileMovement(12, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 12))
temp.addPath(new mapTileMovement(13, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(13, 2, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(13, "Saturn Orbit", false, false)
temp.addPath(new mapTileMovement(13, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 6))
temp.addPath(new mapTileMovement(20, 7, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 6))
temp.addPath(new mapTileMovement(20, 7, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 6))
temp.addPath(new mapTileMovement(12, 2, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 12))
temp.addPath(new mapTileMovement(12, 2, 1, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 12))
temp.addPath(new mapTileMovement(18, 1, 0, false, techRequired.N, techRequired.Y, techRequired.N, slingShotType.ALL, 18))
temp.addPath(new mapTileMovement(19, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(19, 2, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(19, 1, 0, false, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(15, "Callisto", false, false)
temp.addPath(new mapTileMovement(15, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 15))
temp.addPath(new mapTileMovement(21, 5, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(21, 5, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(27, 5, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(16, "Europa", false, false)
var toEuropa = new mapTileMovement(16, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL)
toEuropa.addAffectingPlanet(16)
toEuropa.addAffectingPlanet(17)
temp.addPath(toEuropa)
temp.addPath(new mapTileMovement(21, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(21, 2, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(17, "Jupiter", false, false)
gameMap.addTile(temp)

temp = new mapTile(18, "Titan", false, false)
temp.addPath(new mapTileMovement(18, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 18))
temp.addPath(new mapTileMovement(19, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(19, "Titan Orbit", false, false)
temp.addPath(new mapTileMovement(19, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(18, 0, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 18))
temp.addPath(new mapTileMovement(18, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 18))
temp.addPath(new mapTileMovement(13, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(13, 2, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(20, "Saturn Fly-By", false, true)
temp.addPath(new mapTileMovement(20, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(2, 0, 5, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.GREEN, 6))
temp.addPath(new mapTileMovement(13, 7, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 6))
temp.addPath(new mapTileMovement(13, 7, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 6))
temp.addPath(new mapTileMovement(13, 1, 0, false, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL, 6))
temp.addPath(new mapTileMovement(26, 3, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(21, "Jupiter Orbit", false, false)
temp.addPath(new mapTileMovement(21, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 17))
temp.addPath(new mapTileMovement(27, 10, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 17))
temp.addPath(new mapTileMovement(27, 10, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 17))
var toIo = new mapTileMovement(23, 2, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL)
toIo.addAffectingPlanet(17)
toIo.addAffectingPlanet(23)
temp.addPath(toIo)
var toIo2 = new mapTileMovement(23, 2, 1, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL)
toIo2.addAffectingPlanet(17)
toIo2.addAffectingPlanet(23)
temp.addPath(toIo2)
temp.addPath(new mapTileMovement(22, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 17))
temp.addPath(new mapTileMovement(22, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 17))
var jupiterOrbitToEuropa = new mapTileMovement(16, 2, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL)
jupiterOrbitToEuropa.addAffectingPlanet(16)
jupiterOrbitToEuropa.addAffectingPlanet(17)
temp.addPath(jupiterOrbitToEuropa)
var jupiterOrbitToEuropa2 = new mapTileMovement(16, 2, 1, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL)
jupiterOrbitToEuropa2.addAffectingPlanet(16)
jupiterOrbitToEuropa2.addAffectingPlanet(17)
temp.addPath(jupiterOrbitToEuropa2)
temp.addPath(new mapTileMovement(15, 5, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 15))
temp.addPath(new mapTileMovement(15, 5, 1, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 15))
gameMap.addTile(temp)

temp = new mapTile(22, "Ganimede Orbit", false, false)
temp.addPath(new mapTileMovement(22, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(21, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(21, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(28, 2, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 28))
gameMap.addTile(temp)

temp = new mapTile(23, "Io", false, false)
var toStayIo = new mapTileMovement(23, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL)
toStayIo.addAffectingPlanet(17)
toStayIo.addAffectingPlanet(23)
temp.addPath(toStayIo)
temp.addPath(new mapTileMovement(22, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(21, 2, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(26, "Outer Planets Transtfer", false, true)
temp.addPath(new mapTileMovement(26, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(20, 3, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.YELLOW))
temp.addPath(new mapTileMovement(2, 4, 9, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.GREEN))
temp.addPath(new mapTileMovement(44, 6, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 1, 1, true, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL))
temp.addPath(new mapTileMovement(32, 3, 1, true, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 32))
temp.addPath(new mapTileMovement(39, 5, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 2, 1, true, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL))
temp.addPath(new mapTileMovement(27, 4, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.RED))
gameMap.addTile(temp)

temp = new mapTile(27, "Jupiter Fly-By", false, true)
temp.addPath(new mapTileMovement(27, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(26, 4, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(21, 10, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 17))
temp.addPath(new mapTileMovement(21, 10, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 17))
temp.addPath(new mapTileMovement(21, 3, 0, false, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL, 17))
temp.addPath(new mapTileMovement(20, 0, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.YELLOW, 17))
gameMap.addTile(temp)

temp = new mapTile(28, "Ganimede", false, false)
temp.addPath(new mapTileMovement(28, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 28))
temp.addPath(new mapTileMovement(22, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(30, "Venus", false, false)
temp.addPath(new mapTileMovement(30, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 30))
temp.addPath(new mapTileMovement(31, 6, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(31, "Venus Orbit", false, false)
temp.addPath(new mapTileMovement(31, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(26, 9, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(30, 0, 0, false, techRequired.N, techRequired.Y, techRequired.N, slingShotType.ALL, 30))
temp.addPath(new mapTileMovement(30, 0, 0, false, techRequired.Y, techRequired.Y, techRequired.N, slingShotType.ALL, 30))
temp.addPath(new mapTileMovement(38, 3, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(32, "Ceres", false, false)
temp.addPath(new mapTileMovement(32, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 32))
temp.addPath(new mapTileMovement(26, 3, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(38, 5, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(33, "Mars Fly-By", false, true)
temp.addPath(new mapTileMovement(33, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(38, 1, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 1, 0, false, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL))
temp.addPath(new mapTileMovement(40, 3, 0, false, techRequired.Y, techRequired.Y, techRequired.N, slingShotType.ALL, 40))
temp.addPath(new mapTileMovement(27, 4, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.RED))
gameMap.addTile(temp)

temp = new mapTile(34, "Phobos", false, false)
temp.addPath(new mapTileMovement(34, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 34))
temp.addPath(new mapTileMovement(39, 1, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 1, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(37, "Venus Fly-By", false, true)
temp.addPath(new mapTileMovement(37, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(38, 1, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(27, 1, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.RED))
temp.addPath(new mapTileMovement(31, 1, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(31, 1, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(31, 0, 0, false, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL))
temp.addPath(new mapTileMovement(30, 1, 0, false, techRequired.N, techRequired.Y, techRequired.N, slingShotType.ALL, 30))
temp.addPath(new mapTileMovement(30, 1, 0, false, techRequired.Y, techRequired.Y, techRequired.N, slingShotType.ALL, 30))
gameMap.addTile(temp)

temp = new mapTile(38, "Inner Planets Transtfer", false, true)
temp.addPath(new mapTileMovement(38, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(32, 5, 1, true, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 32))
temp.addPath(new mapTileMovement(31, 3, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(37, 2, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(60, 5, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 4, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(33, 1, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(39, "Mars Orbit", false, false)
temp.addPath(new mapTileMovement(39, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(38, 4, 2, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 5, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(45, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(45, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(40, 0, 0, false, techRequired.Y, techRequired.Y, techRequired.N, slingShotType.ALL, 40))
temp.addPath(new mapTileMovement(34, 1, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 34))
temp.addPath(new mapTileMovement(34, 1, 1, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 34))
temp.addPath(new mapTileMovement(26, 5, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(40, "Mars", false, false)
temp.addPath(new mapTileMovement(40, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 40))
temp.addPath(new mapTileMovement(39, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(42, "Moon", false, false)
temp.addPath(new mapTileMovement(42, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 42))
temp.addPath(new mapTileMovement(43, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
gameMap.addTile(temp)

temp = new mapTile(43, "Lunar Orbit", false, false)
temp.addPath(new mapTileMovement(43, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(42, 2, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 42))
gameMap.addTile(temp)

temp = new mapTile(44, "Earth Orbit", false, false)
temp.addPath(new mapTileMovement(44, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(38, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(26, 6, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(43, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(43, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(49, 1, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(49, 1, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(56, 0, 0, false, techRequired.N, techRequired.Y, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(56, 0, 0, false, techRequired.Y, techRequired.Y, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(51, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(51, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 5, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(33, 3, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))

temp = new mapTile(45, "Mars Cycler", false, true) //danger move but not lost
temp.addPath(new mapTileMovement(51, 0, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))// To Earthcycler
temp.addPath(new mapTileMovement(40, 3, 0, false, techRequired.Y, techRequired.Y, techRequired.N, slingShotType.ALL, 40))
temp.addPath(new mapTileMovement(39, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(39, 0, 0, false, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL))

temp = new mapTile(49, "Lunar Fly-By", false, true)
temp.addPath(new mapTileMovement(49, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(44, 1, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 1, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(43, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(43, 2, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(42, 4, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 42))

temp = new mapTile(50, "Suborbital Space", false, true)
temp.addPath(new mapTileMovement(56, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL)) // To Earth
temp.addPath(new mapTileMovement(56, 0, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL)) // To Earth(Landing)
temp.addPath(new mapTileMovement(44, 5, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))

temp = new mapTile(51, "Earth Cycler", false, true)
temp.addPath(new mapTileMovement(51, 0, 3, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL)) // To Mars Cycler
temp.addPath(new mapTileMovement(44, 3, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 3, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(44, 0, 0, false, techRequired.N, techRequired.N, techRequired.Y, slingShotType.ALL))

temp = new mapTile(60, "Mercury Orbit", false, false)
temp.addPath(new mapTileMovement(60, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(38, 7, 1, true, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(66, 2, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 66))

temp = new mapTile(61, "Mercury Fly-By", false, true)
temp.addPath(new mapTileMovement(61, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 0))
temp.addPath(new mapTileMovement(60, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(60, 2, 1, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))
temp.addPath(new mapTileMovement(66, 4, 0, false, techRequired.Y, techRequired.N, techRequired.N, slingShotType.ALL, 66))

temp = new mapTile(66, "Mercury", false, false)
temp.addPath(new mapTileMovement(66, 0, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL, 66))
temp.addPath(new mapTileMovement(60, 2, 0, false, techRequired.N, techRequired.N, techRequired.N, slingShotType.ALL))

temp = new mapTile(58, "Solar Radiation", false, false) // need to add !
















