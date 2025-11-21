// import mongoose from "mongoose";

// export function ConnectToDB() {
//     console.log("Trying to connect to MongoDB..."); 
//     mongoose.connect("mongodb+srv://racheli99268:VsR3E1SLFzPY7Wtd@cluster0.qikex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//         .then(con => { 
//             console.log("mongoDB connected");
//         })
//         .catch(err => {
//             console.log("nooooooooooooooo:):(", err);
//             process.exit(1);
//         })
// }

import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

export function ConnectToDB() {
    console.log("Trying to connect to MongoDB..."); // הודעה לפלט מיד עם קריאת הפונקציה
    const mongoURI = process.env.MONGO_URI; // קבלת ה-URI מתוך משתני הסביבה
    
    if (!mongoURI) {
        console.error("MONGO_URI is not defined in .env file");
        process.exit(1); 
    }

    mongoose.connect(mongoURI)
        .then(() => { 
            console.log("mongoDB connected");
        })
        .catch(err => {
            console.log("Connection failed", err);
            process.exit(1);
        });
}
