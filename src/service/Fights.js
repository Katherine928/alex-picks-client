import axios from "axios";
const http = axios.create({
  baseURL: "https://alex-picks-serve.herokuapp.com/",
});

export default {
  getAllFights() {
    return http.get("/fights");
  },
  add(fight) {
    return http.post("/add", fight);
  },
  delete(id) {
    return http.delete("/delete/" + id);
  },
  getCombos() {
    return http.get("/combos");
  },
  getTotalSalary(fights) {
    return http.get("/total", fights);
  },
  getAllFightsInUse() {
    return http.get("/fightsInUse");
  },
  addInUse(fight) {
    return http.post("/addInUse", fight);
  },
  deleteInUse(id) {
    return http.delete("/deleteInUse/" + id);
  },
};
