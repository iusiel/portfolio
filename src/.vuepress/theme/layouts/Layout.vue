<script>
import Header from './../../components/Header.vue';
import Footer from './../../components/Footer.vue';

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<template>
    <div>
        <Header :activeLink="$frontmatter.activeLink" />
        <div class="main__container">
            <main>
                <div class="container">
                    <Content />
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>
