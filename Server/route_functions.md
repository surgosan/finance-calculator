# Route Functions

## Account Functions

- **GET** => Get all accounts
- **POST => New Account**
- **POST => Get account by ID**
- **DELETE => Delete account by ID**
- **PUT** => Edit account
  - Requires all account info including what is not changed

## Transaction Functions

- **GET** => Get all transactions
- **POST** => Get 10 transactions at a time
  - X will be page #. 
  - Get transactions X\*10 through (X\*10) + 10.
  - I.E: X=0 so 0 through 10. | X=1, so 10 through 20.
- **POST** => Get transactions by Account#.
- **POST** => Get transactions by Account# in sets of 10.
- **POST** => Get transactions by date range
- **POST** => New Transaction
- **POST** => Get Transaction by ID
- **DELETE** => Delete transaction by ID
- **PUT** => Edit transaction

# User Functions

- **GET** => Get all users
- **POST** => Get user by ID
- **POST** => Get user by username and password
- **POST** => New user
- **DELETE** => Delete user by ID
- **PUT** => Edit user