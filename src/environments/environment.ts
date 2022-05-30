// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

// export const environment = {
//   production: false
// };

const firebaseConfig = {
  apiKey: "AIzaSyAv1QyxdjLREROFmP6JARVKP8I-7mO0vt0",
  authDomain: "proyecto-de-analisis-dce3e.firebaseapp.com",
  projectId: "proyecto-de-analisis-dce3e",
  storageBucket: "proyecto-de-analisis-dce3e.appspot.com",
  messagingSenderId: "331400356311",
  appId: "1:331400356311:web:76461ec6782299b7fe2b92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
