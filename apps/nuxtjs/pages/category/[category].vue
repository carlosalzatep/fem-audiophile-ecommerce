<template>
  <NuxtLayout name="custom">
    <template #header>
      <HeaderComponent :hero-title="`${category}`" />
    </template>

    <!-- MAIN SECTION STARTS HERE -->
    <div class="category-page">
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
                <NewProductTag v-if="productItem?.new" />
                <h2 class="product__title">
                  {{ productItem.name }}<br />{{ productItem.category }}
                </h2>
                <p class="product__description">
                  {{ productItem.description }}
                </p>
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
      <CategoriesComponent />
      <OverviewComponent />
    </div>
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

<style lang="scss" scoped>
@use '@fem-aec/tokens/dist/scss/mixins' as *;
@use '@fem-aec/tokens/dist/scss/tokens' as *;
@use '@/assets/styles/mixins' as *;

.category-page {
  display: grid;
  gap: 120px;
  margin-top: 64px;

  @include for-tablet-up {
    margin-top: 120px;
  }

  @include for-desktop-up {
    gap: 160px;
    margin-top: 160px;
  }
}

.products {
  &__list {
    display: grid;
    gap: 120px;

    @include for-desktop-up {
      gap: 160px;

      //interleave positions
      li:nth-child(even) picture {
        order: 1;
      }
    }
  }

  .product {
    display: grid;
    gap: 32px;

    @include for-tablet-up {
      gap: 52px;
    }
    @include for-desktop-up {
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
      align-content: center;
      display: grid;
      gap: 24px;
      justify-items: center;
      margin: auto;
      text-align: center;
      width: 80%;

      @include for-tablet-up {
        gap: 16px;
      }
      @include for-desktop-up {
        text-align: left;
        justify-items: left;
      }
    }

    &__title {
      text-transform: uppercase;
      color: var(--fem-color-text-secondary);

      @extend %fem-text-heading-sans-300;

      @include for-tablet-up {
        font-size: 4rem;
        line-height: 4.4rem;
        margin-bottom: 16px;
      }
    }

    &__description {
      @include for-tablet-up {
        margin-bottom: 8px;
      }
      @include for-desktop-up {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
