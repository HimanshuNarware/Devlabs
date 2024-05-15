<div align="center">
  <h1><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" alt="Laptop" width="50" height="50" /> DevLabs</h1>
  <p>Welcome to DevLabs, a website where you can search for free tools that are useful for your daily needs. This application is created by the incredible open-source community. On DevLabs, you can discover a collection of free tools that can assist you in various aspects of your life. Moreover, you have the opportunity to contribute to this project by adding more tools to the database.</p>
  <p>Check out the live project at <a href="https://DevLabs-one.vercel.app">DevLabs</a></p>
  <img src="https://github.com/HimanshuNarware/Devlabs/assets/83147410/a508cf73-6724-46d3-a66d-6b9a7811bfdd" alt="DevLabs" />
</div>

---

## 🌟 Our Mission
Our website provides a platform for contributors from all over the world to share their ideas in the form of helpful websites that are free to use. It helps us save a ton of time by allowing us to access a list of all the websites in one location. Whether it be a tool or an educational platform, we may discover any type of website here. This makes it a platform for sharing knowledge!

---

## Tech Stack

Reactjs - Reactjs is a JavaScript library for building user interfaces.
🚀 Quick start
Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request. Make sure to follow the project's code of conduct.

## Installation

You can clone the project directly from this repo to your local system.

### 1. Clone the repo

```bash
https://github.com/username/Devlabs.git
```

The `.` will clone it to the current directory so make sure you are inside your project folder first.

### 2. Install Dependencies

```bash
npm install
`
### 3. Start development Server

```bash
npm start
#or
npm run dev
```

### 3. Create Backend Environment

```bash
MONGODB_URI=<mongodb connection uri for the database>
PORT=<port number on which backend is running>
FRONTEND_URL=<url of the frontend>
MAIL=<email from which to send mail to self>
PASSWORD=<passkey corresponding to above mail>
```

### 4. Create Frontend Environment

All the environment variables for react must be prefixed with `REACT_APP_`.

```bash
REACT_APP_BACKEND=<url of the backend>
```

### 5 Create a new branch

```bash
git checkout -b YourBranchName
```

### 6. Make your changes to the source code

 Add new tool :
   > Go to **src > DB > `product.json`** & add your code

```bash
{
    productName: "< App_Name >",
    category: "remote | resume | tweet | ai | ethical | movies | extensions | tools",
    image: "< Image-Url >",
    link: "< Link_to_the_website >",
    description: "< Description of product >"
},
```

To ensure that your URLs are short, it is recommended to use bitly for URL shortening.
Description should not exceed 10-12 words

### 7. Stage your changes

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`

> Instead, stage your changes for each file/folder
>
> By using public path it means it will add all files and folders under that folder, it is better to be specific

```bash
git add "<files_you_have_changed>"
```

### 8. Commit your changes

```bash
git commit -m "<your_commit_message>"
```

### 9. Push your local commits to the remote repository

```bash
git push origin YourBranchName
```

**10.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!
