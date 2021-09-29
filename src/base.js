import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: 'AIzaSyCGU0Wk8o7RiQGWz7-qLnpo0eTfrHxB2hU',
  authDomain: 'discovery-barn-storage.firebaseapp.com',
  databaseURL:
    'https://discovery-barn-storage-default-rtdb.asia-southeast1.firebasedatabase.app/',
  storageBucket: 'discovery-barn-storage.appspot.com',
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
