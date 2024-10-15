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
    name: 'AMANI SALEMANI',
    city: 'Zell am See-Kaprun',
    date: '22/25/2024',
    status: 'Paid',
    booking: 'Completed',
    Cancellation:'Non Refundable',
    Total:'89',
    registerDate:'22/25/2024',
    visaPay:true,
  },
  {
    id: 'HXM0015',
    name: 'AMANI SALEMANI',
    city: '	Gavle',
    date: '22/25/2024',
    status: 'UnPaid',
    booking: 'Confirmed',
    Cancellation:'Free Cancellation till 7 Jan 2022',
    Total:'66',
    registerDate:'22/25/2024',
    visaPay:true,
  },
  {
    id: 'HXM0010',
    name: 'KHALDOUN ALSALAMNAI',
    city: 'Kuala Lumpur',
    date: '22/25/2024',
    status: 'Paid',
    booking: 'Completed',
    Cancellation:'Free Cancellation till 7 Jan 2022',
    Total:'100',
    registerDate:'22/25/2024',
    visaPay:true,
  },
  {
    id: 'HXM0007',
    name: 'KHALDOUN ALSALAMNAI',
    city: 'Dubai',
    date: '22/25/2024',
    status: 'UnPaid',
    booking: 'Confirmed',
    Cancellation:'Non Refundable',
    Total:'89',
    registerDate:'22/25/2024',
    visaPay:false,
  },
]

export { bookings }
