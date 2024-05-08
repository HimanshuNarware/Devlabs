# How to Build DevLabs: Step-by-Step Guide
Welcome to the step-by-step guide on building DevLabs! In this tutorial, you'll learn how to set up and contribute to this open-source project. Whether you're new to React.js or experienced in web development, this guide will help you navigate through the process.

Prerequisites
Before getting started, make sure you have the following installed:

Node.js
npm (Node Package Manager)
Getting Started
# DevLabs

Welcome to DevLabs, a website where you can discover free tools contributed by the open-source community.

## Introduction

DevLabs is a platform for sharing knowledge and discovering useful tools for various aspects of life, including development, education, and productivity. This repository contains the source code for the DevLabs website, built using React.js.

## Tech Stack

- **React.js**: A JavaScript library for building user interfaces.

## Installation

1. **Clone the repo**:
   ```
   git clone https://github.com/username/Devlabs.git
   ```

2. **Install Dependencies**:
   ```
   cd Devlabs
   npm install
   ```

3. **Start Development Server**:
   ```
   npm start
   ```

## Contributing

1. **Create a New Branch**:
   ```
   git checkout -b YourBranchName
   ```

2. **Add New Tool**:
   - Navigate to `src > DB > product.json`.
   - Add your tool's information in the following format:

   ```json
   {
       "productName": "<App_Name>",
       "category": "remote | resume | tweet | ai | ethical | movies | extensions | tools",
       "image": "<Image-Url>",
       "link": "<Link_to_the_website>",
       "description": "<Description_of_product>"
   }
   ```

3. **Stage and Commit Your Changes**:
   ```
   git add "<files_you_have_changed>"
   git commit -m "<your_commit_message>"
   ```

4. **Push Your Changes**:
   ```
   git push origin YourBranchName
   ```

5. **Create a Pull Request**.

## Conclusion

Thank you for your interest in contributing to DevLabs. Your contributions help make this platform more valuable to the community!
