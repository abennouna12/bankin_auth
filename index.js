const { getAccessToken } = require("./actions/authorisation/getAccessToken");
const { showAccounts } = require("./actions/accounts/showAccounts");

try {
  getAccessToken().then(result => {
    console.log(result);
    showAccounts(result);
  }
  );
}
catch (error) {
  console.error(error);
}