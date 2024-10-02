export type InvoiceType = {
  id: string,
  date: string,
  amount: string,
  currency: string,
  type:string,
  invoice:string,
  active:boolean,
}

const invoiceHistory: InvoiceType[] = [
  {
    id: 'HXM0016',
    active:false,
    amount: '3,999',
    currency: 'USD',
    type:'depit',
    date: '29 Aug 2022',
    invoice:'View',
  },
  {
    id: 'HXM0016',
    active:false,
    amount: '3,000',
    currency: 'USD',
    type:'depit',
    date: '02 Sep 2022',
    invoice:'View',
  },
  {
    id: 'HXM0016',
    active:true,
    amount: '4,258',
    currency: 'USD',
    type:'depit',
    date: '05 Sep 2022',
    invoice:'View',
  },
  {
    id: 'HXM0016',
    active:false,
    amount: '1,225',
    currency: 'USD',
    type:'depit',
    date: '07 Sep 2022',
    invoice:'View',
  },
  {
    id: 'HXM0016',
    active:true,
    amount: '2,588',
    currency: 'USD',
    type:'depit',
    date: '10 Sep 2022',
    invoice:'View',
  },
]

export { invoiceHistory }
