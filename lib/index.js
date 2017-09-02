var index = new Vue({
  el: '#index',
  data: {
    tasks: []
  },
  methods: {
    logout() {
      localStorage.removeItem('antotodotoken')
      window.location.href = 'login.html'
    },
    deleteTask(userId, taskId) {
      let self = this
      let config = {
        headers: {
          antotodotoken: localStorage.getItem('antotodotoken')
        }
      }
      // console.log('userId', userId);
      // console.log('taskId', taskId);
      axios.delete(`http://localhost:3000/users/${userId}/removeTask/${taskId}`, config)
      .then(response => {
        window.location.href = 'index.html'
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    },
    switchStatus(idUser, idTask) {
      let self = this
      let config = {
        headers: {
          antotodotoken: localStorage.getItem('antotodotoken')
        }
      }

      axios.patch(`http://localhost:3000/users/${idUser}/switchStatus/${idTask}`, null, config)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    if (localStorage.getItem('antotodotoken') == null) {
      window.location.href = 'login.html'
      // alert('Anda belum login')
    }
    else {
      let self = this
      let config = {
        headers: {
          antotodotoken: localStorage.getItem('antotodotoken')
        }
      }
      axios.get(`http://localhost:3000/users/me/tasks`, config)
      .then(response => {
        self.tasks = response.data
        console.log(self.tasks);
      })
      .catch(err => {
        console.log(err);
      })
      console.log('mounted broo...');
    }
  }
})
