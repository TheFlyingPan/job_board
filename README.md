# Job Board



## Installation

For the back end of our app we are using node js + express so to install all the required dependencies
run these commands

```bash
cd back
npm install
cd ..
```

To start the server (API) run this command in the back directory

```bash
npm start
```

The front end uses a bit of php so you will need a php server like WAMP/LAMP/MAMP
You will have to put all of the './front' directory inside your htdocs or www

For the database, the .sql file is included you can just create an empty db named job_board and import our db from the .sql file
( We included several sample advertisements generated at random )

## Usage

To go on the website just go to localhost/WHEREVER_YOU_PUT_THE_FOLDER and start browsing

We included a route in our server that can generate advertisements at random, to use it go to: http://localhost:3000/new_ads to quickly populate your database
