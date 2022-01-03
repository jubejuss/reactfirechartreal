Collected links

- Some form validation: https://unclebigbay.com/react-form-validation-without-state-and-third-party-packages
- Some data pushing to firestore: https://stackoverflow.com/questions/58452809/how-to-push-firestore-data-to-chartjs

## Set up connection with firebase

This makes only one input:  
https://www.geeksforgeeks.org/how-to-push-data-into-firebase-realtime-database-using-reactjs/

Make some tweaks, instead of  
`database.ref('YOUR-FAVOURITE-NAME').set`  
add  
`database.ref('YOUR-FAVOURITE-NAME').push`
Add all needable fields
