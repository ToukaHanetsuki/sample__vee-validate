<template>
  <div class="home">
    <h1>Home</h1>

    <p>{{ counter }}</p>
    <button @click="increment">
      increment
    </button>
    <button @click="decrement">
      decrement
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { counterModule } from '@/store/modules/counter';

@Component({})
export default class Home extends Vue {
  private get counter(): number {
    return counterModule.counter;
  }

  private increment(): void {
    counterModule.increment();
  }

  private decrement(): void {
    counterModule.decrement();
  }
}
</script>
