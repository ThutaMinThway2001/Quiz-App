<template>
<div class="bg-gray-800">
  <div class="flex w-full h-screen justify-center items-center">
    <h1 class="text-white uppercase text-4xl">are you ready?</h1>
    <router-link :to="{name: 'Questions'}">
      <button class="bg-white font-bold uppercase rounded-lg p-4 ml-4 text-2xl hover:bg-gray-300 ">Start</button>
    </router-link>
  </div>
</div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },
  
}
</script>
