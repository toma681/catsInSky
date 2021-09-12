# Cats in the Sky API Documentation
Documentation for the Cats in the Sky API

## Get Matching Recipes
Provides matchings of cats to their favorite foods. Each cat will be matched to
a list of Veges that begin with the same first letter as the cat.
### Request
`GET /cats`
### Response

    {
        "Michael": [
            "Mallow",
            "Melokhia",
            "Mustard"
        ],
        "Christopher": [
            "Cabbage",
            "Celtuce",
            "Corn"
        ],
        "Jessica": [],
        "Matthew": [
            "Mallow",
            "Melokhia",
            "Mustard"
        ],
    }

### Design
    Simply retrieves all 'Cats' and their matching Veges from the database.
    Database is already matched and thus, no real logic is implemented here.


## Post new Cat
Adds new Cat to the Database for Matching.
### Request
`POST /cat`

    {
        "cat": "Andrew"
    }

### Response
    Successfully created new Cat: Andrew!

### Common Errors
    1. Incorrect Formatting of Request Body
    2. Cat already exists in database

### Design
    Ensures Cat does not exist. Then, builds new Cat from Schema. All Veges that start
    with same first letter as the cat are queried from the database, and added to the
    cat's Vege list. Cat is saved into the database.

## Post new Vege
Adds new Vege to the Database for Matching
### Request
`POST /vege`

    {
        "vege": "Artichoke"
    }

### Response
    Successfully created new Vege: Artichoke!

### Common Errors
    1. Incorrect Formatting of Request Body
    2. Vege already exists in database

### Design
    Ensures Vege does not exist. Then, builds new Vege from Schema. All Cats that start
    with same first letter as the cat are queried from the database, and added to the
    Vege's Cat list. Vege is saved into the database.

## Delete Cat
Deletes Cat from the database. Cat will no longer show up in matching. ACCESS_TOKEN is
required to access this endpoint.
### Request
`DELETE /cat?token={ACCESS_TOKEN}`

    {
        "cat": "Andrew"
    }

### Response
    Successfully removed Cat: Andrew!

### Common Errors
    1. Incorrect Formatting of Request Body
    2. Missing or incorrect ACCESS_TOKEN
    3. Cat does not exist in database

### Design
    Checks token to ensure it is valid. If valid, ensures that Cat exists in database.
    Then, queries each Vege in the Cat's Vege list, and removes Cat from each Vege's Cat list.
    Then, Cat is removed from database.

## Delete Vege
If Vege is utilized in current matching, it will be tracked and no longer utilized. If Vege
is not being used, it will be removed from the database.
### Request
`DELETE /vege?token={ACCESS_TOKEN}`

    {
        "vege": "Artichoke"
    }

### Response
    Successfully removed Vege: Artichoke!

### Common Errors
    1. Incorrect Formatting of Request Body
    2. Missing or incorrect ACCESS_TOKEN
    3. Vege does not exist in database

### Design
    Checks token to ensure it is valid. If valid, ensures that Vege exists in database.
    Then, checks the Vege's Cat list to determine whether it is being utilized in the
    matching process. If so, queries each Cat in the Vege's Cat list, and removes the
    Vege from each Cat's Vege list. Else, Vege is simply removed from the database.

## Signup
User signup.
### Request
`POST /signup`

    {
        "username": "Andrew",
        "pwd": "Tom"
    }

### Response
    Successful signup for user: Andrew!

### Common Errors
    1. Incorrect Formatting of Request Body
    2. User Account already exists

### Design
    Ensures that username does not already exist in database. Then, runs bcrypt on the
    password with 12 salting rounds and stores username and password in the database.

## Signin
User signin. Provides user with ACCESS_TOKEN which can be used to access DELETE endpoints.
### Request
`POST /signin`

    {
        "username": "Andrew",
        "pwd": "Tom"
    }

### Response
    {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZHJldyIsImlhdCI6MTYzMTQyNDI2NywiZXhwIjoxNjMxNDI3ODY3fQ._Q9_hwKf2rqIGMpdvGaUCGooMePCviuXqcnS7y7duZI"
    }

### Common Errors
    1. Incorrect Formatting of Request Body
    2. Credentials do not match an existing User Account

### Design
    Ensures that username exists in the database. Then, decrypts the hashed password from
    the database, and compares to the password from the signin body. If equal, a new JWT
    is sent to the user in response. This token is valid for 1 hour.

## Models
### Cat
    {
        name: { type: String, required: true },
        veges: [],
        firstChar: {type: String, required: true}
    }

### Vege
    {
        name: { type: String, required: true },
        cats: [],
        firstChar: {type: String, required: true},
        deleted: {type: Boolean, required: true},
    }

### User
    {
        username: { type: String, required: true },
        password: { type: String, required: true }
    }