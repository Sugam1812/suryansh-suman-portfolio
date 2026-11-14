<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-python {
      background-color: #3776ab;
      color: white;
    }

    &-mql5 {
      background-color: #1c6b3c;
      color: white;
    }

    &-pinescript {
      background-color: #687b3f;
      color: white;
    }

    &-llm {
      background-color: #7c3aed;
      color: white;
    }

    &-agents {
      background-color: #db2777;
      color: white;
    }

    &-ml {
      background-color: #0891b2;
      color: white;
    }

    &-backtesting {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-quant {
      background-color: #0f766e;
      color: white;
    }

    &-sql {
      background-color: #336791;
      color: white;
    }

    &-powerbi {
      background-color: #f2c811;
      color: #3f3402;
    }

    &-automation {
      background-color: #4f46e5;
      color: white;
    }

    &-mcp {
      background-color: #101010;
      color: white;
    }
  }
}
</style>
