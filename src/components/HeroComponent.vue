<template>
    <div class="relative">
        <img :src="HeroImage" alt="hero-image" class="h-[50rem] w-full object-cover ">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
</template>

<script>
export default {
    props: ['HeroImage']
}
</script>