export type Booking = {
  id: string
  name: string
  city: string
  date: string
  status: string
  booking: string
  Cancellation:string
  Total:string
}

const bookings: Booking[] = [
  {
    id: 'HXM0016',
    name: 'Guest Name',
    city: 'Zell am See-Kaprun',
    date: 'Nov 22 - 25',
    status: 'Booked',
    booking: 'Completed',
    Cancellation:'Non Refundable',
    Total:'89 USD',
  },
  {
    id: 'HXM0015',
    name: 'Guest Name',
    city: '	Gavle',
    date: 'Nov 24 - 28',
    status: 'Booked',
    booking: 'Canceled',
    Cancellation:'free cancle, 27-09-2024',
    Total:'66 USD',
  },
  {
    id: 'HXM0010',
    name: 'Guest Name',
    city: 'Kuala Lumpur',
    date: 'Nov 24 - 28',
    status: 'Reserved',
    booking: 'Confirmed',
    Cancellation:'free cancle, 17-09-2024',
    Total:'100 USD',
  },
  {
    id: 'HXM0007',
    name: 'Guest Name',
    city: 'Dubai',
    date: 'Nov 28 - 30',
    status: 'Booked',
    booking: 'Confirmed',
    Cancellation:'Non Refundable',
    Total:'89 USD',
  },
]

export { bookings }
