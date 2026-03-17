const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Dummy user (for now)
const users = [
  {
    email: "patient@gmail.com",
    password: "1234",
    role: "patient"
  },
  {
    email: "doctor@gmail.com",
    password: "1234",
    role: "doctor"
  }
];

// LOGIN API
app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({
      success: true,
      role: user.role
    });
  } else {
    res.json({
      success: false,
      message: "Invalid credentials"
    });
  }

});



app.post("/register", (req, res) => {

  console.log("Received:", req.body);  // 👈 debug

  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Missing data" });
  }

  users.push({ name, email, password, role });

  res.json({ success: true,
    message: "User registered" });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});