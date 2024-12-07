const express = require("express");
const { connectToMongoDB } = require("./connector");
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const app = express();
const PORT = 3000;

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(express.json());

// Routes
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true } // Return the updated document
        );

        // If the document is not found
        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        // Redirect to the original URL
        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

















































// const express = require("express");

// const { connectToMongoDB } = require("./connector");

// const urlRoute = require('./routes/url');
// const URL = require('./models/url');
// const app = express();
// //app.use(express.json());
// const PORT = 3000;

// connectToMongoDB("mongodb://localhost:27017/short-url")
// .then( () => console.log("Mongodb connected"));

// app.use(express.json());

// app.use("/url" , urlRoute);

// app.get('/:shortId', async (req, res) => {
//      const shortId = req.params.shortId;
//      const entry = await URL.findOneAndUpdate(
//         {
//         shortId
//         }, 
//        {
//         $push: {
//           visitHistory: {
//              timestamp: Date.now(),
//           },
//         },
//      }
//      );
//      res.redirect(entry.redirectURL);
// });

// app.listen(PORT, ()=> console.log(`Server started....${PORT}`))

