import * as Firebase from 'firebase';

import firebaseConfig from './config';

Firebase.initializeApp(firebaseConfig);

export default Firebase;
