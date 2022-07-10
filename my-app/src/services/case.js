import http from "../http-common";

class CaseDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }

    get(id) {
        return http.get(`/id/${id}`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`?${by}=${query}&page=${page}`);
    }

    createCase(data) {
        return http.post("/review", data);
    }

    updateCase(data) {
        return http.put("/review", data);
    }

    deleteCase(id) {
        return http.delete(`/review?id=${id}`);
    }

    getCases(id) {
        return http.get(`/cuisines`);
    }
}

export default new CaseDataService();