import PageTitle from 'ui/PageTitle';
import SimpleAreaChart from './SimpleAreaChart';
import SimpleBarChart from './SimpleBarChart';

export default function DashboardLandingPage() {
  return (
    <div>
      <PageTitle title={"Dashboard"} />
      <div className='flex flex-row flex-wrap space-y-10'>
        <SimpleBarChart />
        <SimpleAreaChart />
        <SimpleAreaChart />
        <SimpleBarChart />
      </div>
    </div>
  )
}
