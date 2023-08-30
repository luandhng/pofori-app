import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2iUklLZG1ptfaKLopECbAn8jzys1z4R4",
  authDomain: "dsg-payroll.firebaseapp.com",
  projectId: "dsg-payroll",
  storageBucket: "dsg-payroll.appspot.com",
  messagingSenderId: "334006157505",
  appId: "1:334006157505:web:c950c296b334a06a95d440",
  measurementId: "G-KYJE3XW53N",
};

export const firebase = initializeApp(firebaseConfig);
export const authService = getAuth();
