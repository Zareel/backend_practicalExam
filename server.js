import mongoose from "mongoose";
import app from "./src/app.js";
import config from "./src/config/config.js";

(async ()=>{
    try{
        await mongoose.connect(config.MONGODB_URL)
        console.log("DB Connected");
    }catch(error){
        console.log(error);
    }
})()

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`App is running at PORT: ${PORT}`);
});
