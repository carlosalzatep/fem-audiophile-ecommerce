<template>
  <header class="header" :class="!props.isHeroImage && 'header--no-overlap'">
    <section class="header__top">
      <NuxtLink to="/">
        <img
          class="header__logo"
          src="~/assets/icons/logo.svg"
          alt="Audiophile logo"
        />
      </NuxtLink>

      <nav class="header__nav nav" aria-label="Main page navigation">
        <button class="nav__toggle">Toggle main navigation</button>
        <ul class="nav__list">
          <li class="nav__list-item">
            <NuxtLink to="/" class="nav__link link__primary">Home</NuxtLink>
          </li>
          <li class="nav__list-item">
            <NuxtLink to="/category/headphones" class="nav__link link__primary">
              Headphones
            </NuxtLink>
          </li>
          <li class="nav__list-item">
            <NuxtLink to="/category/speakers" class="nav__link link__primary">
              Speakers
            </NuxtLink>
          </li>
          <li class="nav__list-item">
            <NuxtLink to="/category/earphones" class="nav__link link__primary">
              Earphones
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <button class="header__cart">Add to cart</button>
    </section>

    <!-- HERO SECTION -->
    <section v-if="props.isHeroImage" class="hero">
      <div class="hero__top">
        <picture class="hero__picture">
          <source
            srcset="~/assets/images/desktop/image-hero.jpg"
            media="(min-width: 1440px)"
          />
          <source
            srcset="~/assets/images/tablet/image-hero.jpg"
            media="(min-width: 768px)"
          />
          <img
            class="hero__image"
            src="~/assets/images/mobile/image-hero.jpg"
            alt="XX99 Mark 2 Headphones Image"
          />
        </picture>
      </div>
      <div class="hero__content">
        <h1 class="hero__title">
          <span class="hero__eyebrow">New product</span>
          XX99 Mark II Headphones
        </h1>
        <p class="hero__body">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <NuxtLink
          to="./product/xx99-mark-one-headphones"
          class="hero__button button__primary"
          >See product</NuxtLink
        >
      </div>
    </section>

    <section v-else-if="heroTitle" class="hero hero--no-image">
      <div class="hero__content">
        <h1 class="hero__title">
          {{ heroTitle }}
        </h1>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
interface Props {
  isHeroImage?: boolean
  heroTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  isHeroImage: false,
  heroTitle: '',
})
</script>
