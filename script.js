//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const nameInput = document.getElementById('name').value;
    const ageInput = document.getElementById('age').value;

    // Input validation: Ensure inputs are not empty
    if (!nameInput || !ageInput) {
        alert("Please fill in both name and age fields.");
        return;
    }

    const age = parseInt(ageInput);

    // Creating the promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // Simulate 4 seconds delay
    })
    .then(() => {
        alert(`Welcome, ${nameInput}. You can vote.`);
    })
    .catch(() => {
        alert(`Oh sorry ${nameInput}. You aren't old enough.`);
    });
});

