import app from './app'
import { startConnection } from "./database";

startConnection()
app.listen(3001, ()=>{
    console.log("server listening on port 3001")
})