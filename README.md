# JavaScript web application - "Forkify"

[Check out the live version](https://forkifyrecipesjw.netlify.app/)


![](images/landing.PNG)




## Overview
Forkify is a web application developed using JavaScript. The project is built using an MVC (Model View Controller) architecture pattern. It pulls data from an API to allow users to search recipes based on key words or ingredients. Users functionality includes the ability to update ingredient quantities based on your desired serving size as well as bookmarking your favourite recipes to save for later. The application is hosted and can be viewed live on Netlify.  

## Motivation & Acknowledgements
This project was created while completing "The Complete JavaScript Course 2021: From Zero to Expert!" by Jonas Schmedtmann.<br>
HTML and CSS styling for all elements of the application were provided as a template at the beginning of the project.<br>

## Implemented Features
- **Search**: Users can enter a key word or ingredient in the search bar. The results controller will then query the API and render the results to the user.<br><br>
**Pagination**: Results are displayed using pagination to avoid cluttering the view window. Initially 10 results are displayed. The user can use the pagination buttons to cycle to the next 10 results etc.<br><br>
**Recipe View**: A selected recipe will be opened in the recipe view window. This displays further information on the recipe including ingredients and an example image along with the link to the original recipe.<br><br>
**Update servings**: The serving size for each recipe can be adjusted by the user. This will update the required quantites for each ingredient.<br><br>
**Bookmarking**: Each recipe will be displayed with a button to allow the recipe to be bookmarked by the user. This recipe will then be stored for the user and can be accessed through the bookmarks tab on the application navbar. Bookmarks can be removed be simply clicking the bookmarked button a second time. 


## JavaScript concepts and techniques used

- Event Propagation: Bubbling and Capturing
- Interstion Observer API
- Lazy loading images
- Smooth scroll
- Building tabed and slider components

### Features

* Query an ingredient to recieve a list of recipes containing that ingredient.
* Easily bookmark or edit the servings of the selected recipe.
* Create your own recipes and store them as user recipes.
* Remove bookmarks or delete user recipes.
* LocalStorage keeps the data when users exit the app.

### Project Architecture

Built using the MVC Architecture. View class extends the rest of the components. Controller keeps bidirectional dataflow. SCSS files are divided for major components.


## Author
[James Waters](https://james-waters.com)



