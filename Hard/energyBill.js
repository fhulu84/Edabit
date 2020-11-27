/* https://edabit.com/challenge/T9vEX6ftTgCabfnCv

Create a function that calculates an energy bill.

Given a billing start date and end date, start and end meter reading, a unit price in pence, and a standing charge (a daily rental fee for your meter) as arguments, 
calculate your bill.

An energy bill is calculated by multiplying the difference between meter readings with the unit price and adding the number of days multiplied by the standing charge. 
You then have to add 5% tax.

(days between dates x standing charge) + (diference bewteen meter readings x unit price) + 5% tax */

function energyBill(startDate, endDate, startRead, endRead, tariff, stand) {
  const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
  return days < 0            ? 'Invalid date'
       : endRead < startRead ? 'Invalid meter readings'
       : "£" + (((endRead-startRead) * tariff + days * stand) * 1.05).toFixed(2);
}

console.log(energyBill("2020,01,01", "2020,04,01", 1000, 2000, 0.188, 0.243))
console.log(energyBill("1984,04,19", "1991,04,10", 2000, 1000, 0.61, 0.074))
console.log(energyBill("2020,01,01", "2019,01,01", 1000, 2000, 0.171, 0.243))