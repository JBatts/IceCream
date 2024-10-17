function getReceipt( // this is the function that grabs the value from line 56 then calculates the receipt
    numberOfScoops,
    isCup,
    wantsSprinkles,
    wantsWhipped,
    wantsFudge,
    wantsCherry
) {
    // setting base values
    const taxRate = .04
    const basePrice = 1.00
    const costPerScoop = 1.25

    let total = basePrice + (costPerScoop * numberOfScoops)

    if (isCup) { // If the radio button cup is selected the if function goes
        if (wantsSprinkles) {
            total += 0.50
        }
        if (wantsWhipped) {
            total += 0.25
        }
        if (wantsFudge) {
            total += 1.25
        }
        if (wantsCherry) {
            total += 0.25
        }
    }
    const taxAmount = total * taxRate
    const totalDue = total + taxAmount
    if (numberOfScoops > 0) { // determines if you gave a postive amount of scoops
        return `
      Subtotal: $${total.toFixed(2)}
           Tax: $${taxAmount.toFixed(2)}
     Total Due: $${totalDue.toFixed(2)}
    `
    } else if(numberOfScoops == 0) {
        return `
      Subtotal: $0.00
           Tax: $0.00
     Total Due: $0.00
        `
    } else {
        return `
      You can't buy a 
      negative scoops
      of our Ice Cream!`
    }
}

function onContainerClicked(event) { 
    toppings.style.display = cup.checked ? "block" : "none" // (1) once clicked check if you clicked cup or cone decide if toppings are shown "block" or not "none"
}

document.addEventListener("DOMContentLoaded", () => { // Once all Html loads then load the javascript and get all values from the page
    const scoops = document.getElementById("scoops")
    const cup = document.getElementById("cup")
    const cone = document.getElementById("cone")
    const sprinkles = document.getElementById("sprinkles")
    const whipped = document.getElementById("whipped")
    const fudge = document.getElementById("fudge")
    const cherry = document.getElementById("cherry")



    cup.addEventListener("click", onContainerClicked) // (1) if you click cup or cone then function onContainerClicked activates
    cone.addEventListener("click", onContainerClicked)

    submitOrder.addEventListener("click", () => {
        outputReceipt.innerText = getReceipt(
            Number(scoops.value),
            cup.checked,
            sprinkles.checked,
            whipped.checked,
            fudge.checked,
            cherry.checked,
        );
    })
});
