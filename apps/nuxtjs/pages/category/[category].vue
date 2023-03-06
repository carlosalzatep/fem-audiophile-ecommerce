<template>
  <NuxtLayout name="custom">
    <template #header>
      <HeaderComponent :hero-title="`${category}`" />
    </template>

    <!-- MAIN SECTION STARTS HERE -->
    <section class="products">
      <ul v-if="categoryProducts?.length" class="products__list">
        <li
          v-for="productItem in categoryProducts"
          :key="`product-${productItem.id}`"
        >
          <article class="product">
            <picture class="product__picture">
              <source
                :srcset="productItem.image.desktop"
                media="(min-width: 1440px)"
              />
              <source
                :srcset="productItem.image.tablet"
                media="(min-width: 768px)"
              />
              <img
                class="product__image"
                :src="productItem.image.mobile"
                :alt="productItem.name"
              />
            </picture>
            <div class="product__content">
              <p v-if="productItem?.new" class="product__new-tag">
                NEW PRODUCT
              </p>
              <h2 class="product__title">{{ productItem.name }}</h2>
              <p class="product__description">{{ productItem.description }}</p>
              <NuxtLink
                :to="`../product/${productItem.slug}`"
                class="button__primary"
                >See product</NuxtLink
              >
            </div>
          </article>
        </li>
      </ul>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { category } = route.params
useTitleTemplate(category)

// API Call
const { data: categoryProducts } = await useFetch(`/api/category/${category}`)
if (!categoryProducts) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.products {
  margin-top: 24px;

  &__list {
    display: grid;
    gap: 120px;

    @media screen and (min-width: 1440px) {
      gap: 160px;
    }
  }

  .product {
    display: grid;
    gap: 32px;

    @media screen and (min-width: 375px) {
      gap: 52px;
    }

    @media screen and (min-width: 1440px) {
      gap: 0 125px;
      grid-template-columns: 1fr 1fr;
    }

    &__picture {
      background-color: var(--fem-color-background-secondary);
      text-align: center;

      @extend %image-border;

      img {
        @extend %image-border;
      }
    }
    &__content {
      text-align: center;

      @media screen and (min-width: 1440px) {
        text-align: left;
      }
    }
    &__title {
      margin: 24px auto;

      @media screen and (min-width: 375px) {
        margin: 16px auto 32px auto;
      }
    }

    &__description {
      margin-bottom: 2.4rem;

      @media screen and (min-width: 1440px) {
        margin-bottom: 4rem;
      }
    }
  }
}
</style>
