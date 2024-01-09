# Colors App

- Run server side
- Then run client app

See README files in subfolders.

Client application - React/Redux with React-Spring for simple animation.

The backend is a REST API from .NET Core 7 + EF for Sqlite DB.


### Server:

Design and implement an API with two methods: `Add` and `Delete`:
- The `Add` method receives a string and stores it in the database.
- When you select `Delete`, the entry should be deleted.

The tech. stack is ASP.Net Core, EF and Sqlite DB.
    
### Client:

1. Make a page with 2 buttons: Add and Delete.
    There should be a list below the buttons.
    When you click the Add button, the square element should be added to the first position.
    The width of the square should be 20% of the screen width. The color should be random.
    There must be an AJAX call to the "Add" endpoint to save the new entry to the server.
    When you click the Delete button, the item on the right should be deleted and then deleted on the server side using the Delete route.
    The Redux Toolkit should be used.
    Visual animation effects should be implemented using Spring react on adding and deleting.

3. Animation
     When inserting a new square, all existing elements must be shifted to the right.
     When removed, the last element should move to the right. The remaining squares should remain in their places.
