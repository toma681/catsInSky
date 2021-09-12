# Assumptions

## 1. API Should be Scalable/Flexible 
    The API should be scalable/flexile in the case that Cats in the Sky requires modification 
    or growth of this API. Thus, a layered architecture was implemented (Route -> Controller -> Service -> Data Access).
## 2. Cat and Vege Endpoints Should be Separated
    The API should separate the Cat and Vege endpoints to conform to REST standards. Thus, the POST
    and DELETE endpoints of both Cat and Vege were implemented separately.
## 3. Passwords Should be Encrypted
    For basic security reasons, passwords should be encrypted. Thus, when users sign up, their passwords
    are hashed with 10 salting rounds.
## 4. Cats Can be Removed
    The beginning of the API doc states that the API must be able to "Remove a cat name / vege from
    the database. However, the actual DELETE endpoint specification has no mention of removal of cats
    from the database. Thus, the assumption was made that cats should be removable, regardless of the
    lack of mention in the DELETE specification.
## 5. Cats Should ALWAYS Appear in Matchings
    Although this assumption is explicitly stated in the instructions, there is one contradiction
    made. In the specification of "Deleting a Vege," an example is shown.

    Samarth is shown to love Squash in the matchings. After Squash is deleted, Samarth no longer
    shows up in the matchings. This directly contradicts what is stated earlier in the corner case:

    If a cat does not have any favorite veges, please return the cat with an empty list. {"Bob": []}

    Thus, I made the assumption that ALL cats show up in matchings regardless of their veges.
## 6. Database Does not Already Include Cat/Vege Data
    The existing data from the Cats in the Sky Company API's should not be automatically inserted into
    the Database by this API. Instead, a python script is bundled. When run, this script will populate the
    database.