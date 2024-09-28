type InvoiceType = {
  id: string,
  date: string,
  amount: string,
  currency: string,
  type:string,
  invoice:string,
}

const invoiceHistory: InvoiceType[] = [
  {
    id: 'HXM0016',
    
    amount: '3,999',
    currency: 'USD',
    type:'depit',
    date: '29 Aug 2022',
    invoice:'fa-regular fa-eye',
  },
  {
    id: 'HXM0016',

    amount: '3,000',
    currency: 'USD',
    type:'depit',
    date: '02 Sep 2022',
    invoice:'fa-regular fa-eye',
  },
  {
    id: 'HXM0016',

    amount: '4,258',
    currency: 'USD',
    type:'depit',
    date: '05 Sep 2022',
    invoice:'fa-regular fa-eye',
  },
  {
    id: 'HXM0016',

    amount: '1,225',
    currency: 'USD',
    type:'depit',
    date: '07 Sep 2022',
    invoice:'fa-regular fa-eye',
  },
  {
    id: 'HXM0016',

    amount: '2,588',
    currency: 'USD',
    type:'depit',
    date: '10 Sep 2022',
    invoice:'fa-regular fa-eye',
  },
]

export { invoiceHistory }
