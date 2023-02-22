var spacecraftName = "spacecraft";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
var dayToMars = kilometersToMars / speedMph;
console.log("s\u1ED1 ng\u00E0y c\u1EA7n thi\u1EBFt \u0111\u1EC3 \u0111i l\u00EAn sao ho\u1EA3 c\u1EE7a t\u00E0u ".concat(spacecraftName, " l\u00E0 ").concat(dayToMars, " ng\u00E0y"));
var Destination = /** @class */ (function () {
    function Destination(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    return Destination;
}());
;
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    SpaceCraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    SpaceCraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return SpaceCraft;
}());
var mars = new Destination("mars", kilometersToMars);
var spacecraft = new SpaceCraft("abc", 12000);
console.log(spacecraft.getDaysToLocation(kilometersToTheMoon));
console.log(spacecraft.printDaysToLocation(mars));
