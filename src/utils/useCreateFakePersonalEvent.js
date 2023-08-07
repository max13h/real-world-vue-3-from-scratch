import { useEventsStore } from "../store/events"
import { faker } from '@faker-js/faker'

export function useCreateFakePersonalEvent() {
  const eventsStore = useEventsStore()

  eventsStore.personalEventsID++

  const newEvent = {
    id: eventsStore.personalEventsID,
    title: faker.lorem.words(3),
    description: faker.lorem.words({ min: 4, max: 10 }),
    location: faker.location.city(),
    date: faker.date.soon(),
    organizer: faker.company.name(),
  }

  eventsStore.personalEvents.unshift(newEvent)
  return newEvent.id
}
