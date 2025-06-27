import TimelineContent from "@/components/TimelineContent";
import { recent_activity_data } from "@/utils/contant";

function MainContent() {
  return (
    <div className=' pt-6 "'>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-4'>
          <h1 className='text-3xl font-bold'>Welcome back, Tarun </h1>
        </div>
      </div>
      <TimelineContent data={recent_activity_data?.recent_activity} />
    </div>
  )
}

export default MainContent