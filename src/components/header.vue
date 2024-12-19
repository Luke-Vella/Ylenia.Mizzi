<script lang="ts" setup>
import { ref } from "vue";
import Button from "primevue/button";
import Menubar from "primevue/menubar";

import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
]);

function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>

<template>
  <Menubar :model="items">
    <template #start> </template>

    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <Button :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </Button>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>

    <template #end>
      <div class="flex items-center gap-2">
        <Button
          icon="pi pi-moon"
          severity="secondary"
          variant="text"
          rounded
          @click="toggleDarkMode"
          aria-label="Bookmark"
        />

        <Button
          icon="pi pi-sign-in"
          label="Login"
          size="small"
          severity="primary"
          as="router-link"
          to="/login"
          aria-label="Bookmark"
        />
      </div>
    </template>
  </Menubar>
</template>
