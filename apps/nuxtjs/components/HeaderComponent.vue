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

<style lang="scss" scoped>
@use '@fem-aec/tokens/dist/scss/mixins' as *;
@use '@fem-aec/tokens/dist/scss/tokens' as *;
@use '@/assets/styles/mixins' as *;

.header {
  $no-border: #{&}--no-border;

  display: grid;
  background-color: var(--fem-color-background-tertiary);

  & > * {
    grid-area: 1/-1;
  }

  &--no-overlap > * {
    grid-area: auto;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: start;
    padding: 3.2rem 2.4rem;
    z-index: 1;
    border-bottom: 1px solid var(--fem-color-border-primary);

    @media screen and (min-width: 768px) {
      gap: 42px;
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
      width: 89.71%;
    }

    @media screen and (min-width: 1440px) {
      padding-top: 3.2rem;
      padding-bottom: 3.6rem;
      width: 77.11%;
    }

    #{$no-border} & {
      border-bottom: none;
    }
  }

  &__logo {
    @media screen and (min-width: 768px) {
      margin-right: auto;
    }

    @media screen and (min-width: 1440px) {
      margin-right: 0;
    }
  }

  &__nav {
    order: -1;

    @media screen and (min-width: 1440px) {
      order: 0;
      margin: auto;
    }

    > .nav__list {
      display: none;

      @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
      }
    }
  }

  &__cart {
    cursor: pointer;
    font-size: 0;
    align-items: center;
    justify-items: center;
    padding: 0.4rem;
    width: 31px;
    height: 28px;

    @extend %icon-mask;
    @extend %color-animation;

    @media screen and (min-width: 1440px) {
      margin-left: auto;
    }

    &:is(:hover, :focus)::after {
      background-color: var(--fem-color-fill-icon-primary-active);
    }

    &:focus {
      box-shadow: inset 0 0 0 2px var(--fem-color-fill-icon-primary-focus);
    }

    &::after {
      width: 23px;
      height: 20px;
      background-color: var(--fem-color-fill-icon-primary-rest);
      mask-image: url('@/assets/icons/icon-cart.svg');

      @extend %color-animation;
    }
  }
}

.nav {
  &__toggle {
    cursor: pointer;
    font-size: 0;
    align-items: center;
    justify-items: center;
    padding: 0.4rem;
    width: 24px;
    height: 23px;

    @extend %icon-mask;
    @extend %color-animation;

    @media screen and (min-width: 1440px) {
      display: none;
    }

    &:is(:hover, :focus)::after {
      background-color: var(--fem-color-fill-icon-primary-active);
    }

    &:focus {
      box-shadow: inset 0 0 0 2px var(--fem-color-fill-icon-primary-focus);
    }

    &::after {
      width: 16px;
      height: 15px;
      background-color: var(--fem-color-fill-icon-primary-rest);
      mask-image: url('@/assets/icons/icon-hamburger.svg');

      @extend %color-animation;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
}

.hero {
  $no-image: #{&}--no-image;

  display: grid;

  > * {
    grid-area: 1/-1;
  }

  &__image {
    @extend %image-cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 2.4rem;

    @media screen and (min-width: 768px) {
      padding: 0;
      margin: auto;
      max-width: 49.34%;
    }

    @media screen and (min-width: 1440px) {
      margin-left: 11.46%;
      text-align: start;
      width: 26.32%;
    }

    #{$no-image} & {
      @media screen and (min-width: 1440px) {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        width: auto;
      }
    }
  }

  &__title {
    font-size: $fem-text-heading-sans-500-size;
    line-height: $fem-text-heading-sans-400-height;
    letter-spacing: $fem-text-heading-sans-100-space;
    text-transform: uppercase;
    margin: 8rem 0 2.4rem;
    color: var(--fem-color-text-secondary-inverse);

    @extend %fem-text-heading-sans-600;

    @media screen and (min-width: 768px) {
      margin-top: 2rem;
      font-size: $fem-text-heading-sans-600-size;
      line-height: $fem-text-heading-sans-600-height;
      letter-spacing: $fem-text-heading-sans-600-space;
    }

    #{$no-image} & {
      font-size: $fem-text-heading-sans-300-size;
      line-height: $fem-text-heading-sans-300-height;
      letter-spacing: $fem-text-heading-sans-300-space;
      margin-bottom: 32px;
      margin-top: 32px;

      @extend %fem-text-heading-sans-500;

      @media screen and (min-width: 768px) {
        font-size: $fem-text-heading-sans-500-size;
        line-height: $fem-text-heading-sans-500-height;
        letter-spacing: $fem-text-heading-sans-500-space;
        margin-bottom: 97px;
        margin-top: 105px;
      }

      @media screen and (min-width: 1440px) {
        margin-top: 98px;
      }
    }
  }

  &__eyebrow {
    display: block;
    margin-bottom: 1.6rem;
    color: var(--fem-color-text-primary-inverse);

    @extend %fem-text-eyebrow-200;
  }

  &__body {
    margin-bottom: 2.8rem;
    color: var(--fem-color-text-primary-inverse);

    @media screen and (min-width: 768px) {
      margin: 0 auto 4rem;
      max-width: 92.08%;
    }

    @media screen and (min-width: 1440px) {
      margin: 0 0 4rem;
    }
  }

  &__button {
    display: inline-flex;
    align-self: center;

    @media screen and (min-width: 1440px) {
      align-self: flex-start;
    }
  }
}
</style>
