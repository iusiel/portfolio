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
        <div class="container">
            <Content />
        </div>
    </div>
</template>
