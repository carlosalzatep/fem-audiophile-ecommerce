<template>
  <section class="overview">
    <picture class="overview__picture">
      <source
        srcset="~/assets/images/desktop/image-best-gear.jpg"
        media="(min-width: 1440px)"
      />
      <source
        srcset="~/assets/images/tablet/image-best-gear.jpg"
        media="(min-width: 768px)"
      />
      <img
        class="overview__image"
        src="~/assets/images/mobile/image-best-gear.jpg"
        alt="Young adult listening to music with XX99 Mark II headphones"
      />
    </picture>
    <h2 class="overview__title">
      Bringing you the
      <span class="overview__title--emphasis">best</span> audio gear
    </h2>
    <p class="overview__body">
      Located at the heart of New York City, Audiophile is the premier store for
      high end headphones, earphones, speakers, and audio accessories. We have a
      large showroom and luxury demonstration rooms available for you to browse
      and experience a wide range of our products. Stop by our store to meet
      some of the fantastic people who make Audiophile the best place to buy
      your portable audio equipment.
    </p>
  </section>
</template>

<style lang="scss" scoped>
@use '@fem-aec/tokens/dist/scss/mixins' as *;
@use '@fem-aec/tokens/dist/scss/tokens' as *;
@use '@/assets/styles/mixins' as *;

.overview {
  display: grid;
  gap: 32px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    grid-template-columns: auto 540px;
    column-gap: 125px;
    text-align: start;
  }

  &__picture {
    @media screen and (min-width: 1440px) {
      grid-column-start: 2;
      grid-row: 1 / span 2;
    }
  }

  &__image {
    border-radius: 8px;

    @extend %image-cover;
  }

  &__title {
    font-size: $fem-text-heading-sans-300-size;
    line-height: $fem-text-heading-sans-300-height;
    letter-spacing: $fem-text-heading-sans-100-space;
    text-transform: uppercase;
    color: var(--fem-color-text-secondary);

    @extend %fem-text-heading-sans-500;

    @media screen and (min-width: 768px) {
      margin-top: 31px;
      padding: 0 7.42%;
      font-size: $fem-text-heading-sans-500-size;
      line-height: $fem-text-heading-sans-500-height;
      letter-spacing: $fem-text-heading-sans-500-space;
    }

    @media screen and (min-width: 1440px) {
      align-self: end;
      margin-top: 0;
      padding: 0;
    }
  }

  &__body {
    @media screen and (min-width: 768px) {
      padding: 0 7.42%;
    }

    @media screen and (min-width: 1440px) {
      padding: 0;
    }
  }

  &__title--emphasis {
    color: var(--fem-color-text-emphasis);
  }
}
</style>
