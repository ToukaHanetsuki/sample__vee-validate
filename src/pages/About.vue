<template>
  <div class="about">
    <h1>About</h1>

    <ValidationProvider
      v-slot="{ errors }"
      rules="required"
      name="メッセージ"
    >
      <input
        v-model="value"
        type="text"
      >
      <div>{{ errors[0] }}</div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  private value = '';
}
</script>
