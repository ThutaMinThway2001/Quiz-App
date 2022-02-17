import {ref} from 'vue';

let questions = ref({});
let error = ref(null);

let fetchQuestions = async() => {
    try{
        let response = await fetch('http://localhost:3000/questions');

        if(response === 404){
          throw new Error('Error!')
        }

        let data = await response.json();
        questions.value = data;

      }catch(err){
        error.value = err;
      }
}

let getData = () => {
    return {error, questions, fetchQuestions}
}

export default getData;