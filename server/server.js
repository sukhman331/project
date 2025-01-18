const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

const members = [
    {
        name: "sukhman",
        id: 1,
    },
    {
        name: "saman",
        id: 2
    }
] 


app.get(`/api/members`, (req, res) => {

    const query = req.query.q.toLowerCase();
    if (!query) {
        return res.json([]);
    }

    const result = members.filter(member => member.name.toLowerCase().includes(query));
    console.log(result)
    res.json(result)

    // res.json(members)
});

app.listen(8080, () => {
    console.log('server is running')
});