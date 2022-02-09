// const functions = require ('firebase-functions');

// const algoliasearch = require ('algoliasearch');
// // const APP_ID = functions.config ().algolia.app;
// // const ADMIN_KEY = functions.config ().algolia.key;
// const client = algoliasearch ('VCI44UTWIB', '4d146093873a4a21b6e1880afa38e2c9');
// const index = client.initIndex ('focus');

// exports.addIndex = functions.firestore
//   .document ('lessons/{documentId}')
//   .onCreate (snapshot => {
//     const data = snapshot.data ();
//     const objectId = snapshot.id;

//     return index.addObject ({...data, objectId});
//   });

// exports.deleteFromIndex = functions.firestore
//   .document ('lessons/{documentId}')
//   .onDelete (snapshot => index.deleteObject (snapshot.id));

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
