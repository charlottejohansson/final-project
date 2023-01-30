import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/auth";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());


// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // npm install crypto
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});

const User = mongoose.model("User", UserSchema);


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
// npm install bcrypt
  try {
    const salt = bcrypt.genSaltSync();
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 8 characters long"
      });
    } else {
      const newUser = await new User({username: username, password: bcrypt.hashSync(password, salt)}).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser._id
        }
      });
    }
  } catch(error) {
      res.status(400).json({
        success: false,
        response: "Sorry :( Could not register the user"
      });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({username});
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          id: user._id,
          accessToken: user.accessToken
        }
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials didn't match"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      response: "Oops, sorry! It did not work, please try again!"
    });
  }
});

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({accessToken: accessToken});
    if (user) {
      next();
    } else {
      res.status(401).json({
        response: "Please log in",
        success: false
      })
    }
  } catch (error) {
    res.status(400).json({
      response: "Oops, sorry! It did not work, please try again!",
      success: false
    })
  }
}

const ProfileSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => new Date() 
  },
  hearts: {
    type: Number,
    default: 0
  }
}); 


const Profile = mongoose.model("Profile", ProfileSchema);

app.get("/profiles", authenticateUser);
app.get("/profiles", async (req, res)=> {
  const profiles = await Profile.find({});
  res.status(200).json({success: true, response: profiles});
});

app.post("/profiles", authenticateUser)
app.post("/profiles", async (req, res) => {
  const { message } = req.body;
  try {
    const newProfile = await new Profile({message}).save();
    res.status(201).json({success: true, response: newProfile});
  } catch (error) {
    res.status(400).json({success: false, response: "Oops, sorry! It did not work, please try again!"});
  }
});

// Start the server
app.listen(port, () => {
});
  