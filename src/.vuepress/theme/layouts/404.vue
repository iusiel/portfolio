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
            <main class="main__404">
                <h1 class="header__404">404 :(</h1>
                <p class="text__404">
                    The page you are trying to access does not exist. Make sure
                    that you have typed the URL properly.
                </p>
                <a class="button__404" href="/">Go back to home page</a>
            </main>
            <Footer />
        </div>
    </div>
</template>
