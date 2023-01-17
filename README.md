# JavaScript web application using forkify API

## Inspired by JavaScript zero to hero

[Check out the live version](https://forkifyrecipesjw.netlify.app/)

> by [James Waters](https://james-waters.com)
# ![](images/landing.PNG)
# ![](images/landing3.PNG)

## Introduction

Forkify is a recipe web app using the Forkify API to allow users to search, view, modify, bookmark and add recipes.

### Features

* Query an ingredient to recieve a list of recipes containing that ingredient.
* Easily bookmark or edit the servings of the selected recipe.
* Create your own recipes and store them as user recipes.
* Remove bookmarks or delete user recipes.
* LocalStorage keeps the data when users exit the app.

### Project Architecture

# ![architecture](src/img/readme-forkify-architecture.png)

Built using the MVC Architecture. View class extends the rest of the components. Controller keeps bidirectional dataflow. SCSS files are divided for major components.

