<script lang="ts">
import { computed } from "vue";

// functions that mutate state and trigger

export default {
  props: {
    text: String,
    type: {
      type: String,
      required: true,
      validator(value: string) {
        // The value must match one of these strings
        return [
          "primary",
          "secondary",
          "alternate",
          "success",
          "danger",
          "info",
          "underline",
        ].includes(value);
      },
    },
  },

  setup(props, { emit }) {
    {
      const buttonType = computed(() => {
        switch (props.type) {
          case "primary":
            return "c-btn-primary";
          case "secondary":
            return "c-btn-secondary";
          case "alternate":
            return "c-btn-alternate";
          case "success":
            return "c-btn-success";
          case "danger":
            return "c-btn-danger";
          case "info":
            return "c-btn-info";
          case "underline":
            return "c-btn-underline";
          default:
            return "c-btn-secondary";
        }
      });

      function buttonClicked() {
        emit("onClicked");
      }

      return { buttonType, buttonClicked };
    }
  },
};
</script>

<template>
  <button @click="buttonClicked" class="grow mx-1" :class="buttonType">
    {{ text }}
  </button>
</template>
