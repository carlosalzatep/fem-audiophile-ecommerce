<template>
  <NuxtLayout name="custom">
    <template #header>
      <HeaderComponent :hero-title="`${$route.params.category}`" />
    </template>

    <!-- START MAIN -->
    <section>
      <ul>
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
            <h2 class="product__title">{{ productItem.name }}</h2>
            <p class="product__description">{{ productItem.description }}</p>
            <a :href="`../product/${productItem.slug}`" class="product__link"
              >See product</a
            >
          </article>
        </li>
      </ul>
    </section>
  </NuxtLayout>
</template>

<script setup>
// set page Title
const route = useRoute()
const categoryTitle = `
  ${route.params.category[0].toUpperCase()}${route.params.category.slice(1)}
  `
useHead({ title: categoryTitle })

// API Call
const { data: categoryProducts } = await useFetch(
  `/api/products/${route.params.category}`
)
</script>
