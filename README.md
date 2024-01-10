<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <img src="assets/logo.png" alt="logo" width="200" height="auto" />
  
  <h1> Jobster </h1>
  
  <p>
    An one stop job search application for all your needs.
  </p>
  
  
<!-- Badges -->
   
<h4>
    <a href="https://jobster-49pt.onrender.com/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/MilanMahanti/jobster">Documentation</a>
  <span> · </span>
    <a href="https://github.com/MilanMahanti/jobster/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/MilanMahanti/jobster/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Contributing](#wave-contributing)
  * [Code of Conduct](#scroll-code-of-conduct)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

  

<!-- About the Project -->
## :star2: About the Project
Jobster is a **MERN** Stack application for searching jobs. The backend is made upon **Node** and **Express** and the fronend of the application is done with **React** and **React Query**. It is a very simple full stack application user can easily register and login and starts adding jobs. I have used **mongoDB** for database with **monGoose** to connect with the database.

<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
<img width="897" alt="Screenshot 2024-01-10 075429" src="https://github.com/MilanMahanti/jobster-mern-application-temp/assets/114055453/f5f6ec60-2226-4ab0-be7b-6aab1a8e9818">
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactjs.org/">React Query</a></li>
    <li><a href="https://reactjs.org/">React Router</a></li>
    <li><a href="https://reactjs.org/">Styled Components</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://nodejs.com/">Node.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://m0ngoose.com/">Mongoose</a></li>
  </ul>
</details>




<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`DATABASE_PASSWORD`

`JWT_SECRET`

`JWT_EXPIRES_IN`

<!-- Getting Started -->
## 	:toolbox: Getting Started
- User can register to the application to start using the application
- Once registerd successfully user need to login first
- After logged in User can add jobs,edit jobs and delete job as there need
- Users can nicely filter jobs based on jobstatus or jobposition or any other field they want
- There is also a stats page for the user to see overall stats of there jobs
- Admin can see the how many user is using the application and how many jobs has been added so far
<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager

```bash
 npm install --global 
```

<!-- Installation -->
### :gear: Installation

Install my-project with npm

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/MilanMahanti/jobster.git
```

Go to the project directory

```bash
  cd jobster
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


<!-- Deployment -->
### :triangular_flag_on_post: Deployment

To deploy this project run

```bash
  npm run setup-production-app
```


<!-- Contributing -->
## :wave: Contributing


Contributions are always welcome!


<!-- FAQ -->
## :grey_question: FAQ

- Question 1

  + Answer 1

- Question 2

  + Answer 2




<!-- Contact -->
## :handshake: Contact

Milan Mahanti  - milanmahanti16@gmail.com

Project Link: https://jobster-49pt.onrender.com/


<!-- Acknowledgments -->
## :gem: Acknowledgements

I would like to thank John for making the MERN tutorial in Udemy.

 - [Readme Template](https://github.com/othneildrew/Best-README-Template)
