<template>
  <section class="categories">
    <ul class="categories__list">
      <li class="category">
        <img
          class="category__image"
          src="~/assets/images/mobile/image-xx99-mark-one-headphones.png"
          alt="XX99 Mark 1 headphones category image"
        />
        <p class="category__title">Headphones</p>
        <NuxtLink
          to="/category/headphones"
          class="category__link button__tertiary"
          >Shop</NuxtLink
        >
      </li>
      <li class="category">
        <img
          class="category__image"
          src="~/assets/images/mobile/image-zx9-speaker.png"
          alt="ZX9 speaker category image"
        />
        <p class="category__title">Speakers</p>
        <NuxtLink
          to="/category/speakers"
          class="category__link button__tertiary"
          >Shop</NuxtLink
        >
      </li>
      <li class="category">
        <img
          class="category__image"
          src="~/assets/images/mobile/image-yx1-earphones.png"
          alt="YX1 earphones category image"
        />
        <p class="category__title">Earphones</p>
        <NuxtLink
          to="/category/earphones"
          class="category__link button__tertiary"
          >Shop</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use '@fem-aec/tokens/dist/scss/mixins' as *;
@use '@fem-aec/tokens/dist/scss/tokens' as *;
@use '@/assets/styles/mixins' as *;

.categories {
  &__list {
    display: grid;
    gap: 16px 10px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1440px) {
      column-gap: 30px;
    }
  }
}

.category {
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 8px;
  margin-top: 60px;
  padding: 0 30px 30px;
  background-color: var(--fem-color-background-secondary);

  &__image {
    margin-top: -60px;
    max-width: 163px;

    @extend %image-cover;
  }

  &__title {
    text-transform: uppercase;
    color: var(--fem-color-text-secondary);

    @extend %fem-text-heading-sans-100;
  }

  &__link {
    display: grid;
    gap: 13px;
    margin-top: 15px;
    padding: 5px;
    text-transform: uppercase;

    &:is(:hover, :focus)::after {
      background-color: var(--fem-color-text-button-tertiary-active);
    }

    &::before {
      position: absolute;
      display: block;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    &::after {
      grid-area: 1 / 2;
      place-self: center end;
      height: 1rem;
      width: 0.5rem;
      mask-image: url('@/assets/icons/icon-arrow-right.svg');
      background-color: var(--fem-color-text-button-tertiary-rest);

      @extend %icon-mask;
    }
  }
}
</style>
