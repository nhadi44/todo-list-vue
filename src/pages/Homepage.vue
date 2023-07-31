<template>
    <section class="min-h-screen" id="about">
        <div class="container py-20 px-8 md:px-0 flex items-center justify-center">
            <div class="py-10">
                <h1 class="text-5xl font-semibold mb-8">About</h1>
                <p class="text-lg mt-4">
                    The Todo List Application is a digital platform designed to assist users in efficiently organizing their
                    daily tasks and activities. With a simple yet powerful concept, this application becomes a reliable
                    companion for individuals seeking to manage their time and productivity more effectively.
                </p>
            </div>
            <div class="hidden md:block">
                <img :src="aboutImage" alt="about-vector">
            </div>
        </div>
    </section>
    <section class="py-20" id="features">
        <div class="container py-10 px-8 md:px-0">
            <Features />
        </div>
    </section>
</template> 
<script>
import aboutImage from "../assets/images/about.jpg"
import Features from "../components/Features.vue";
export default {
    name: "homepage",
    setup() {
        return {
            aboutImage
        };
    },
    components: { Features }
}
</script>
