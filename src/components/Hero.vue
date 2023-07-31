<template>
    <div class="relative">
        <div class="absolute top-0 left-0 bg-slate-900 h-full w-full z-20 opacity-50"></div>
        <img :src="heroBackground" alt="todo-list-background" class="h-[40rem] w-full object-cover">
        <div class="absolute top-0 left-0 z-30 flex flex-col items-center justify-center  w-full h-full">
            <h1 class="text-white font-semibold text-2xl md:text-[4rem] w-full text-center mb-8">
                Organize your work and life, finally.
            </h1>
            <h4 class="text-slate-200 font-normal text-md md:text-2xl mb-10">
                Become focused, organized, and calm with Todo list.
            </h4>
            <button
                class="bg-red-600 p-4 text-white font-semibold rounded-md transition-all duration-75 ease-in hover:bg-red-700">
                Start for free
            </button>
        </div>
    </div>
</template>
<script>
import HeroBackground from "../assets/images/hero_background.jpg"
export default {
    name: 'Hero',
    data() {
        return {
            heroBackground: HeroBackground
        }
    }
}
</script>