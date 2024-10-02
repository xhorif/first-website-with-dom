document.getElementById('btn-donation').addEventListener('click',function(event){
    event.preventDefault();
    console.log('clicked button');


const amountDonation = document.getElementById('middle-input').value;
const amountDonationNumber = parseFloat(amountDonation);


if (!isNaN(amountDonationNumber) && amountDonationNumber > 0) {
    
    const currentBalance = document.getElementById('second-project').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    
    const mainAccountBalance = document.getElementById('main-account-balance').innerText;
    const mainAccountBalanceNumber = parseFloat(mainAccountBalance);

    
    if (mainAccountBalanceNumber >= amountDonationNumber) {
       
        const newBalance = currentBalanceNumber + donationAmountNumber;
        document.getElementById('second-project').innerText = updatedBalance;

        
        const newdMainAccountBalance = mainAccountBalanceNumber - amountDonationNumber;
        document.getElementById('main-account-balance').innerText = newMainAccountBalance;

        console.log(' You Donated successfully');
    } else {
        alert('Insufficient funds in your account.');
    }
} else {

    alert('Failed to donate money! Please enter a positive number.');
}

})