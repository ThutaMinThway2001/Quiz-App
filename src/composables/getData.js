import {ref} from 'vue';
import {db} from '../firebase/config'

let questions = ref({});
let error = ref(null);
let isLoading = ref(false);
let fullPage = ref(true);

let fetchQuestions = async() => {
    try{
        isLoading.value = true;

        let response = await db.collection('questions').get();
        setTimeout(()=>{
          questions.value = response.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
          })
          isLoading.value = false;
        }, 3000)

      }catch(err){
        error.value = err;
      }
}

let getData = () => {
    return {error, questions, fetchQuestions, isLoading, fullPage}
}

export default getData;