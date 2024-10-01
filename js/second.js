document.getElementById('btn-donation').addEventListener('click',function(event){
    event.preventDefault();
    console.log('clicked button');

    //get the amount
// Get the donation amount from the input field
const amountDonation = document.getElementById('middle-input').value;
const amountDonationNumber = parseFloat(amountDonation);

// Check if the donation amount is a valid positive number
if (!isNaN(amountDonationNumber) && amountDonationNumber > 0) {
    // Get the current balance of the donation project
    const currentBalance = document.getElementById('second-project').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    // Get the current balance of the main account
    const mainAccountBalance = document.getElementById('main-account-balance').innerText;
    const mainAccountBalanceNumber = parseFloat(mainAccountBalance);

    // Check if the main account has enough balance to cover the donation
    if (mainAccountBalanceNumber >= amountDonationNumber) {
        // Update the balance of the donation project by adding the donation amount
        const newBalance = currentBalanceNumber + donationAmountNumber;
        document.getElementById('second-project').innerText = updatedBalance;

        // Decrease the main account balance
        const newdMainAccountBalance = mainAccountBalanceNumber - amountDonationNumber;
        document.getElementById('main-account-balance').innerText = newMainAccountBalance;

        console.log(' You Donated successfully');
    } else {
        alert('Insufficient funds in your account.');
    }
} else {
    // Show an error if the input is not a valid positive number
    alert('Failed to donate money! Please enter a positive number.');
}

})