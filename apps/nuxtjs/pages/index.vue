<template>
  <NuxtLayout name="custom">
    <template #header>
      <HeaderComponent :is-hero-image="true" />
    </template>

    <!-- MAIN -->
    <section class="categories">
      <ul class="categories__list">
        <li class="category">
          <img
            class="category__image"
            src="~/assets/images/mobile/image-xx99-mark-one-headphones.png"
            alt="XX99 Mark 1 headphones category image"
          />
          <p class="category__title">Headphones</p>
          <a href="" class="category__link button__tertiary">Shop</a>
        </li>
        <li class="category">
          <img
            class="category__image"
            src="~/assets/images/mobile/image-zx9-speaker.png"
            alt="ZX9 speaker category image"
          />
          <p class="category__title">Speakers</p>
          <a href="" class="category__link button__tertiary">Shop</a>
        </li>
        <li class="category">
          <img
            class="category__image"
            src="~/assets/images/mobile/image-yx1-earphones.png"
            alt="YX1 earphones category image"
          />
          <p class="category__title">Earphones</p>
          <a href="" class="category__link button__tertiary">Shop</a>
        </li>
      </ul>
    </section>
    <section class="feature">
      <ul class="feature__list">
        <li class="feature__item feature__item--no-overlap-img">
          <article class="feature__item-container">
            <picture class="feature__picture">
              <source
                srcset="~/assets/images/desktop/image-speaker-zx9-home.png"
                media="(min-width: 1440px)"
              />
              <source
                srcset="~/assets/images/tablet/image-speaker-zx9-home.png"
                media="(min-width: 768px)"
              />
              <img
                class="feature__image"
                src="~/assets/images/mobile/image-speaker-zx9-home.png"
                alt="ZX9 speaker feature image"
              />
            </picture>
            <div class="feature__content">
              <p class="feature__title">ZX9 speaker</p>
              <p class="feature__body">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <a href="" class="feature__link button__secondary">See product</a>
            </div>
          </article>
        </li>
        <li class="feature__item feature__item--bg-img">
          <article class="feature__item-container">
            <picture class="feature__picture">
              <source
                srcset="~/assets/images/desktop/image-speaker-zx7-home.jpg"
                media="(min-width: 1440px)"
              />
              <source
                srcset="~/assets/images/tablet/image-speaker-zx7-home.jpg"
                media="(min-width: 768px)"
              />
              <img
                class="feature__image"
                src="~/assets/images/mobile/image-speaker-zx7-home.jpg"
                alt="ZX7 speaker feature image"
              />
            </picture>
            <div class="feature__content">
              <p class="feature__title">ZX7 speaker</p>
              <a href="" class="feature__link button__secondary">See product</a>
            </div>
          </article>
        </li>
        <li class="feature__item feature__item--alone-img">
          <article class="feature__item-container">
            <picture class="feature__picture">
              <source
                srcset="~/assets/images/desktop/image-earphones-yx1-home.jpg"
                media="(min-width: 1440px)"
              />
              <source
                srcset="~/assets/images/tablet/image-earphones-yx1-home.jpg"
                media="(min-width: 768px)"
              />
              <img
                class="feature__image"
                src="~/assets/images/mobile/image-earphones-yx1-home.jpg"
                alt="YX1 earphones feature image"
              />
            </picture>
            <div class="feature__content">
              <p class="feature__title">YX1 earphones</p>
              <a href="" class="feature__link button__secondary">See product</a>
            </div>
          </article>
        </li>
      </ul>
    </section>
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
          alt="Young adult listeing to music with XX99 Mark II headphones"
        />
      </picture>
      <h2 class="overview__title">
        Bringing you the
        <span class="overview__title--emphasis">best</span> audio gear
      </h2>
      <p class="overview__body">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  </NuxtLayout>
</template>
