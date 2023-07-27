<template>
  <MasterLayout>
    <router-view></router-view>
  </MasterLayout>
</template>

<script>
import MasterLayout from "./layouts/MasterLayout.vue"

export default {
  components: {
    MasterLayout
  }
}
</script>