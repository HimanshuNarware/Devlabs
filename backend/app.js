import express from 'express';
import mongoose from 'mongoose';
const app =  express();
import router from './routes/userRoutes.js';

const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use("/api/users", router);

mongoose.connect("mongodb+srv://kpande026:kpande026@cluster01.jcaof9p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
