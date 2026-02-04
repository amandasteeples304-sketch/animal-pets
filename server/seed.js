
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


const db = new pg.Pool({
    connectionString: process.env.DB_KEY,
});

db.query(
    // `INSERT INTO animals (animal_name, likes, comment) VALUES ('bill', '3', 'bill the playpus is so cool!')`
    `INSERT INTO pet (name, energy, intelligence, tea) VALUES ('phil', 3, 4, 5)`
);


// db.query(
//     // `INSERT INTO animals (animal_name, likes, comment) VALUES ('bill', '3', 'bill the playpus is so cool!')`
//     `INSERT INTO pet2 (name, energy, intelligence, tea) VALUES ('phil', 3, 4, 5)`
// );

// sets up a new example pet on the db which has a name and password, no money and 1 for each of their stats.
db.query(
    `INSERT INTO pet4 (name, password, money, intelligence, strength, tea, kindness,'animal_id) VALUES ('Jim', '1234', 0,1,1,1,1, 'cat')`
)

const response = db.query(
    `SELECT * FROM pet4 WHERE animal_id = 'cat'`
)
console.log(response)

// db.query(
//     `INSERT INTO pet4 (name, password, money, intelligence, strength, tea, kindness) VALUES ('Jam', '1234', 0,1,1,1,1)`
// )