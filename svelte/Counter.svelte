<script>
  import Button from './Button.svelte';
  
  // Counter state
  let count = 0;
  
  // Increment function
  function increment() {
    count += 1;
  }
</script>

<div class="counter">
  <div class="counter-value">{count}</div>
  <Button type="primary" size="large" onClick={increment}>Increment (+1)</Button>
</div>

<style>
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .counter-value {
    font-size: 3rem;
    font-weight: bold;
    margin: 1rem 0;
    color: #4a56e2;
  }
</style>