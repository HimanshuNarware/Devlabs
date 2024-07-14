<div align="center">
  <h1><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" alt="Laptop" width="50" height="50" /> DevLabs</h1>
  <p>Welcome to DevLabs, a website where you can search for free tools that are useful for your daily needs. This application is created by the incredible open-source community. On DevLaps, you can discover a collection of free tools that can assist you in various aspects of your life. Moreover, you have the opportunity to contribute to this project by adding more tools to the database.</p>
  <p>Check out the live project at <a href="https://DevLabs-one.vercel.app">DevLabs</a></p>
  <img src="https://github.com/HimanshuNarware/Devlabs/assets/83147410/a508cf73-6724-46d3-a66d-6b9a7811bfdd" alt="DevLaps" />
</div>

---
## 🏆 Featured in:

<table>
  <thead>
    <tr>
      <th>Event Logo</th>
      <th>Event Name</th>
      <th>Event Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td><img src="src/assets/images/Gssoc Label.png" width="200" height="auto" loading="lazy" alt="GSSoC 24"/></td>
      <td>GirlScript Summer of Code 2024</td>
      <td>GirlScript Summer of Code is a three-month-long Open Source Program conducted every summer by GirlScript Foundation. It is an initiative to bring more beginners to Open-Source Software Development.</td>
    </tr>
  </tbody>
</table>

---
## 🌟 Our Mission
Our website provides a platform for contributors from all over the world to share their ideas in the form of helpful websites that are free to use. It helps us save a ton of time by allowing us to access a list of all the websites in one location. Whether it be a tool or an educational platform, we may discover any type of website here. This makes it a platform for sharing knowledge!

---

## 💻 Tech Stack
<!-- JavaScript -->
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript logo">

<!-- HTML5 -->
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 logo">

<!-- CSS3 -->
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 logo">

<!-- React.js -->
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React.js logo">

---

## 🚀 Quick Start
Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request. Make sure to follow the project's code of conduct.

---

## 📦 Installation

### With Docker

You can clone the project directly from this repo to your local system.

### 1. Clone the Repo

```bash
git clone https://github.com/username/Devlabs.git
```

### 2. Navigate to the project directory

```bash
cd Devlabs
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


### 5. Run Docker Compose

```bash
docker-compose up --build
```

You have to use build for the first time only then you can use `docker-compose up`

Now follow all the steps from point 6 of without docker to contribute to the project.


### Without Docker

You can clone the project directly from this repo to your local system.

### 1. Clone the Repo

```bash
git clone https://github.com/username/Devlabs.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
#or
npm run dev
```

### 4. Create Backend Environment

```bash
MONGODB_URI=<mongodb connection uri for the database>
PORT=<port number on which backend is running>
FRONTEND_URL=<url of the frontend>
MAIL=<email from which to send mail to self>
PASSWORD=<passkey corresponding to above mail>
```

### 5. Create Frontend Environment

All the environment variables for react must be prefixed with `REACT_APP_`.

```bash
REACT_APP_BACKEND=<url of the backend>
```

### 6. Create a New Branch

```bash
git checkout -b YourBranchName
```

### 7. Make Your Changes to the Source Code

To add a new tool:
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
  - Ensure that your URLs are short. It is recommended to use bitly for URL shortening.
  - Descriptions should not exceed 10-12 words.


### 8.  Stage Your Changes

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`

---

Instead, stage your changes for each file/folder specifically.

```bash
git add "<files_you_have_changed>"
```

### 9. Commit Your Changes

```bash
git commit -m "<your_commit_message>"
```

### 10. Push Your Local Commits to the Remote Repository

```bash
git push origin YourBranchName
```

### 11. Create a Pull Request
Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

<div align="center">
  <h2>Let's Collaborate and Make DevLabs Even Better! 💻🌟</h2>
</div>

### ✨ Features

1. User Authentication:
Secure user registration and login using JWT.
OAuth integration for social logins (Google, Facebook).

2. User Profiles:
Customizable user profiles.
Profile picture upload and bio section.

3. Tool Rating & Reviews
Users can rate and review tools.
Aggregate ratings for each tool displayed.

4. Favorites & Bookmarking
Users can bookmark their favorite tools.
Quick access to bookmarked tools from the profile.

5. Tool Categories & Tags
Tools categorized for easy browsing.
Tagging system for quick filtering and searching.

6. Advanced Search
Search tools by name, category, or tags.
Filter results by ratings and reviews.

7. Responsive Design
Fully responsive design for mobile, tablet, and desktop.

8. Notifications
Email notifications for new tools, reviews, and updates.

9. Admin Dashboard
Manage users, tools, and reviews.
Analytics on tool usage and user engagement.

10. Documentation
Comprehensive documentation for developers.
API documentation for integrating with other platforms.

### 🌍 Community
### 🏆 Contributors
Recognize the individuals who have contributed to the project. You can use tools like All Contributors to automatically generate a list of contributors.
``` bash
npx all-contributors-cli add <username> <contribution>
```

