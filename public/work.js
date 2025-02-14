const storedNames = [];

function storeName() {
    const nameInput = document.getElementById("username").value.trim();
    if (nameInput) {
        storedNames.push(nameInput);
        console.log("Stored Names:", storedNames);
        alert(`Hello, ${nameInput}! Your name has been stored.`);
    } else {
        alert("Please enter a valid name.");
    }
}
