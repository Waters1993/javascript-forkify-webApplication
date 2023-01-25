# JavaScript web application - "Forkify"

Need a recipe for tonight? [Check out the live version](https://forkifyrecipesjw.netlify.app/)
 <p align="center">
  <img src="./images/landing.PNG" alt="landingPage" width="650"/>
</p>

## Overview
Developed using vanilla JavaScript forkify is built using an MVC (Model View Controller) architecture pattern. Pulling data from an API its allows users to search recipes based on key words or ingredients. Functionality includes updating ingredient quantities based on your desired serving size and bookmarking your favourite recipes to access later. The application is hosted and can be viewed live on Netlify.  

## Motivation & Acknowledgements
This project was created while completing "The Complete JavaScript Course 2021: From Zero to Expert!" by Jonas Schmedtmann.<br>
HTML and CSS styling for all elements of the application were provided as a template at the beginning of the project.<br>

## Features 
<div align="center">
| User Story     | Feature |
| ----------- | ----------- |
|   Search for recipes    | Input field to send request to API with searched keywords.<br>Display results with pagination.<br>Display recipe with cooking time, servings and ingredients      |
| Update the number of servings   | Update all ingredients according to current number of servings        |
| Bookmark recipes   | Display list of all bookmarked recipes        |
| See my bookmarks when I come back later   | Store bookmark data in the browser using local storage.<br>On page load, read saved bookmarks from local storage and display        |
</div>
## Architecture Patterns

- **MVC**: The application is "split" into three parts: the data(Model), the presentation of that data to the user(View), and the actions taken on any user interation(Controller). This design pattern allows a clean cut separation of concerns allows for easier code maintainability or changes in the future. 
![](images/MVC.png)
![](images/MVC1.PNG)
- **OOP**: Each view for the application (search, recipe, or results view) is represented as an object. All view objects inherit from a View.js parent class which contains methods and attributes common to all views. 
- **Publish/Subscribe**: The publish/subsribe design pattern is utilized to maintain a separation of concerns between the view and the controller. A handler function is added to each view to listen for any click events by the user. Once a click event is received the handler then calls a function which is captured in the controller. 
In this scenario the controller is subsribed to the view which publishes once a click event occurs. 
![](images/pubsub1.PNG)
![](images/pubsub2.PNG)

## Author
[James Waters](https://james-waters.com)

<!-- - **Search**: Users can search a key word or ingredient. The results controller queries the API and renders the results to the screen.<br>
- **Pagination**: Results are rendered using pagination. Each page renders 10 new recipes from the search results.<br>
- **Recipe View**: Displays additonal recipe information such as ingredients, an example image, and the link to the original recipe.<br>
- **Update servings**: Automatically updates the required quantites for each ingredient when serving size is adjusted by the user.<br>
- **Bookmarks**: Allow users to mark their favourite recipes. Bookmarked recipes can be viewed and accessed in the bookmarks dropdown.  -->



