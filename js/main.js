// Variables for donation button, history button, and popup
const donationButton = document.getElementById('btn-donation');
const middleButton = document.getElementById('middle-btn');
const lastButton = document.getElementById('last-btn');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('confirmation-popup');


function showPopup() {
  popup.classList.remove('hidden'); 
}


function closePopup() {
  popup.classList.add('hidden'); 
}


closePopupButton.addEventListener('click', closePopup);


let transactions = [];


function handleDonation(inputId, projectBalanceId, projectName) {
  const input = document.getElementById(inputId);
  const projectBalance = document.getElementById(projectBalanceId);
  const mainBalance = document.getElementById('main-account-balance');
  
  const donationAmount = parseInt(input.value);
  const currentProjectBalance = parseInt(projectBalance.textContent);
  const currentMainBalance = parseInt(mainBalance.textContent);

 
  if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= currentMainBalance) {
    // Update balances
    projectBalance.textContent = currentProjectBalance + donationAmount;
    mainBalance.textContent = currentMainBalance - donationAmount;

    
    const date = new Date().toLocaleString();
    transactions.push({ amount: donationAmount, project: projectName, date: date });
    displayTransactions(); 
  
    showPopup();

    
    input.value = '';
  } else {
    alert('Invalid donation amount or insufficient funds');
  }
}


function displayTransactions() {
  const transactionHistory = document.getElementById('transaction-history');
  transactionHistory.innerHTML = ''; 

  if (transactions.length === 0) {
    transactionHistory.innerHTML = '<p>No transactions yet.</p>'; 
    return;
  }

  transactions.forEach((transaction) => {
    const transactionDiv = document.createElement('div');
    transactionDiv.classList.add('bg-gray-100', 'p-4', 'rounded', 'mb-2');
    transactionDiv.innerHTML = `
      <p>Amount Donated: ${transaction.amount} BDT</p>
      <p>Project: ${transaction.project}</p>
      <p>Date: ${transaction.date}</p>
    `;
    transactionHistory.appendChild(transactionDiv);
  });
}


donationButton.addEventListener('click', function() {
  handleDonation('donation-input', 'current-balance', 'Flood at Noakhali');
});
middleButton.addEventListener('click', function() {
  handleDonation('middle-input', 'second-project', 'Flood Relief in Feni');
});
lastButton.addEventListener('click', function() {
  handleDonation('last-input', 'last-capital', 'Aid for Injured in the Quota Movement');
});


const transactionHistory = document.getElementById('transaction-history');
const donationBgBtn = document.getElementById('btn-donation-bg');
const historyBtn = document.getElementById('btn-history');


transactionHistory.style.display = 'none';

historyBtn.addEventListener('click', function() {
  transactionHistory.style.display = transactionHistory.style.display === 'none' ? 'block' : 'none';
});

donationBgBtn.addEventListener('click', function() {
  transactionHistory.style.display = 'none'; 
});