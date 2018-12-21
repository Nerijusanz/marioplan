const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

//---------------db.settings---------------------
const settings = { timestampsInSnapshots: true};
db.settings(settings);
db.collection('any');
//---------------------------------------------


exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello Mario plan from Firebase!");
 });


const createNotification = (notification) => {

  return admin.firestore().collection('notifications')
          .add(notification)
          .then(doc => console.log('notification added',doc));  //log msg after notificatio added
}

 //on project created, make notification
 exports.projectCreated = 
      functions.firestore.document('projects/{project}') //collection trigger
        .onCreate(doc => {  //take created project document

            const project = doc.data(); //grab created project doc data

            const notification = {
              content: 'Created a new project',
              user: `${project.authorFirstName} ${project.authorLastName}`,
              time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification);  // project created notification

        });

  
exports.userCreated = 
        functions.auth.user().onCreate(user=>{
            //new user signUp in application
            return admin.firestore().collection('users')
              .doc(user.uid).get()
              .then(doc => {

                const newUser = doc.data();

                const notification = {
                  content: 'Created a new user',
                  user: `${newUser.firstname} ${newUser.lastname}`,
                  time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification);  // user created notification

              })
        });
