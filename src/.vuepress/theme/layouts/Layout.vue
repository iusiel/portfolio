<script>
import Header from './../../components/Header.vue';
export default {
    components: {
        Header,
    },
};
</script>

<template>
    <div>
        <Header :activeLink="$frontmatter.activeLink" />
        <main>
            <div class="container">
                <Content />
            </div>
        </main>
    </div>
</template>
