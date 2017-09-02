var register = new Vue({
  el: '#register',
  data: {
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  },
  methods: {
    register() {
      let self = this
      if (self.password != self.confirm_password) {
        console.log('confirm password gagal');
        alert('confirm password gagal')
      }
      else {
        axios.post('http://localhost:3000/register', {
          name: self.name,
          username: self.username,
          email: self.email,
          password: self.password,
          confirm_password: self.confirm_password
        })
        .then(response => {
          console.log('response nih',response);
          window.location.href = 'login.html'
        })
        .catch(err => {
          console.log('err nih',err);
        })
      }
    }
  },
  mounted() {
    console.log('mounted...');
  }
})
