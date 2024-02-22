import axios from "axios";

export const url = "http://localhost:8000/";

export const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

// export const usersAPI = {
//   register(user) {
//     return instance.post("/user/registration", { user });
//   },
//   login(login, password) {
//     return instance.post("/user/login", { login, password });
//   },
//   getMe() {
//     return instance.get("/user/me");
//   },
// };

export const adminAPI = {
  // register(user) {
  //   return instance.post("/user/registration", { user });
  // },
  login(admin) {
    return instance.post("/admin/login", admin);
  },
  check() {
    return instance.get("/admin/check");
  },
};

export const cardAPI = {
  // register(user) {
  //   return instance.post("/user/registration", { user });
  // },
  create(card) {
    return instance.post("/card", card);
  },
  delete(id) {
    return instance.delete(`/card/${id}`);
  },
  edit(card) {
    return instance.put("/card", card);
  },
  getCards() {
    return instance.get(`/card`);
  },
  getCard(cardNameTranslate) {
    return instance.get(`/card/${cardNameTranslate}`);
  },
  filterCards(filter) {
    return instance.get(
      `/card/filter?text=${filter.text || ""}&tags=${filter.tags || ""}&sort=${
        filter.sort || ""
      }`
    );
  },
};

export const tagsAPI = {
  create(tag) {
    return instance.post("/tags", { tag: tag });
  },
  delete(id) {
    return instance.delete(`/tags/${id}`);
  },
  getAll() {
    return instance.get(`/tags/all`);
  },
  getTag(id) {
    return instance.get(`/tags/${id}`);
  },
};
