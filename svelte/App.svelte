<script>
  import Counter from './Counter.svelte';
</script>

<main>
  <h1>Sans UI - Svelte Counter Demo</h1>
  
  <div class="counter-container">
    <Counter />
  </div>
</main>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
    margin-bottom: 2rem;
  }
  
  .counter-container {
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
    max-width: 400px;
  }
</style>