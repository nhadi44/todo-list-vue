<template>
    <h1 class="text-5xl mb-6 md:mb-10 font-bold">Features</h1>
    <div class="grid md:grid-cols-3 items-center mb-20">
        <div class="col-span-2 order-2 md:order-1 mr-20">
            <h1 class="text-slate-900 text-xl md:text-4xl mb-3 md:mb-5 font-semibold">Taks Scheduling</h1>
            <p class="text-slate-900 text-md md:text-xl">
                The Todo List Application allows users to easily add, edit, and delete their tasks. Users can provide
                titles,
                descriptions, and due dates for each task, ensuring they stay on top of their targets.
            </p>
        </div>
        <div class="col-span-1 order-1 mb-10 md:order-1 md:mb-0">
            <img :src="taksScheduleImage" alt="taks-scheduling" class="max-w-full h-full">
        </div>
    </div>

    <div class="grid md:grid-cols-3 items-center mb-20">
        <div class="col-span-2 order-2 md:order-2 ml-20">
            <h1 class="text-slate-900 text-xl md:text-4xl mb-3 md:mb-5 font-semibold">Taks Grouping</h1>
            <p class="text-slate-900 text-md md:text-xl">
                To provide a more organized view, the application allows users to group tasks based on specific categories
                or projects. This enables easy navigation and focus on relevant tasks.
            </p>
        </div>
        <div class="col-span-1 order-1 mb-10  md:order-1 md:mb-0">
            <img :src="taksGroupingImage" alt="taks-scheduling" class="max-w-full h-full">
        </div>
    </div>

    <div class="grid md:grid-cols-3 items-center">
        <div class="col-span-2 order-2 md:order-1 mr-20">
            <h1 class="text-slate-900 text-xl md:text-4xl mb-3 md:mb-5 font-semibold">Prioritize Tasks</h1>
            <p class="text-slate-900 text-md md:text-xl">
                Users can prioritize their tasks by labeling or setting their importance levels. This helps them tackle the
                most urgent or significant tasks first.
            </p>
        </div>
        <div class="col-span-1 order-1 mb-10 md:order-1 md:mb-0">
            <img :src="taksPrioritizeImage" alt="taks-scheduling" class="max-w-full h-full">
        </div>
    </div>
</template>
<script>
import taksScheduleImage from "../assets/images/task_scheduling.jpg"
import taksGroupingImage from "../assets/images/task_grouping.jpg"
import taksPrioritizeImage from "../assets/images/task_prioritize.jpg"
export default {
    name: "Features",
    setup() {
        return {
            taksScheduleImage,
            taksGroupingImage,
            taksPrioritizeImage
        }
    }
}
</script>