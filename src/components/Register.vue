<template>
  <div>Got an account? <a class="switch">Login instead</a></div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {}
  },
  methods: {
    async registerUser () {
      register(this.email, this.password).then(res => {
        this.success = true
        this.$router.push({ name: 'Main'})
      }).catch(e => {
        this.failure = true
      })
    }
  }
}
</script>
