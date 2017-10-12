var login = new Vue({
  el: '#login',
  data: {
    username: '',
    password: ''
  },
  methods: {
    login() {
      let self = this
      axios.post('http://35.198.235.47:3000/login', {
        username: self.username,
        password: self.password
      })
      .then(response => {
        if (response.data.status == 'good') {
          localStorage.setItem('antotodotoken', response.data.token)
          window.location.href = 'index.html'
        }
        else if (response.data.status == 'username tidak ada') {
          window.location.href = 'index.html'
          alert('Username tidak terdaftar')
        }
        else if (response.data.status == 'password salah') {
          window.location.href = 'index.html'
          alert('Password salah')
        }
        console.log('response nih', response.data);
      })
      .catch(err => {
        console.log('error nih', err);
      })
    }
  },
  mounted() {
    console.log('mounted broo...');
  }
})
