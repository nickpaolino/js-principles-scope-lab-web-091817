customerName = "bob";

function customerName(){
  return customerName;
}

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "B";

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Bob";
}

let favoriteCustomer = "Nick";

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = "Jeremy";
  let favoriteCustomer = "Jeremy";
}
