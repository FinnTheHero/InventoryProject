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

1. Clone the repository to your local machine:  
   	git clone https://github.com/FinnTheHero/InventoryProject.git  
2. Navigate to the project directory:  
	cd InventoryProject  
3. Navigate to Backend:  
	cd backend  
4. Install the required dependencies:  
	npm install  
5. Create .env file  
	cat > .env  
6. Add user information in .env file (database name, user name, user password)  
	PGDATABASE='your_database_name'  
	PGUSER='your_user_name'  
	PGPASSWORD='your_user_password'  
	then hit ctrl+c  
7. Start backend:  
	npm start  
8. Exit backend(or use another Terminal/command promt):  
	cd ..  
9. Navigate to frontend(font and backend are 2 separate folders placed side by side):  
	cd frontend  
10. Install the required dependencies:  
	npm install  
11. Start frontend:  
	npm start  

The app should now be running at [http://localhost:3000](http://localhost:3000).  

! If connection with database is not established you might have to check port where your database is working  
! Then navigate in backend/database.js and replace port number with your port   

## Usage

### Main Page

On the main page, you will see a list of up to 20 items.  
Use the search and sort control form at the top of the list to search for desired data.  
Use the pagination controls at the bottom of the page to navigate through the entire inventory.  

Each item in the list displays relevant information such as  
index, name, location, and price. To delete an item, simply click the "Delete" button next to the item.  

### Add Page

To add a new item to the inventory, click on the "Add" button at the top of the main page.  
This will take you to the "Add" page, where you can fill out the form with the item's details  
(location, name and price) and click "Submit" to save the item to the database.  
