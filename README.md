## Recipe Finder Architecture Overview

### Components

1. **Card Component**: Displays a product card for each recipe.
2. **Nav Component**: Contains the logo that redirects users to the home page.
3. **Landing Page Component**: Displays the first section when users view the website.
4. **Detail Page Component**: Provides a detailed view of each recipe.
5. **Home Page Component**: Comprises a search area and hosts the card component.
6. **Main Component**: Hosts the nav, landing, and home components.

### Functionality

- **CRUD Operations**: Users can perform CRUD (Create, Read, Update, Delete) operations to maintain their recipes.
- **Viewing Recipes**: Users can view recipes on the landing page and navigate to detailed views.
- **Search Functionality**: The home page includes a search area where users can search for recipes based on name and category.
- **SortFunctionality**: User can arrange the recipe list in ascending or descending order.

### Overview

- **Routing**: Angular's routing is used to navigate between the landing page and the detail page of a recipe.
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.
- **Service Layer**: Services are used to encapsulate business logic and interact with local storage.

## Running the Angular Application

### Git clone

**Clone the Repository**: First, clone the RecipeFinder repository from GitHub. Open your terminal and run the following command:

```bash
git clone https://github.com/saksham310/RecipeFinder.git
```

### Running the app

1. **Install Angular CLI**

```bash
npm install -g @angular/cli@17.3.4
```

2. **Navigate to Your Project Directory** (where your RecipeFinder is)
3. **Install Dependencies**: Use npm install

```bash
npm install
```

4.**Start the Development Server**: Use ng serve to start the server and visit `http://localhost:4200/` to access the application.

```bash
ng serve
```
