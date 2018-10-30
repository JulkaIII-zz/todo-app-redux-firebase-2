const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Julka!");
});

const createNotification = notification => {
  return admin.firestore.collection('notifications').add(notification).then(doc => console.log('notification added: ', doc));
}

exports.noteCreated = functions.firestore.document('notes/{noteId}').onCreate(doc => {
    const note = doc.data();
    const notification = {
      content: 'Added a new note',
      user: `${note.authorFirstName} ${note.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})
