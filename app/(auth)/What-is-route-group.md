What is Route group?
yong route groups are folder convention that let you organize routes by category or team
so basically

a route group can be created by using wrapping -> () a folder's name in parenthesis
example this is example route group-> (foldername)

This convention indicates the folder is the for organization purpose and should not be include in the route's URL path
Example scenario since si next js folder base sa routes natin pag sinubukan natin i search yong mismong auth
sa mismong routes natin hindi sya gagana so for example is para mkaapsok ka sa isang page need mo muna mag login
at i chcheck nagn auth na yon kung yong user ba is naka register or hindi so in that way makakagawa tayo nang

this is just simple scenario we can still search for more logical understanding
Think of it like a locked door 🔒:
Route group = where the door is located (organizing your house).
Auth check = the actual lock that only the owner’s key opens.
So the URL is the same for everyone, but only those with permission (the owner/admin) can actually open it.

Example
for example nag search tayo sa mismong URL natin this will not show directly don sa mismong routes natin
we need to type the specific routes to be able to move there or samdaling salita need natin i manual types
yong mismong routes na yon para maka navigate tayo sa mismong login pages natin.

✅ Example flow:
Owner visits /dashboard.
Server checks → “Is this user an admin?”
Yes → show dashboard.
No → redirect to /login or /unauthorized.

Creating a layout
