function getReceipt(
    numberOfScoops,
    isCup,
    wantsSprinkles,
    wantsWhipped,
    wantsFudge,
    wantsCherry
) {
    const taxRate = .04
    const basePrice = 1.00
    const costPerScoop = 1.25

    let total = basePrice + (costPerScoop * numberOfScoops)

    if (isCup) {
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
    if (numberOfScoops > 0) {
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
    toppings.style.display = cup.checked ? "block" : "none"
}

document.addEventListener("DOMContentLoaded", () => {
    const scoops = document.getElementById("scoops")
    const cup = document.getElementById("cup")
    const cone = document.getElementById("cone")
    const sprinkles = document.getElementById("sprinkles")
    const whipped = document.getElementById("whipped")
    const fudge = document.getElementById("fudge")
    const cherry = document.getElementById("cherry")



    cup.addEventListener("click", onContainerClicked)
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
