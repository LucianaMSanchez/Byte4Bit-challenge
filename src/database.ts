import { connect } from 'mongoose'

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost/Byte4Bit');
        console.log(`Database is connected: ${db.connection.name}`);
    
    } catch (error) {
        console.log(error)
    }
}
