import {ref} from 'vue';
import {db} from '../firebase/config'

let questions = ref({});
let error = ref(null);

let fetchQuestions = async() => {
    try{
        let response = await db.collection('questions').get();
        questions.value = response.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        })

      }catch(err){
        error.value = err;
      }
}

let getData = () => {
    return {error, questions, fetchQuestions}
}

export default getData;