<template>
    <div class="bg-gray-600">
    <div class="flex w-full h-screen justify-center items-center">
    <div class="w-full max-w-xl">
      <h1 class="font-bold text-5xl text-center text-white">
        Simple Quiz
      </h1> 
      <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8" >
        <div v-if="index < questions.length">
          <!-- title -->
        <loading :active="isLoading" 
        :can-cancel="true"></loading>

        <p class="text-2xl font-bold uppercase">
          {{questions[index]?.title}}
        </p>
        <!-- answer -->
        <label 
        class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" 
        v-for="(answer, key) in questions[index]?.answer" 
        :key="answer"
        :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''},
        {'bg-red-400': selectedAnswer == key},
        {'bg-green-400': key == questions[index].correctAnswer && selectedAnswer != ''}"
        >

          <input 
          type="radio" 
          :id="key" 
          class="hidden" 
          :value="key" 
          @click="answered($event)"
          :disabled="selectedAnswer != ''"
          />
          {{answer}} 
        </label>
        <!-- button -->
        <div class="mt-6 flow-root">
          <!-- Next Question -->
          <button 
          class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
          v-show="selectedAnswer != '' && index != questions.length-1"
          @click.prevent="nextQuestion"
          >
            Next &gt; 
          </button>
          <!-- Finish -->
          <button 
          class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
          v-show="selectedAnswer != '' && index == questions.length-1"
          @click.prevent="finishResult"
          >
            Finish &gt; 
          </button>
        </div>
        </div>
        <div v-else v-show="!isLoading">
          <h2 class="font-bold text-3xl">Result</h2>
          <div class="flex justify-start space-x-4 mt-6">
            <p>
              Correct Answer: 
              <span class="text-2xl text-green-700 font-bold">
                {{correct}}
              </span>
            </p>
            <p>
              Wrong Answer: 
              <span class="text-2xl text-red-700 font-bold">
                {{wrong}}
              </span>
            </p>
          </div>
            <div class="mt-6 flow-root">
              <!-- Next Question -->
              <button 
              class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              v-show="selectedAnswer != '' && index != questions.length-1"
              @click.prevent="resetAnswer"
              >
                Try Again? 
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import getData from '../composables/getData'
export default {
setup(){
    
    let index = ref(0);
    let selectedAnswer = ref('');
    let correct = ref(0);
    let wrong = ref(0);
    let {error, questions, fetchQuestions, isLoading, fullPage} = getData();
    fetchQuestions();

    let answered = (e) => {
      selectedAnswer.value = e.target.value
      if(selectedAnswer.value == questions.value[index.value]['correctAnswer']){
        correct.value ++;
      }else{
        wrong.value ++;
      }
      console.log(correct.value + ' ' + wrong.value)
    }

    let nextQuestion = () => {
      index.value ++;
      selectedAnswer.value = '';
    }

    let finishResult = () => {
      index.value ++;
    }

    let resetAnswer = () => {
      index.value = 0;
      correct.value = 0;
      wrong.value = 0
      selectedAnswer.value = ''
    }

    return {fetchQuestions, questions, error, answered, selectedAnswer, index, nextQuestion, finishResult, correct, wrong, resetAnswer, isLoading, fullPage}
  }
}
</script>

<style>

</style>