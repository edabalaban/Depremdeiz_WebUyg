import app from "../firebase";
import firebase from "firebase";

var database = app.database();

// async function checkSignInUserIsDatabase() {

//     const query = database.ref('Profil');
//     const result = await query.once('value');
//     return result;
// }

async function checkSignInUserIsDatabase(email) {

    const query = database.ref('Profil');

    await query.once('value', async (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            if (childData.email == email) {
                console.log("it founded");
                return true;
            }
        });
    });
}

export { checkSignInUserIsDatabase }