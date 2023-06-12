# spring-boot-react-ecommerce-app
eCommerce application based on the microservices architecture built using Spring Boot and ReactJS.
 
**FEATURES**

- Google OAuth 2.0 support for quick login.
- Regular Username/Password authentication.
- Search bar and Search suggestions help to find products quickly.
- Stores user information in the MySQL database.
- Stores API data in Redis Cache to minimize network calls.
- Select filters to display products based on the selections.
- Sort products by popularity, newest, and prices.
- Pagination to display max products on a single page.
- Stores authentication details like token information in cookies.
- Store cart's product information in cookies.
- Payment service using Stripe's API to buy products.
- Responsiveness support for all devices.

**TOOLS USED**

- **ReactJS:** Front-end Javascript framework.
- **Spring Boot 2.0:** Back-end JAVA framework to build microservices using Spring
 Rest Controller and Spring JPA.
- **Material-UI:** Used Google's material design based on the CSS Framework for a responsive website.
- **Semantic-UI:** Used some components which Material-UI doesn't support.
- **MySQL:** Stores product and user information.
- **Redis:** Stores API data in key-value pairs.
- **Cloudinary:** CDN server for storing product images. 
- **Google OAuth:** 3rd Party authentication service for quick login by retrieving user profile information. 
- **Stripe:** Payment service API to handle user payment requests.
- **Docker-Compose:** Easy way to bring up the application using containerization and behaves similarly in the production environment.
 
**MICROSERVICES**

- **React-UI Service:** Front-end client UI which displays data and makes API calls using Axios API.
- **Common Data Service:** Handles client request to provide common data such as product, filters, categories and order information, etc. 
- **Authentication Service:** Creates user account and handles username/password authentication.
- **Payment Service:** Handles payment requests from the client and makes a subsequent request to Stripe API
 for money deduction. 
- **Search Suggestion Service:** Provide default search suggestions and provides suggestions based on a prefix using Hashmap. The service creates the Hashmap based on available data from the database with various combinations and populates the map.