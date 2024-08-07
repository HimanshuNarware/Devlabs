const mongoose = require("mongoose");
const { connectToDB } = require("../src/config/database");
const Tool = require("../src/models/Tool");

async function db() {
  try {
    await connectToDB();
    console.log("Database connected!");

    const sampleData = [
      {
        productName: "Carousel Hero",
        category: "tools",
        image: "https://i.ibb.co/7rRW6TW/logo-social-large.png",
        link: "https://carouselhero.com",
        description: "Create social media carousels for free and with no signup.",
      },
      {
        productName: "PikaShows",
        category: "movies",
        image: "https://tinyurl.com/37csr8my",
        link: "https://www.pikashows.download/",
        description: "Download this application for PC and Mobile to stream all types of TV Shows and Movies.",
      },
      {
        productName: "Scaler",
        category: "coding",
        image: "https://bit.ly/3XoZKgc",
        link: "https://bit.ly/3plUFZw",
        description: "Scaler is an outcome-focused, ed-tech platform for techies.",
      },
      {
        productName: "InterviewBit",
        category: "coding",
        image: "https://bit.ly/3NH8dIt",
        link: "https://bit.ly/43VBwNf",
        description: "InterviewBit prepares you not only for the interviews, but for the actual job too.",
      },
      {
        productName: "Momentum",
        category: "extensions",
        image: "https://bit.ly/3JoG8mI",
        link: "https://bit.ly/3JoG6v6",
        description: "Replace new tab page with a personal dashboard to help you get focused, stay organized, and keep motivated to achieve your goals.",
      },
      {
        productName: "ACM",
        category: "tools",
        image: "https://avatars.githubusercontent.com/u/65459277?s=200&v=4",
        link: "https://www.acm.org/",
        description: "It provides a platform for computing professionals, researchers, educators, and students to exchange ideas and information related to computer science and information technology.",
      },
    ];

    const insertedData = await Tool.insertMany(sampleData);
    console.log("Sample data added successfully!", insertedData);
  } catch (error) {
    console.error("Error adding sample data:", error);
  } finally {
    mongoose.connection.close(() => {
      console.log("Database connection closed.");
    });
  }
}

db();

