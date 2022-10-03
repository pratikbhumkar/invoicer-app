import { PageHead } from '../components/PageHead'

export const CreateCustomer = (): JSX.Element => {
  return (
    <div>
      <PageHead
        pageHeaderText={'Customer'}
        pageSubHeaderText={'Manage all your Customers'}
        activeTab="create"
        baseLocation="customer"
      />
    </div>
  )
}
