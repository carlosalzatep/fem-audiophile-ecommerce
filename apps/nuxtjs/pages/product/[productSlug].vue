<template>
  <NuxtLayout name="custom">
    <template #header>
      <HeaderComponent />
    </template>

    <!-- MAIN SECTION STARTS HERE -->
    <NuxtLink
      :to="`${$router.options.history.state.back}`"
      class="button__go-back"
      >Go Back</NuxtLink
    >
    <div class="product-page">
      <section>
        <article class="product">
          <section class="product__content">
            <picture class="product__picture">
              <source
                :srcset="productInfo?.image.desktop"
                media="(min-width: 1440px)"
              />
              <source
                :srcset="productInfo?.image.tablet"
                media="(min-width: 768px)"
              />
              <img
                class="product__image"
                :src="productInfo?.image.mobile"
                :alt="productInfo?.name"
              />
            </picture>
            <div class="product__info">
              <NewProductTag v-if="productInfo?.new" />
              <h1 class="product__title">
                {{ productInfo?.name }}<br />{{ productInfo?.category }}
              </h1>
              <p class="product__description">{{ productInfo?.description }}</p>
              <p class="product__price">${{ productPrice }}</p>
              <form class="product__form">
                <input type="number" class="form__quantity" />
                <button type="button" class="form__add-to-cart">
                  ADD TO CART
                </button>
              </form>
            </div>
          </section>

          <section class="product__features">
            <h2>FEATURES</h2>
            <p>{{ productInfo?.features }}</p>
          </section>

          <section class="product__includes">
            <h2>IN THE BOX</h2>
            <ul>
              <li
                v-for="(item, index) in productInfo?.includes"
                :key="`include-${index}`"
              >
                <span>{{ item.quantity }}</span>
                <span>{{ item.item }}</span>
              </li>
            </ul>
          </section>

          <section class="product__gallery">imgs</section>
        </article>
      </section>

      <CategoriesComponent />
      <OverviewComponent />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { productSlug } = route.params
useTitleTemplate(productSlug)

// API Call
const { data: productInfo } = await useFetch(`/api/products/${productSlug}`)
if (!productInfo) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const productPrice = computed(() => {
  return Number(productInfo?.value?.price).toLocaleString('en')
})
</script>

<style lang="scss" scoped>
@use '@fem-aec/tokens/dist/scss/mixins' as *;
@use '@fem-aec/tokens/dist/scss/tokens' as *;
@use '@/assets/styles/mixins' as *;
.product-page {
  display: grid;
  gap: 120px;
  margin-top: 28px;

  @include for-tablet-up {
    margin-top: 24px;
  }

  @include for-desktop-up {
    gap: 160px;
    margin-top: 55px;
  }
}

.product {
  display: grid;
  gap: 88px;

  &__content {
    display: grid;
    gap: 24px;
    @include for-tablet-up {
      gap: 70px;
      grid-template-columns: 1fr 1fr;
    }
    @include for-desktop-up {
      gap: 124px;
    }
  }

  &__info {
    display: grid;
    gap: 24px;
    @include for-tablet-up {
      align-items: center;
      align-content: center;
      gap: 16px;
    }
  }

  &__picture {
    background-color: var(--fem-color-background-secondary);
    text-align: center;

    @extend %image-border;

    img {
      @extend %image-border;
    }
  }

  &__title {
    color: var(--fem-color-text-secondary);
    text-align: left;
    text-transform: uppercase;

    @extend %fem-text-heading-sans-300;

    @include for-tablet-up {
      font-size: 4rem;
      line-height: 4.4rem;
      margin-bottom: 16px;
    }
  }

  &__price {
    @extend %fem-text-heading-sans-100;
    color: var(--fem-color-text-secondary);

    @include for-tablet-up {
      margin-top: 16px;
    }
  }

  &__form {
    margin-top: 6px;

    @include for-tablet-up {
      margin-top: 16px;
    }
  }

  .new-tag {
    margin-top: 4px;
  }

  @include for-tablet-up {
    gap: 120px;
  }

  @include for-desktop-up {
    gap: 160px;
  }
}
</style>
