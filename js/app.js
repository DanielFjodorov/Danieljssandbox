console.log("Hello, world");
let name = "Daniel Fjodorov";
let age = 16;
let city = "Tallinn";
let drivingLicense = "";
console.log(`Character: ${name}. Age: ${age} . City: ${city} . `);

if(age < 16 ) {
    drivingLicense = `${name} is too young to drive a car .`;
 } else {
  drivingLicense =`${name} is old enough to drive a car.`;
 }
 console.log(drivingLicense);
 const html = `
<ul>
<li>Name: ${name}</li>
<li>Age; ${age}</li>
<li>City: ${city}</li>
<li>${drivingLicense}</li>
</ul>
`;

document.body.innerHTML =html;
