#Ecommerce app based on React.js

###Features:
- products are displayed in a grid;
- products can be sorted by "size", "price" or "id". The products list is reloading when a new sorting option is chosen;
- each product has :
  - a "size" field, which is the font-size (in pixels). Products displayed in their correct size, to give customers a realistic impression of what they're buying.
  - a "price" field like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
- the product grid automatically loads more items as you scroll down;
- displaying an animated "loading..." message while the user waits for the data to load.
- pre-emptively fetching the next batch of results in advance, making use of idle-time.  But they still are not displayed until the user has scrolled to the bottom of the product grid.
- when the user reaches the end and there are no more products to display, showing the message "~ end of catalogue ~";
- after every 20 products inserting an advertisement;

###Instalation:
```
git clone https://github.com/GlobalSiteDev/EcommerceReactApp.git
cd EcommeerceReactApp
npm install
```
#####For production:
```
npm run build
npm start
```
#####To not rebuild each time in development:
```
npm start
```
in another command prompt/terminal
```
npm run client
```
open localhost:8080 in a browser
