//Setting a uniform menu across all html pages using docwrite and then calling the script in the html files//
document.write("<div id='menu'>")
document.write("<ul>");
document.write("<li id='products'><a href='products.html'>Products</a></li>");
document.write("<li id='contact'><a href='contact.html'>Contact</a></li>");
document.write("<li id='concept'><a href='concept.html'>Concept</a></li>");
document.write("<li id='cart'><a href='Shoppingcart.html'><img id='cartlogo' src='../Images/shoppingCart.png' width='32px' height='32px' + alt='Shoppingcart'></a>");
document.write("<li id='profile'><a href='profile.html'> <img id='profileLogo' src='../Images/Profile.png' width='32px' height='32px' alt='profile'></a></li>");
document.write("</ul>");
document.write("</div>");