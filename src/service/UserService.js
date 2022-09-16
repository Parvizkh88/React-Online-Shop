import HTTPService from "./HTTPService";

const UserService = {
    login: async (username, password) => {
        try {
            let { data } = await HTTPService.post("/api/login", {
                username, password
            });
            localStorage.setItem("token", data.token);
            return true
        } catch (err) {
            return false
        }
    },
    profile: async () => {
        const { data } = await HTTPService.get("/api/profile");
        return data;
    }
}

export default UserService;