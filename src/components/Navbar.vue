<template>
    <nav class="absolute w-full z-50 top-0 left-0">
        <div class="bg-slate-900 bg-opacity-0 transition-all ease-in duration-75" id="navbarBackground">
            <div class="container py-6 px-5 md:px-0 flex items-center justify-between">
                <div class="flex items-center gap-4 hover:cursor-pointer" :onclick="scrollToTop">
                    <img :src="todoListImage" alt="todo-list-brand" class="h-10 w-10">
                    <h1 class="text-white font-semibold text-xl">Todo List</h1>
                </div>
                <div>
                    <ul class="flex gap-6 items-center">
                        <li class="text-white font-semibold hover:text-slate-900 transition-all duration-100 ease-in hidden md:block"
                            id="navbar-item">
                            <a href="#about">About</a>
                        </li>
                        <li class="text-white font-semibold hover:text-slate-900 transition-all duration-100 ease-in hidden md:block"
                            id="navbar-item">
                            <a href="#features">Features</a>
                        </li>
                        <li class="border-l border-white h-8 hidden md:block"></li>
                        <li class="text-white font-semibold hover:text-slate-900 transition-all duration-100 ease-in"
                            id="navbar-item">
                            <a class="hover:cursor-pointer">Sign In</a>
                        </li>
                        <li>
                            <button
                                class="bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition-all duration-100 ease-in">Start
                                for free</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import todoListImage from "../assets/icons/todolist.png"
export default {
    name: 'Navbar',

    setup() {

        const handleStickyNavbar = () => {
            const navbar = document.querySelector('nav');
            const sticky = navbar.offsetTop;
            const navbarItem = document.querySelectorAll('#navbar-item');

            if (window.pageYOffset > sticky) {
                navbar.classList.remove('absolute')
                navbar.classList.add('fixed');
                if (navbarItem) {
                    navbarItem.forEach(item => {
                        item.classList.add('hover:text-red-500')
                        item.classList.remove('hover:text-slate-900')
                    })
                }
            } else {
                navbar.classList.remove('fixed');
                navbar.classList.add('absolute')
                if (navbarItem) {
                    navbarItem.forEach(item => {
                        item.classList.remove('hover:text-red-500')
                        item.classList.add('hover:text-slate-900')
                    })
                }
            }

            if (window.pageYOffset > 100) {
                document.querySelector('#navbarBackground').classList.remove('bg-opacity-0')
                document.querySelector('#navbarBackground').classList.add('bg-opacity-100')
            } else {
                document.querySelector('#navbarBackground').classList.remove('bg-opacity-100')
                document.querySelector('#navbarBackground').classList.add('bg-opacity-0')
            }
        }

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }


        window.onscroll = () => {
            handleStickyNavbar();
        }

        return {
            todoListImage,
            scrollToTop
        }
    }
}
</script>