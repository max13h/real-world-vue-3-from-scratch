import { useEventsStore } from "../store/events"
import { faker } from '@faker-js/faker'
import dayjs from 'dayjs/dayjs.min'

export function useCreateFakePersonalEvent() {
  const eventsStore = useEventsStore()

  eventsStore.personalEventsID++

  const fakerDate = faker.date.soon()
  const date = dayjs(fakerDate).format("YYYY-MM-DD HH:mm")

  const newEvent = {
    id: eventsStore.personalEventsID,
    title: faker.lorem.words(3),
    description: faker.lorem.words({ min: 4, max: 10 }),
    location: faker.location.city(),
    date: date,
    organizer: faker.company.name(),
  }

  eventsStore.personalEvents.unshift(newEvent)
  return newEvent.id
}
