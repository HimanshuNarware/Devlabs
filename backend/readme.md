# DevLabs Backend

Welcome to the backend of DevLabs, the platform that connects users with a collection of free tools from the open-source community. This backend repository powers the server-side logic and facilitates seamless interactions with the database.

## Tech Stack

- Node.js - A JavaScript runtime for server-side development.
- Express.js - A minimal and flexible Node.js web application framework.
- MongoDB - A NoSQL database for storing tool data.
- Mongoose - An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/Devlabs-backend.git
### 2. Install Dependencies

```bash
npm install
`
### 3. Start development Server

```bash
npm start

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
