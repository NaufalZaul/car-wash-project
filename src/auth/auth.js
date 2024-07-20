import { defineStore } from 'pinia';

const store = defineStore('auth', {
  state: () => ({ token: null }),
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

        if (result.access_token) {

          this.username = data.username;
          this.password = data.password;
          this.token = result.access_token;

          sessionStorage.setItem('token', result.access_token)
        } else {
          console.error("Error fetching services");
        }

      } catch (error) {
        console.error("Fetch error: ", error);
      }
    },
    load() {
      let getToken = sessionStorage.getItem('token');
      if (getToken) return this.token = getToken;
    },
    logout() {
      this.token = null;
      sessionStorage.removeItem('token');
    }
  }
})

export default store;