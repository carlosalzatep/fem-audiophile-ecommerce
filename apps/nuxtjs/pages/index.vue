<template>
  <NuxtLayout name="custom">
    <template #header>
      <HeaderComponent :is-hero-image="true" />
    </template>

    <!-- MAIN SECTION STARTS HERE -->
    <div class="home-page">
      <CategoriesComponent />
      <FeatureComponent />
      <OverviewComponent />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as *;
.home-page {
  display: grid;
  gap: 120px;
  margin-top: 40px;

  @include for-tablet-up {
    gap: 96px;
    margin-top: 96px;
  }

  @include for-desktop-up {
    gap: 168px;
    margin-top: 120px;
  }
}
</style>
