import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
  mongoose.set('strictQuery', true)
  // if the database is already connected don't connect again
  if (connected) {
    console.log('MONGO DB Database is already connected')
    return
  }
  // connect to the mongo DB database
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log('Connected to MongoDB database...')
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error)
  }
}

export default connectDB
