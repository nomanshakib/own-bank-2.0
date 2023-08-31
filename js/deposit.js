
document.getElementById("btn-deposit").addEventListener('click', function () {
    
    /* Get new deposit Amount from input field */
    
    const newDepositAmount = getInputFieldValueById("deposit-field");

    /* Get previous deposit amount from Display Text */

    const previousDepositAmount = getTextElementValueById("deposit-total-display");
    
    /* Calculate new deposit total */

    const currentDepositTotalAmount = previousDepositAmount + newDepositAmount;

    /* Set Current Deposit Value in Display */

    setTextElementValueInDisplayById("deposit-total-display", currentDepositTotalAmount);

    /* Get Previous Balance and Set new Balance by Using Function */

    const previousTotalBalance = getTextElementValueById("total-balance");
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    setTextElementValueInDisplayById("total-balance", newTotalBalance);

});