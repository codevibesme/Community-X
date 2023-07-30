import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import multer from "multer";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io";
import { verifyJwt } from "./middleware/verifyJwt.js";
import authRoutes from "./routes/auth.js";
import channelRoutes from "./routes/channel.js";
import chatRoutes from "./routes/chat.js"
import searchRoutes from "./routes/search.js";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT;
const app = express();
const server = createServer(app);
app.use(cors());
app.use(helmet({
    crossOriginEmbedderPolicy:false
}));
app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use('/assets', express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "/public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods:["GET", "POST"]
    },
});

io.on('connection', (socekt) => {
    console.log('a user connected');
    socekt.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.use("/auth", authRoutes);
app.use("/channel", verifyJwt, channelRoutes);
app.use("/chat", verifyJwt, chatRoutes);
app.use("/search", verifyJwt,  searchRoutes);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {
    server.listen(PORT, () => console.log(`server running at port: ${PORT}`));
});