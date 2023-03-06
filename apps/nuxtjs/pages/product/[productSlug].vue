<template>
  <NuxtLayout name="custom">
    <template #header>
      <HeaderComponent />
    </template>
    <!-- MAIN SECTION STARTS HERE -->
    <NuxtLink :to="`${$router.options.history.state.back}`">Go Back</NuxtLink>
    <section>
      <article class="product">
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
        <p v-if="productInfo?.new">NEW PRODUCT</p>
        <h1 class="product__title">{{ productInfo?.name }}</h1>
        <p class="product__description">{{ productInfo?.description }}</p>
        <span>{{ productInfo?.price }}</span>
        <form>
          <input type="number" />
          <button type="button">ADD TO CART</button>
        </form>
      </article>
    </section>

    <section>
      <h2>FEATURES</h2>
      <p>{{ productInfo?.features }}</p>
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
</script>
