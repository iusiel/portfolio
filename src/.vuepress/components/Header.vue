<script>
export default {
  name: "Header",

  props: ["activeLink"],
};
</script>

<template>
  <nav class="bg-yellow nav-main-menu">
    <div class="container">
      <div class="logo-container text-center">
        <a class="fs-large fw-black text-yellow2 logo" href="/">IUSIEL</a>
      </div>
      <p>
        I am a web developer that has over ten years of experience in the field.
        I am skilled in PHP, CSS and JS. I mainly use Laravel for my projects
        together with SASS as my CSS preprocessor and JavaScript modules via
        import/export and npm. I keep up with the latest trends by listening to
        podcasts and checking out roadmaps created by other developers in the
        field.
      </p>
      <ul class="main-menu">
        <li>
          <a
            :class="{ active: activeLink === 'home', 'main-menu__link': true }"
            href="/"
            >Home</a
          >
        </li>
        <li>
          <a
            :class="{ active: activeLink === 'about', 'main-menu__link': true }"
            href="/about-me"
            >About Me</a
          >
        </li>
        <li>
          <a
            :class="{
              active: activeLink === 'random',
              'main-menu__link': true,
            }"
            href="/random-things"
            >Random Things</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
