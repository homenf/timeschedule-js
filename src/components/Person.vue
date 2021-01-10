<template>
  <div> 
    <div>
      {{name}}
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    name: "",
  }
}
</script>
