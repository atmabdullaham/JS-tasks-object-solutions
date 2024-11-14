// Ride - Sharing App(e.g., Uber, Lyft)
// Problem: A ride - sharing app needs to manage data for drivers, riders, rides, and payments.


const ride = {
 riderName: 'Alice',
 driverName: 'Bob',
 pickUpLocation: 'Downtown',
 dropOffLocation: 'Airport',
 fare: 25.0,
 startRide: function () {
  console.log(`Ride started with ${this.driverName} from ${this.pickUpLocation}`);
 },
 endRide: function () {
  console.log(`Ride ended at ${this.dropOffLocation}. Total Fare: $${this.fare}`);
 }
};

ride.startRide(); // Output: Ride started with Bob from Downtown
ride.endRide();   // Output: Ride ended at Airport. Total Fare: $25
