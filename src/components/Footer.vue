<template>
    <section id="footer" class="bg-slate-900">
        <div class="container py-10">
            <div class="grid grid-cols-2 mb-10 border-b-[1px] pb-8">
                <div class="col-span-1">
                    <div class="flex items-center gap-4 mb-5">
                        <img :src="todoImage" alt="todo-icon" class="h-10 w-10">
                        <span class="text-white text-xl font-bold">Todo List</span>
                    </div>
                    <p class="text-white text-lg">Join Millions of people who organize work and life with Todo List.</p>
                </div>
                <div class="col-span-1">
                    <div class="grid grid-cols-3">
                        <div class="text-white col-span-1">
                            <h5 class="mb-8">Features</h5>
                            <ul>
                                <li>
                                    <a href="#features">How It Works</a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-white col-span-1">
                            <h5 class="mb-8">Resources</h5>
                            <ul>
                                <li>
                                    <a href="#">Developer API </a>
                                    <a href="#">Help Center </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-white col-span-1">
                            <h5 class="mb-8">Company</h5>
                            <ul>
                                <li class="mb-4">
                                    <a href="#about">About Us</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#features">Features</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#contacts">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <small class="text-white flex justify-center font-semibold">
                <span>&copy; {{ year }} Todo List. Created By <a href="https://github.com/nhadi44?tab=repositories"
                        class="underline" target="_blank">Hadi
                        Nurhidayat</a>. All rights reserved
                </span>
            </small>
        </div>
    </section>
</template>
<script>
import todoImage from "../assets/icons/todolist.png"
export default {
    name: "Footer",
    setup() {

        const getYear = () => {
            const date = new Date();
            return date.getFullYear();
        }

        let year = getYear();

        return {
            todoImage,
            year
        }
    }
}
</script>