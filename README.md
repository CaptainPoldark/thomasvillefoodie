# Thomasville Foodie App

## Online food ordering app with Stripe integration

#### Live Demo on Digital Ocean

https://thomasvillefoodie-dawry.ondigitalocean.app/

Use Stripe's test credit card

Card Number:     4242 4242 4242 4242 

Expiration Date: 0424 

Zip Code:        Any Zip Code

### Installing and Running

#### Install dependencies using NPM or Yarn

`npm install` or `yarn add`

#### Run the front end locally

`npm run dev`

### Features

This application connects to the strapi database running at foodiedb.battlegroundls.com. The database has several restaurants, dishes for each restaurant, and integration for [Stripe payment processing](https://stripe.com/docs/development/quickstart).

#### Homepage

The user is presented with cards with information about each restaurant in the database. When clicking on a card they are taken to that restaurant's page in the app.

#### Navigation Menu

While browsing the site as a guest the user has the following options in the navigation menu:
-Home
-Signup
-Login

When the user signs in the navigation bar options change to:
-Home
-Settings
-Logout
-Badge with the username

#### Restaurant Pages

The restaurant pages are slugs in Next.Js. When the user selects a restaurant from the home page, they are then sent to a dynamic route for that restaurant. The url changes to name of the restaurant without spaces. For example /restaurants/GrassRootsCoffeeCo. The page will display cards representing each item on the menu. Each card displays the items picture (or placeholder image), the item name, a description of the item, and the price.The user may select an item to add it to the cart. Users may also search for dishes from this page.

#### Cart

On every page, except the settings page, the card is displayed either on the right of the screen, or at the bottem of the restaurant or menu cards depending on the screensize. The cart displays the list of menu items selected by the user, the quantity chosen, buttons next to the quantity to increase or decrease the count (the count can be increased by clicking on the menu item again), a box displaying the total cost of items in the cart, a smaller box displaying the amount of tax and service fee calculated for the current order, and an additional button at the bottom of the card. The bottom button will either display "Please login to place your order" and redirect to the login page when the button is pressed (the state of the cart is preserved while logging in), or the button will display "Order" if the user is logged in. Clicking the order button will bring the user to the checkout page. 

#### Settings

The settings page displays two cards. The first will display profile information, but currently only displays the username and a promise to update the application to allow viewing and changing user information. Another card displays the last 10 orders history including the charge confirmation ID received from stripe during checkout.

#### Create Account and Login

This app has a create account page and login page. Only email and password login is supported at this time, and the data is saved to the application's backend database.

#### Checkout page

The checkout page features a card displaying the cart items, total for the items, and the calculated Tax and Service Fee. The tax and services fee are not currently added to the total. A second card displays the payment information form. The user's name, card information, and zip code are required. Once the required information is entered the payment authotization button is enabled. The request is sent to the application's backend and all cost verification, and logic for the Stripe payment processing is done there. When completed the backend will return a failed, or success status, which is displayed on the frontend.

### Known bugs

##### Cart not defined

Under specific circumstances, a page may not load due to the cart not being defined. Logic for the cart has been checked and rewritten, so this should no longer be an issue.

##### Navigation bar not changed

Due to some recent changes, when logging in or out the navigation bar did not change to reflect the authorized (loggedin) or unauthorized (loggedout) state of the user. This should have been resolved as of 3/20/2022.

##### Not all dishes are displayed

Due to a limitation in GraphQL, not all menu items are returned. GraphQL only returns the first 10 dishes. Some restaurants have three times as many. Pagination was added temporarily, but it resulted in the next 10 menu items being rendered on each visit to the restaurant page, rather than rendering all menu items at the same time. This also caused in issue for restaurants with less than 10 dishes, as it made it possible to visit a page and see no dishes rendered because the pagination offset was set higher than the number of dishes owned by the restaurant. The default behaviour of only showing up to 10 menu items has been restored. The RestAPI may provide a solution to this. Any solution will need to allow the user to search all dishes.

### Roadmap

- Google Authentication
- Migrate Database to Firebase
- Implement profile changes on the settings page
- Fix number of menu items shown to allow all items for a restaurant to be displayed, and allow the user to search  all dishes
- Automatically send an email after Stripe confirmation to the Admin or staff account. This email should display the cart items, total, service fee, tax, and restaurant ordered from.
- Alert the user that ordering items from more than one restaurant in the same order will result in a higher service charge.
- Group items in the cart that belong to the same restaurant when the user orders from more than one restaurant in the same order
- Allow users create a group order with another user if the order is delivered to the same address
- Allow the user to select size, and other options for each menu item
- Create a slug page for a menu item that allows customization options
- Send a confirmation email to the user when their ordered is processed successfully

### Author

captainpoldark

### Version

1.5.0
