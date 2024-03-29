//############################################//
// import express from "express";
import { startApolloServer } from "./app";
import { connectDB } from "./db";

connectDB();

startApolloServer();

//############################################//
//############################################//

// import express from "express";
// import { startApolloServer } from "./app";
// import { connectDB } from "./db";

// const app = express();

// (async function () {
//   await connectDB();

//   await startApolloServer(app);

//   const port = process.env.PORT || 4000;
//   app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
//   });
// })();
