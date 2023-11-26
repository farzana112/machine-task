import axios from "axios" ;

const myAxios=axios.create({
    baseURL:"http://localhost:3001/",
    
})
export default myAxios ;