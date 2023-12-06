# CPSC481-T05-4-F23

Group Members: <br>
Chowdhury, Fatema <br>
Greene, Brandon<br>
Lattimer, Andrew<br>
Vu, Nam Nguyen<br>
Waterstreet, Jaxson<br>

<strong>Functions Implemented</strong><br>
Below is a summary of the main functions of our system. The walkthrough will explore their use in further detail. 
- House Listings Page
  - Filter implemented. This is a feature that allows a user to search for their ideal house by filtering by house type, number of bathrooms and bedrooms, number of garages, price, house size, and additional house options such as a fireplace. 
  - Search by Address. This allows a user to search for houses in a specific area of Calgary.
  - View favorited listings. A user can select this button to view all listings they have favorited and would like to look at and compare.
  - How to List. This is a feature that will ideally be rolled out in future iterations of this project that allows a user to list a house for sale.
  - Current Realtors Button. This button allows a user to view all realtors associated with RealtYYC and learn about them as well as their contact information.
  - "View Listing" allows a user to select a house listing to view further details. 
- Current Realtors Page
    - Buttons corresponding to letters of the alphabet allow a user to scroll to a specific section of the page to select a realtor with a specific first name if there is a realtor associated with that name. For example, the letter "H" will scroll to Harry.
    - Realtor profiles are linked to their LinkedIn and selecting "LinkedIn" will redirect a user to their page.
    - "Sort Realtors" is a feature that will be rolled out in future iterations that allows a user to sort a realtor by ratings, house transactions, etc. 
- House Details Page
    - This page allows a user to favorite or unfavorite a house if they like it by selecting "favorite" or "unfavorite."
    - A user can view the main photo of the house as well as multiple others by clicking a button that rotates between all photos. 

<strong>Walkthrough</strong>
- Once loading the main page of the website, scroll through the house listings available. A green button at the bottom of the page labeled "Load more Listings" will allow one to view more listings.
- If there is a specific location one would like to search by, for example, "Oak Ridge", it can be typed in the "Search by Address" bar at the top of the main page. This search feature is case-sensitive. Once typing "Oak Ridge", hitting "Search" will show all houses in this location.
- To go back to all house listings (main page), the "Back to Listings" button can be clicked.
- On the main page, one can filter by house criteria by selecting "Filter Search for a Home" and inputting their desired requirements by selecting an option, sliding a slider, or clicking a check box. <br> An example of house criteria could be <br> Minimum Price: 150,000, Maximum Price: 999,999 with "Finished Basement" selected.
- After looking at filtered results, one can view more information about a house by selecting the "View Listing" button.
- This will reveal all house details. The bottom right has a carousal of photos that can be clicked through by selecting the left or right ends of the photo.
- A house can be favorited by selecting the "Favorite Listing" button underneath the information about an associated realtor. One can also unfavorite by selecting the "Unfavorite Listing" button in red.
- All favorited listings can be viewed by selecting the "View Favorited Listings" button at the top of the screen.
- If a user would like to view all realtors associated with RealtYYC, the "Current Realtors" button at the top of the page will load a page with all realtor information.
- The "Select Realtor By First Name" section contains letters that when clicked, will scroll to the first realtor whose name starts with the clicked letter. Realtors are sorted alphabetically. Any letter not corresponding to a realtor will not scroll to avoid confusion.
- Realtor profiles are also linked to their LinkedIn which can be viewed by selecting "LinkedIn" inside their profile, above their contact information. 
- A "Sort Realtors" button allows one to sort realtors by rating, number of transactions, etc. This is under development currently. 
