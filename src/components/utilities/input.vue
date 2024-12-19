<script lang="ts">
export default {
  props: {
    type: String,
  },
};
</script>

<template>
  <input class="c-input" :type="type" />
</template>
