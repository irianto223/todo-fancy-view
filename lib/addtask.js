var addtask = new Vue({
  el: '#addtask',
  data: {
    task: '',
    description: ''
  },
  methods: {
    logout() {
      localStorage.removeItem('antotodotoken')
      window.location.href = 'login.html'
    },
    addtask() {
      let self = this
      let config = {
        headers: {
          antotodotoken: localStorage.getItem('antotodotoken')
        }
      }

      axios.post(`http://localhost:3000/users/me/addtask`, {
        task: self.task,
        description: self.description
      }, config)
      .then(response => {
        console.log(response);
        window.location.href = 'index.html'
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    console.log('mounted brooo...');
  }
})
