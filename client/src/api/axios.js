import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem("token");
//   return config;
// });

export const usersAPI = {
  register(user) {
    return instance.post("/user/registration", { user });
  },
  login(login, password) {
    return instance.post("/user/login", { login, password });
  },
  getMe() {
    return instance.get("/user/me");
  },
};
