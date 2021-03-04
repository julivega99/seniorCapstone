import firebase from './firebase'
const database = firebase.firestore()
const startUps = database.collection("startUps")
/**
 * Call upon profile creation, populates usersNotSeen for all users involved
 * @param {obj} companyData - shape specified in design doc
 */
export const createBackDb = async (companyData) => {
    console.log("in create companyData ", companyData)
    await startUps.add(companyData)
  }
  