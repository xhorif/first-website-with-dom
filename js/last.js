document.getElementById('last-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('clicked button');

    //get the amount
// Get the donation amount from the input field
const donationAmount = document.getElementById('last-input').value;
const donationAmountNumber = parseFloat(donationAmount);

// Check if the donation amount is a valid positive number
if (!isNaN(donationAmountNumber) && donationAmountNumber > 0) {
    // Get the current balance of the donation project
    const balance = document.getElementById('last-capital').innerText;
    const balanceNumber = parseFloat(balance);

    // Get the current balance of the main account
    const mainAccountBalance = document.getElementById('main-account-balance').innerText;
    const mainAccountBalanceNumber = parseFloat(mainAccountBalance);

    // Check if the main account has enough balance to cover the donation
    if (mainAccountBalanceNumber >= donationAmountNumber) {
        // Update the balance of the donation project by adding the donation amount
        const updatedBalance = balanceNumber + donationAmountNumber;
        document.getElementById('last-capital').innerText = updatedBalance;

        // Decrease the main account balance
        const updatedMainAccountBalance = mainAccountBalanceNumber - donationAmountNumber;
        document.getElementById('main-account-balance').innerText = updatedMainAccountBalance;

        console.log('Donated successfully');
    } else {
        alert('Insufficient funds in the main account.');
    }
} else {
    // Show an error if the input is not a valid positive number
    alert('Failed to donate money! Please enter a valid positive number.');
}

})