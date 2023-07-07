# Recipe Website README Guide

This README guide provides an overview of the structure and files in the recipe website project. It will help you understand the organization of the files and the roles they play in the website. Here's a breakdown of the files and components in the project:

## Components
The "Components" directory contains three files:

1. **Main.js**: Parent Component. This file contains the props and events necessary for displaying the heading and search bar on the website.

2. **MainList.js**: Child Component. This file contains the data for three recipes imported from the "recipes.json" file. It is responsible for rendering the recipe list on the website.

3. **SearchList.js**: This file contains the HTML code for the search button on the website.

## Services
The "Services" directory contains two files:

1. **futurerecipes.js**: This file contains a collection of over 1600 recipes that are intended for future development. It provides a wide range of recipes that can be added to the website in the future.

2. **recipes.json**: This file contains the data for the three recipes currently used in the website. It serves as the data source for the recipe list displayed on the website.

## Other Files
Apart from the directories mentioned above, the project includes the following files:

1. **App.js**: It acts as a controller. It sets up the main component App and renders the Main component within it using the Preact library. The resulting output is rendered into the HTML element with the ID "app" on the web page

2. **index.html**: This file sets up the basic structure of an HTML document, includes necessary external resources (stylesheet and scripts), and defines the location where the application will be rendered (identified by the "app" ID)

## Project Contributors
The project was developed by two students:

1. Conner Cochran: Student A

2. Nimish Khandelwal: Student B

If you have any further questions or need assistance with the recipe website, feel free to reach out to the contributors mentioned above. They will be happy to help you.

Happy cooking and enjoy the recipe website!