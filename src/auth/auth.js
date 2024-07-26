import router from '@/routes/route';
import axios from 'axios';
import { defineStore } from 'pinia';

const store = defineStore('auth', {
  state: () => ({
    nama: null,
    role: null,
    token: null
  }),
  actions: {
    async login(data) {
      try {
        const response = await fetch("http://localhost:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.status == 'success') {
          sessionStorage.setItem('token', result.access_token)

          alert('login berhasil!')

          if (result.role == 'admin') {
            router.push({ name: 'admin' })
          } else {
            router.push({ name: 'user' })
          }
        } else {
          console.error("Error fetching services");
        }

      } catch (error) {
        console.error("Fetch error: ", error);
      }
    },
    async register(data) {
      try {
        const response = await fetch("http://localhost:8000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.status == 'success') {
          alert('registrasi berhasil!')
          router.push({ name: 'login' })
        } else {
          console.error("Error fetching services");
        }

      } catch (error) {
        console.error("Fetch error: ", error);
      }
    },
    async load() {
      let getToken = sessionStorage.getItem('token');
      if (getToken) {
        this.token = getToken;

        let response = axios.get('http://localhost:8000/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getToken}`
          }
        })
          // console.log((await response).data);
          .then(res => {
            this.nama = res.data.name
            this.role = res.data.role
          })
        return this.$state;
      }

      // if (getToken) return this.token = getToken;
    },
    logout() {
      this.nama = null;
      this.role = null;
      this.token = null;
      sessionStorage.removeItem('token');
      window.location.href = '/login'
    }
  }
})

export default store;