<template>
  <footer class="footer">
    <img
      class="footer__logo"
      src="~/assets/icons/logo.svg"
      alt="Audiophile logo"
    />
    <nav class="footer__nav nav" aria-label="Footer page navigation">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a href="" class="nav__link link__primary">Home</a>
        </li>
        <li class="nav__list-item">
          <a href="" class="nav__link link__primary">Headphones</a>
        </li>
        <li class="nav__list-item">
          <a href="" class="nav__link link__primary">Speakers</a>
        </li>
        <li class="nav__list-item">
          <a href="" class="nav__link link__primary">Earphones</a>
        </li>
      </ul>
    </nav>
    <p class="footer__body">
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </p>
    <p class="footer__bottom">Copyright 2021. All Rights Reserved</p>
    <ul class="footer__social social">
      <li class="social__item">
        <a href="" class="social__link social__icon social__icon--facebook"
          >Facebook</a
        >
      </li>
      <li class="social__item">
        <a href="" class="social__link social__icon social__icon--twitter"
          >Twitter</a
        >
      </li>
      <li class="social__item">
        <a href="" class="social__link social__icon social__icon--instagram"
          >Instagram</a
        >
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
@use '@fem-aec/tokens/dist/scss/mixins' as *;
@use '@fem-aec/tokens/dist/scss/tokens' as *;
@use '@/assets/styles/mixins' as *;

.footer {
  background-color: var(--fem-color-background-tertiary);
  display: grid;
  gap: 48px;
  justify-items: center;
  margin-top: 120px;
  padding: 0 6.4% 38px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    padding: 0 5.2% 46px;
    justify-items: start;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 11.46% 48px;
  }

  > * {
    @media screen and (min-width: 768px) {
      grid-column: 1 / span 2;
    }

    @media screen and (min-width: 1440px) {
      grid-column-end: auto;
    }
  }

  &::before {
    display: block;
    content: '';
    width: 101px;
    height: 4px;
    background-color: var(--fem-color-fill-icon-primary-active);
  }

  &__logo {
    margin-top: 4px;

    @media screen and (min-width: 768px) {
      margin-top: 28px;
    }
  }

  &__nav {
    text-align: center;

    @media screen and (min-width: 1440px) {
      grid-area: 2 / 2;
      align-self: end;
      justify-self: end;
    }

    > .nav__list {
      @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 3.4rem;
      }
    }
  }

  &__body,
  &__bottom {
    text-align: center;
    color: var(--fem-color-text-tertiary);

    @media screen and (min-width: 768px) {
      text-align: start;
    }
  }

  &__body {
    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
    }
  }

  &__bottom {
    font-weight: $fem-text-heading-sans-100-weight; // TODO: Setup token
  }

  &__bottom {
    @media screen and (min-width: 768px) {
      grid-area: 5 / 1;
    }
  }

  &__social {
    @media screen and (min-width: 768px) {
      grid-area: 5 / 2;
      justify-self: end;
    }

    @media screen and (min-width: 1440px) {
      align-self: end;
      grid-row-start: 3;
    }
  }
}

.social {
  display: flex;
  gap: 16px;
  font-size: 0;
  height: 32px;

  &__icon {
    padding: 4px;
    height: 32px;

    @extend %icon-mask;
    @extend %color-animation;

    &:is(:hover, :focus)::after {
      background-color: var(--fem-color-fill-icon-primary-active);
    }

    &:focus {
      box-shadow: inset 0 0 0 2px var(--fem-color-fill-icon-primary-focus);
    }

    &::after {
      height: 24px;
      width: 24px;
      background-color: var(--fem-color-fill-icon-primary-rest);

      @extend %color-animation;
    }
  }

  &__icon--facebook::after {
    mask-image: url('@/assets/icons/icon-facebook.svg');
  }

  &__icon--twitter::after {
    mask-image: url('@/assets/icons/icon-twitter.svg');
  }

  &__icon--instagram::after {
    mask-image: url('@/assets/icons/icon-instagram.svg');
  }
}
</style>
