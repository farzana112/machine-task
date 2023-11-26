import axios from "axios" ;

const myAxios=axios.create({
    baseURL:"http://localhost:3001/",
    
})

myAxios.interceptors.request.use(
    async(config) => {
      const state =await localStorage.getItem("reduxState");
      const reduxState =await JSON.parse(state);
      const token = reduxState?.user?.user?.token;
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );
export default myAxios ;