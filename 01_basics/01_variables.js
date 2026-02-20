const accountId = 14935
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jamshedpur"
let accountState;
//accountId = 2 // not allowed

accountEmail = "hc@mc.com"
accountPassword = "231232"
accountCity = "Bengaluru"


console.log(accountId);

/*

Prefer not use var
because of block scope and functional scope issue


*/

console.table([accountId,accountPassword,accountEmail,accountCity,accountState]);

