<template>
    <div>
        <header>
            <Navbar />
            <Hero />
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'MasterLayout',
    components: {
        Hero,
        Navbar,
        Footer
    },

    setup() {
        const updateActiveLink = () => {
            const navLinks = document.querySelectorAll('nav a');
            const sections = document.querySelectorAll('section');

            const currentScrollPos = window.scrollY;

            sections.forEach((section, index) => {
                const topOffset = section.offsetTop - 50;
                const nextSectionTopOffset = (index < sections.length - 1) ? sections[index + 1].offsetTop - 50 : Infinity;

                // Check if the current scroll position is within the bounds of the section
                if (currentScrollPos >= topOffset && currentScrollPos < nextSectionTopOffset) {
                    navLinks.forEach((link) => {
                        // Remove the "active" class from all navigation links
                        link.classList.remove("active");
                    });

                    // Add the "active" class to the corresponding navigation link
                    const correspondingNavLink = document.querySelector(`nav a[href="#${section.id}"]`);
                    if (correspondingNavLink) {
                        correspondingNavLink.classList.add("active");
                    }

                    //remove active class from all nav links if position backtop
                } else if (currentScrollPos < 100) {
                    navLinks.forEach((link) => {
                        // Remove the "active" class from all navigation links
                        link.classList.remove("active");
                    });
                }
            })
        }

        // create function if user reload page in the middle of the page make back to top

        window.addEventListener('scroll', updateActiveLink)

        return {
            updateActiveLink
        }
    }
}
</script>