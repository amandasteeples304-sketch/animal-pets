
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
