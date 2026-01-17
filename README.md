Personal Blog React Project

A simple personal blog built with React, showcasing posts about me, my background, profession, and GitHub projects.

Features

Header with blog name

About section with profile image

List of blog posts

Links to GitHub projects

Footer


Getting Started
Prerequisites

Node.js (v16 or higher recommended)

npm (comes with Node.js)

Installation

Clone the repository:

git clone https://github.com/lemeria10/personal-blog.git


Navigate to the project folder:

cd personal-blog


Install dependencies:

npm install

Running the Project

Start the development server:

npm run dev


Open your browser and go to:

http://localhost:5173


Your personal blog should now be live locally.

Project Structure

 src tree
.
├── Personal-Blog
│   ├── About                 # About section
│   │   └── About.jsx
│   ├── App.jsx              # Main app component
│   ├── Articlelist          # List of articles with Individual article component.
│   │   ├── Article.jsx
│   │   └── Articlelist.jsx
│   ├── Footer                #Footer
│   │   └── Footer.jsx
│   └── Header                 # Header component
│       └── Header.jsx
├── assets
│   └── nick.jpg
├── index.css                    #styles
└── main.jsx
