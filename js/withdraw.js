document.getElementById("btn-withdraw").addEventListener('click', function () {
    
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    
    const previousWithdrawAmount = getTextElementValueById("withdraw-total-display");

    /* Current Withdraw Total Balance */

    const currentWithdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount;

    /* Set current withdraw balance in Display */
    
    setTextElementValueInDisplayById("withdraw-total-display", currentWithdrawTotalAmount);

    /* Get Previous Balance and Set new Balance by Using Function */

    const previousTotalBalance = getTextElementValueById("total-balance");
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    
    setTextElementValueInDisplayById("total-balance", newTotalBalance);

});