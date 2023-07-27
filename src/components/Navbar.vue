<template>
    <div class="relative">
        <div class="absolute min-w-full py-7 px-20 z-50">
            <div class="flex justify-between">

                <router-link to="/" class="flex gap-4 items-center">
                    <img :src="TodoImage" alt="todo-image" class="w-10">
                    <h1 class="font-semibold text-2xl text-white">Todo List</h1>
                </router-link>

                <div class="flex items-center gap-7">

                    <router-link to="/" class="text-md hover:font-semibold transition-all duration-200 ease-in text-white"
                        :class="$route.path === '/' ? 'font-semibold' : ''">
                        Home
                    </router-link>

                    <router-link to="/about"
                        class="text-md hover:font-semibold transition-all duration-200 ease-in text-white"
                        :class="$route.path === '/about' ? 'font-semibold' : ''">
                        About
                    </router-link>

                </div>
            </div>
        </div>

        <div>
            <HeroComponent :HeroImage="HeroImage" />
        </div>
    </div>
</template>

<script>
import TodoImage from "../assets/icons/todolist.png"
import HeroImage from "../assets/images/hero_background.jpg"
import HeroComponent from "./HeroComponent.vue";

export default {
    name: 'Navbar',
    setup() {
        return {
            TodoImage,
            HeroImage
        };
    },
    components: { HeroComponent }
}
</script>