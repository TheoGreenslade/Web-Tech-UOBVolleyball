# Web-Tech-UOBVolleyball

<ul>
<li>A for HTML</li>
We used the Bootstrap framework to create multiple pages with a large amount of html content. On each page we combined a huge number of Bootstrap components as well as creating our own componets out of the basic html elements. The Bootstrap components at the used include cards, models, navbars, scrollspys and many others. We chose to use XHTML to ensure our pages are correct.



<li>A for CSS</li>
We applied lots of CSS code to all of our html elements in order to create the perfect style of our website. This included combining the classes from the Bootstrap stylesheet with lots of our own custom CSS code. We made sure that all our styling was done using CSS and there are no style tags in our html code.



<li>X for JS</li>
In the database, the price is saved as an INT, when loading the shop page, a simple script multiplies the value by 0.01 to put it in the right format for £.
This ensures no rounding errors happen due to floating point algebra.
Further, if there is a discount on the item, the discount is automatically calculated and the correct price is shown.
Another script in the shop page allows the user to hide or show products based on the category. This all happens on the client side with no requests sent to the server.
While loading a page with every item can be slow, we know our Club will never have more than 20 or 30 items on sale at once therefore scalability is not an issue. And this design allows for a very fast and smooth transition when hiding and showing categories.



<li>A for PNG</li>
We editied PNG images for the title page of our website and the thumbnail for a video on our website. They were both editted in similar ways. We airbrushed the images by altering the colour levels of the image and added a layer to lightly darken the corners of the image in order to make the colour on the subject stand out and be more dramatic. Then text was positioned in the centre of the image. For one of the images we made it wider by duplicating part of the image then airbrushing it to merge it into the original image again using a content aware fill tool.
Additionally, we created a title image for one of our pages by creating a collage of multiple images then applying a desaturation filter based on luminace and adding text over the top.
The final image was an image of a volleyball player on a background saying 'UoB Volleyball'. This was done but cutting out the background of the player so that it was transparent and then placing this layer over the top for the background. The colour levels of the image were again altered as well.



<li>A for SVG</li>
We created a correctly proportioned SVG volleyball by creating curved paths and then using grouping and rotational transformations to repeat the curves around the ret of the ball. A version of this ball is used in the background of our home page. This image had a colour gradient from two differnt shades of red as its background. 
We also generated a repeating SVG pattern for the background of a page by creating the one individual image to be duplicated. Finally, we made SVG artwork by recreating images of people playing volleyball in SVG form.



<li>A for Server</li>
Our express server is able to detect invalid URLs -such as URLs with spaces in them- or unknown URLs and show an error page. Further, users are able to login and the user session persists using cookies through the node.js module "Passport" with the Local Strategy. Based on whether a user is logged in or not, and whether the account is an admin account, different privileges are granted to the session.
If a user tries to access a page that exists but they have no clearance to view, they are redirected to another page (either the homepage or the login page if they need to login to view that resource).
Finally, this server is able to run using Secure HTTP (go to https://localhost:8081) using the key and certificate we produced, which are stored in the /security folder.	


<li>A for Database</li>
The Database for this Website:

**ADD IMAGE IN PDF**

We took great care to keep our Database normalized to BCNF. 
All our database calls made from our routing modules make proper use of callbacks, even nested callbacks when we use multiple queries for one route, such as our get('/shop', ...) route in shop.js 
However, our routing functions always access the database using functions written in separate database modules -admin_db.js, login_db.js and shop_db.js-, this keeps our code tidy and sets a clear line between the tasks of data retrieval and routing.
We access our Database multiple times with INSERT, SELECT and UPDATE queries, JOINing tables as necessary.
Every Table can be modified from the website, if the user has the right privilege:
A guest can create an account, stored in the User table, or login by accessing the User table with matching credentials.
A user can access the Shop and Categories table, and insert values into the Purchase table by buying a product.
An Admin can visualize the User (https://localhost:8081/users) table  and the Order table (https://localhost:8081/orders), they are able to access the Shop and Categories table like a normal User but they are also able to Insert new categories and products in the respective tables (https://localhost:8081/admin).

Our database is SQLInjection-proof thanks to prepared statements with ?, only one query uses string building (i.e. "..." + variable + "...;"), this is due to a bug with SQLite3 which causes queries to fail if prepared statement are used for ORDER BY parameters. However this is not a security risk because the variable used in the query is sent in through a multi-option tab rather than a text box.



<li>X for Dynamic pages</li>

NavBar and Footers + user logic in navbar puts us at a B I think.
To get to A we probably need to add a bunch of partials, I don't know what kind though.




<li>X for Depth (out of 20)</li>
To run:
npm start from main folder
go to https://localhost:8081
Admin login details:
email: davide@gmail.com
password: davide
Signup/Login system uses a SQLite3 database to store and look-up user data, flash messages are used to notify
a user of whether they have registered, have logged in, have logged out or some mistake occured during the process
such as a password mismatch or the email not being in our database. Password is securely hashed using bcrypt.
</ul>
