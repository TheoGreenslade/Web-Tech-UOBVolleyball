# Web-Tech-UOBVolleyball

<ul>
<li>X for HTML</li>
<li>X for CSS</li>
<li>X for JS</li>
<li>X for PNG</li>
<li>X for SVG</li>
<li>X for Server</li>
Currently between C and B:
port numbers: No Idea
url validation: Almost sure express automatically handles most of the url validation, 
the rest is handled by the server stuff he had in his sample server, however just in case I added
a bit where it checks if a url contains a space.
content negotiation: No idea
redirection: We use redirects for login system a few times - probably not what he wants.
utf-8: No Idea
The site is HTTPS certified and can run with https -although the certificate is not by a verified authority-.
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