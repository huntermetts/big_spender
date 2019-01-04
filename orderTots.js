// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
//     let totalOrders = business.orders.reduce(
//         (currentTotal, nextValue) => currentTotal += nextValue,
//         0
//     )
//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders.toFixed(2)})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });


// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const totalRainfall = monthlyRainfall.reduce(
//     (currentTotal, nextValue) => currentTotal += nextValue);

// console.log("Total rainfall: " + totalRainfall);


// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce(
//     (currentTotal, nextValue) => currentTotal  += ` ${nextValue}`,
// )

// console.log(sentence)


// BIG SPENDERS:
const bigSpenders = businesses.filter(business => 
    business.orders.some(find9000 => find9000 >= 9000))

    bigSpenders.forEach(spender =>{
        let companyName = spender.companyName
        console.log(spender.companyName);
        let spenderDom =
        
        `
        <h1>${companyName} spent over $9000.</h1>
        `
        outEl.innerHTML += spenderDom

        return spenderDom
    })

   
