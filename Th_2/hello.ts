var spacecraftName = "spacecraft";
var speedMph=17500;
var kilometersToMars=225000000;
var kilometersToTheMoon	=384400;
const milesPerKilometer=0.621;
var dayToMars =kilometersToMars/speedMph;
console.log(`số ngày cần thiết để đi lên sao hoả của tàu ${spacecraftName} là ${dayToMars} ngày`);
class Destination{
   name:string;
kilometersAway:number;

constructor(name:string,kilometersAway:number){
   this.name=name;
   this.kilometersAway=kilometersAway;
}};
class SpaceCraft{
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
 
    constructor(name: string, speedMph: number) {
       this.name = name;
       this.speedMph = speedMph;
    }
   
 
    getDaysToLocation(kilometersAway: number): number {
       let milesAway: number = kilometersAway * this.milesPerKilometer;
       let hours: number = milesAway / this.speedMph;
       return hours / 24;
    }
 
    printDaysToLocation(location) {
       console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
 }

 const mars=new Destination("mars",kilometersToMars);
 const spacecraft = new SpaceCraft("abc", 12000);
 console.log(spacecraft.getDaysToLocation(kilometersToTheMoon));
 console.log(spacecraft.printDaysToLocation(mars));
 



