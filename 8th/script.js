
const express = require("express");

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Ali", age: 18, course: "Backend" },
    { id: 2, name: "Ahmed", age: 19, course: "Frontend" },
    { id: 3, name: "Hassan", age: 17, course: "Python" }
];

app.get("/", (req, res) => {
    res.send("Welcome to Student API");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((u) => u.id === id);

    res.json(user);
});

app.post("/users", (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.age = req.body.age;
    user.course = req.body.course;

    res.json(user);
});

app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    users = users.filter((u) => u.id !== id);

    res.json({ message: "User deleted successfully" });
});

app.get("/search", (req, res) => {
    const course = req.query.course;

    const result = users.filter((u) => u.course === course);

    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
