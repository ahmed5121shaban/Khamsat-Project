export type Booking = {
  id: string
  name: string
  city: string
  date: string
  registerDate:string
  status: string
  booking: string
  Cancellation:string
  Total:string
  visaPay:boolean
}

const bookings: Booking[] = [
  {
    id: 'HXM0016',
    name: 'Guest Name',
    city: 'Zell am See-Kaprun',
    date: '22/25/2024',
    status: 'Paid',
    booking: 'Completed',
    Cancellation:'Non Refundable',
    Total:'89 USD',
    registerDate:'22/25/2024',
    visaPay:true,
  },
  {
    id: 'HXM0015',
    name: 'Guest Name',
    city: '	Gavle',
    date: '22/25/2024',
    status: 'UnPaid',
    booking: 'Canceled',
    Cancellation:'free cancle, 27-09-2024',
    Total:'66 USD',
    registerDate:'22/25/2024',
    visaPay:false,
  },
  {
    id: 'HXM0010',
    name: 'Guest Name',
    city: 'Kuala Lumpur',
    date: '22/25/2024',
    status: 'Paid',
    booking: 'Confirmed',
    Cancellation:'free cancle, 17-09-2024',
    Total:'100 USD',
    registerDate:'22/25/2024',
    visaPay:true,
  },
  {
    id: 'HXM0007',
    name: 'Guest Name',
    city: 'Dubai',
    date: '22/25/2024',
    status: 'UnPaid',
    booking: 'Confirmed',
    Cancellation:'Non Refundable',
    Total:'89 USD',
    registerDate:'22/25/2024',
    visaPay:false,
  },
]

export { bookings }
