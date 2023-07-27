<template>
    <div>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'MasterLayout',
    components: {
        Navbar
    }
}
</script>