# Inventory Management App

The Inventory Management App is a simple web application designed to store, display, and manage item data.
This app provides an easy-to-use interface with basic features to add, delete, and view items.

## Features

- List 20 items per page with page-based pagination for easy browsing
- Search By items location or sort data by price and name
- Add new items using a form on the "Add" page
- Delete items directly from the main page

## Endpoints

1. `GET /inventories`: Retrieve a list of items with pagination support
2. `POST /inventories`: Add a new item to the inventory
3. `DELETE /inventories/:id`: Delete an item from the inventory

## Installation

Assuming you already have PostgreSQL setup and running on your local machine

1. Clone the repository to your local machine:__
   	git clone https://github.com/FinnTheHero/InventoryProject.git__
2. Navigate to the project directory:__
	cd InventoryProject__
3. Navigate to Backend:__
	cd backend__
4. Install the required dependencies:__
	npm install__
5. Create .env file__
	cat > .env__
6. Add user information in .env file (database name, user name, user password)__
	PGDATABASE='your_database_name'__
	PGUSER='your_user_name'__
	PGPASSWORD='your_user_password'__
	then hit ctrl+c__
7. Start backend:__
	npm start__
8. Exit backend(or use another Terminal/command promt):__
	cd ..__
9. Navigate to frontend(font and backend are 2 separate folders placed side by side):__
	cd frontend__
10. Install the required dependencies:__
	npm install__
11. Start frontend:__
	npm start__

The app should now be running at [http://localhost:4000](http://localhost:3000).__

! If connection with database is not established you might have to check port where your database is working__
! Then navigate in backend/database.js and replace port number with your port __

## Usage

### Main Page

On the main page, you will see a list of up to 20 items.__
Use the search and sort control form at the top of the list to search for desired data.__
Use the pagination controls at the bottom of the page to navigate through the entire inventory.__

Each item in the list displays relevant information such as__
index, name, location, and price. To delete an item, simply click the "Delete" button next to the item.__

### Add Page

To add a new item to the inventory, click on the "Add" button at the top of the main page.__
This will take you to the "Add" page, where you can fill out the form with the item's details__
(location, name and price) and click "Submit" to save the item to the database.__