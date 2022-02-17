<template>
  <div class="bg-gray-600">
    <div class="flex w-full h-screen justify-center items-center">
    <div class="w-full max-w-xl">
      <h1 class="font-bold text-5xl text-center text-white">
        Simple Quiz
      </h1> 
      <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8" v-if="questions">
        <p class="text-2xl font-bold uppercase">{{questions[2].title}}</p>
        <label for="" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" v-for="(answer, index) in questions[2].answer" :key="index">
          <input type="radio" :id="index" class="hidden" :value="index" @change="answered($event)">
          {{answer}} 
        </label>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';


export default {
  name: 'Home',
  components: {
  },
  setup(){
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

    fetchQuestions();

    let answered = (e) => {
      console.log(e);
    }

    return {fetchQuestions, questions, error, answered}
  }
}
</script>
