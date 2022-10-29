import { getFirestore, collection, doc, getDocs, getDoc, addDoc } from 'firebase/firestore';

export default class RestauranteLa44Services {
    querydb() {
        return getFirestore();
    }

    // collections
    queryCollection(querybd, tabla) {
        return collection(querybd, tabla)
    }

    getDocs(queryCollection): Promise<any> {
        return getDocs(queryCollection)
    }

    // Docs
    queryDoc(querybd, tabla, id) {
        return doc(querybd, tabla, id)
    }

    getDoc(queryDoc): Promise<any> {
        return getDoc(queryDoc)
    }

    postDoc(orderCollection, order) {
        return addDoc(orderCollection, order)
    }
}
