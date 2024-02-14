document.getElementById('Calculate').addEventListener('click', function () {
    var food = document.getElementById('food').value;
    var rent = document.getElementById('rent').value;
    var clothes = document.getElementById('clothes').value;
    var foodNum = parseFloat(food);
    var rentNum = parseFloat(rent);
    var clothesNum = parseFloat(clothes);
    var total = foodNum + rentNum + clothesNum;
    var expenses = document.getElementById('Expenses');
    expenses.innerText = total;
    // total income

    var income = document.getElementById('Income').value
    var incomeNum = parseFloat(income);
    var remaining = incomeNum - total;
    // console.log(remaining);
     var balance = document.getElementById('Balance');
     balance.innerText = remaining; 
})

document.getElementById('Save').addEventListener('click', function () {
    var saveBalance = document.getElementById('Balance').innerText;
    var saveBalanceNum = parseFloat(saveBalance);
    var saveinput = document.getElementById('saveinput').value;
    var saveInputNum = parseFloat(saveinput);
    var parsent = saveInputNum / 100;
    // console.log(parsent);
    var totalBalance = saveBalanceNum * parsent;
    var savingAmount = document.getElementById('SavingAmount');
    savingAmount.innerText = totalBalance;
    var leftAmount = saveBalanceNum - totalBalance;
    console.log(typeof(leftAmount));
    var leftOver = document.getElementById('leftover');
    leftOver.innerText = leftAmount;
})