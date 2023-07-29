import axios from 'axios'

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/max13h/real-world-vue-3-from-scratch/",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
