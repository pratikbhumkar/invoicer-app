import { Header } from '../components/Header'

export const Invoices = (): JSX.Element => {
  return (
    <div>
      <Header headerText={'Billing & Invoices'} />
      <p className="sub-header">Manage all your invoices</p>
    </div>
  )
}
