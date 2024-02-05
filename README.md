# #Vanlife with ASP.NET Core backend
This is my personal Vanlife implementation from Scrimba's "React Router" course with an ASP.NET Core backend and with an SQLite database in the plans.
The frontend was fully coded by me, except for the test data.
## Current state of this project
### Frontend
- A client can display all available vans and filter them by their type, open a deatails page of a van and can go back to the van list without loosing the filter.
- The host part of the app is currently visible for everyone without needing to log in (the feature isn't implemented yet)
- The all of the dashboard tabs of the host are working, but the only tab that has content is the van tab, where the host can see all their vans that clients can rent and see their details -> the host ID here is currently hardcoded.
### Backend
- The test data is simply stored in an array for the time being
- The only part of the backend currently implemented is a very basic controller to fetch vans by requirement (all vans, all vans by their host ID or just a van by its ID)
## Running the app
For Visual Studio just simply run the app, but with Visual Studio Code the frontend and backend has to be run separately with `Vanlife Client` and `Vanlife Server` (a new launch.json is included for that)
