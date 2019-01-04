// const outEl = document.querySelector("#output") 
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
// const someVariableThatMeansZip = "addressZipCode"
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity},
//     ${business['addressStateCode']}
//     ${business[someVariableThatMeansZip]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// Array to contain all the New York businesses
// Useing "filter" method to return businesses with the satecode of "NY"
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   });

//   console.log(newYorkBusinesses);

// //   Manufacturing Businesses:
// const  manufacturingBusinesses = businesses.filter(business => {
//     let manufacture = false
  
//     if (business.companyIndustry === "Manufacturing") {
//         manufacture  = true
//     }
  
//     return manufacture 
//   });
//   console.log(manufacturingBusinesses);


// const outEl = document.querySelector("#output") 
// outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

// manufacturingBusinesses.forEach(business => {
// const someVariableThatMeansZip = "addressZipCode"
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity},
//     ${business['addressStateCode']}
//     ${business[someVariableThatMeansZip]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });