CREATE TABLE computerAssemblies (
    id SERIAL PRIMARY KEY,
    computerModel VARCHAR(255),
    delivery VARCHAR(255),
    phoneNumber VARCHAR(255),
    deliveryAddress VARCHAR(255),
    urgent VARCHAR(255),
    payment VARCHAR(255),
    additionalInfo VARCHAR(255)
)
