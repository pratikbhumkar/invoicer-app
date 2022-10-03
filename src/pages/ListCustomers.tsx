import { PageHead } from '../components/PageHead'

export const ListCustomers = (): JSX.Element => {
  return (
    <div>
      <PageHead
        pageHeaderText={'Customer'}
        pageSubHeaderText={'Manage all your Customers'}
        activeTab="list"
        baseLocation="customer"
      />
    </div>
  )
}
