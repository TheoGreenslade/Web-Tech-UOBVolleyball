# Web-Tech-UOBVolleyball

<ul>
<li>A for HTML</li>
We used the Bootstrap framework to create multiple pages with a large amount of html content. On each page we combined a huge number of Bootstrap components as well as creating our own componets out of the basic html elements.
<li>A for CSS</li>
We applied lots of css code to all of our html elements in order to create the perfect style of our website. This included combining the classes from the Bootstrap stylesheet with lots of our own custom css code.
<li>X for JS</li>
In the database, the price is saved as an INT, when loading the pages, a simple script multiplies the 
int by 0.01 and prints it to show the correct price.
This ensures no rounding errors happen due to floating point algebra.
<li>A for PNG</li>
We editied PNG images for the title page of our website and the thumbnail for a video on our website. They were both editted in similar ways. For one of the images we made it wider by duplicating part of the image airbrushing it to merge it into the original image again. Then we altered the colour levels of the image and added a layer to lightly darken the corners of the image in order to make the colour on the subject stand out and be more dramatic. Finally Text was positioned in the centre of the image.
Additionally, we created a title image for one of our pages but creating a collage of multiple images then applying a desaturation filter and adding text over the top.
<li>A for SVG</li>
We created a correctly proportioned SVG volleyball by creating curved paths and then using grouping and rotational transformations to repeat the curves around the ret of the ball. We also generated a repeating SVG pattern for the background of a page by creating the one individual image to be duplicated. Finally, we made SVG artwork by recreating images of people playing volleyball in SVG form.
<li>X for Server</li>
The server section is a load of checkboxes:
port numbers: No Idea
url validation: Almost sure express automatically handles most of the url validation, 
the rest is handled by the server stuff he had in his sample server, however just in case I added
a bit where it checks if a url contains a space.
content negotiation: No idea
redirection: We use redirects for login system a few times - probably not what he wants.
utf-8: No Idea
The site is HTTPS certified and can run with https -although the certificate is not by a verified authority-.
We should be at least on a B here since https is an A-category task.
We also use cookies for the session handler as part of the login system.
Security issues: 
	"app.use(helmet)" + npm install helmet prevents - protects against attacks on express
	SQLInjection-proof thanks to prepared statements with ?
	Prevent cross-site scripting using templating engine "handlebars"
<li>X for Database</li>
We have a insert and a select Query, we use callbacks, so we are at a B.
To get to A we probably need to add a Shop
<li>X for Dynamic pages</li>
NavBar and Footers + user logic in navbar puts us at a B I think.
To get to A we probably need to add a bunch of partials, I don't know what kind though.
<li>X for Depth (out of 20)</li>
Signup/Login system uses a SQLite3 database to store and look-up user data, flash messages are used to notify
a user of whether they have registered, have logged in, have logged out or some mistake occured during the process
such as a password mismatch or the email not being in our database. Password is securely hashed using bcrypt.
</ul>
