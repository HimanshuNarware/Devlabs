const app = require("./src/app");
const { connectToDB } = require("./src/config/database");

const port = process.env.PORT || 8000;

app.listen(port, async () => {
    await connectToDB();
    console.log(`Application running on http://localhost:${port}\n`);
})