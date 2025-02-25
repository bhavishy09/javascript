const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

let state="rajasthan"

// accountId = 2 // not allowed
/*
 In JavaScript, const is used to declare variables that cannot be reassigned,
  while let is used to declare variables that can be reassigned. 

*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

accountState="invalid"

console.log(accountId);



/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState,state])