// document
//     .querySelector("#agentSearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundAgent = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || 
//                     business.purchasingAgent.nameLast.includes(keyPressEvent.target.value) 
//             );
//             outEl.innerHTML =
//              `<h2>${foundAgent.purchasingAgent.nameFirst} 
//              ${foundAgent.purchasingAgent.nameLast}
//              </h2>`
//             ;
//         }
//     });