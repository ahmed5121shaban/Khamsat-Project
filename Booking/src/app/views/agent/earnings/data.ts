type InvoiceType = {
  id: number,
  date: string,
  amount: string,
  currency: number,
  type:string,
  invoice:string,
}

const invoiceHistory: InvoiceType[] = [
  {
    id: 254684,

    amount: '3,999',
    currency: 154,
    type:'depit',
    date: '29 Aug 2022',
    invoice:'invoice',
  },
  {
    id: 158468,

    amount: '3,000',
    currency: 154,
    type:'depit',
    date: '02 Sep 2022',
    invoice:'invoice',
  },
  {
    id: 245778,

    amount: '4,258',
    currency: 154,
    type:'depit',
    date: '05 Sep 2022',
    invoice:'invoice',
  },
  {
    id: 245778,

    amount: '1,225',
    currency: 154,
    type:'depit',
    date: '07 Sep 2022',
    invoice:'invoice',
  },
  {
    id: 254896,

    amount: '2,588',
    currency: 154,
    type:'depit',
    date: '10 Sep 2022',
    invoice:'invoice',
  },
]

export { invoiceHistory }
