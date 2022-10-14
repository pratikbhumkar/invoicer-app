import { PageHead } from '../components/PageHead'

export const Invoices = (): JSX.Element => {
  return (
    <div>
      <PageHead
        pageHeaderText={'Billing & Invoices'}
        pageSubHeaderText={'Manage all your invoices'}
        activeTab="create"
        baseLocation="invoice"
      />
    </div>
  )
}
