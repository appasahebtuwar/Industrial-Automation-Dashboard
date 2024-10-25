
let counter = 0;
let actualcounter = 0
let target = 230
// Function to update the value
function updateValue() {
    counter += Math.floor(Math.random() * 10); // Update the counter randomly
    document.getElementById('value').innerText = counter; // Update the content
}
function updateRevValue() {
    counter += Math.floor(Math.random() * 10); // Update the counter randomly
    document.getElementById('RevValue').innerText = counter + "K"; // Update the content

}

function updateActualValue() {
    actualcounter += Math.floor(Math.random() * 10); // Update the counter randomly
    document.getElementById('ActualVal').innerText = actualcounter + "CR"; // Update the content
    diffCounter = target - actualcounter
    document.getElementById('DiffVal').innerText = diffCounter + "CR"; // Update the content

}


// Auto-update the value every 2 seconds without refreshing the page
setInterval(updateValue, 1000);
setInterval(updateRevValue, 4000);
setInterval(updateActualValue, 5000);

