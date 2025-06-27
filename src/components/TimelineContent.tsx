import { Button } from '@/components/ui/button'

const TimelineContent = ({ data }: { data: TimelineItem[] }) => {
  return (
    <div>
      <div className='flex justify-end'>
        <Button className='mr-2'>Audio Permission</Button>

        <Button>Accessibility Permission</Button>
      </div>

      {data.map(item => (
        <div key={item.date} className=' mb-4'>
          <h2 className='text-[12px] font-medium text-gray-500 mb-4'>{item.date}</h2>
          <div className='mb-4'>
            {item.entries.map((entry, index) => (
              <div key={entry.time} className='flex items-center max-w-[900px]'>
                <div
                  className={`flex border-1 border-gray-200 p-4 w-full hover:bg-gray-50 transition-colors duration-200 ${
                    index === 0
                      ? 'rounded-t-md'
                      : index === item.entries.length - 1
                        ? 'rounded-b-md'
                        : ''
                  }`}
                >
                  <p className='text-sm font-medium gap-4 whitespace-nowrap'>{entry.time}</p>
                  <p className='text-sm text-gray-500 ml-4'>{entry.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TimelineContent

interface TimelineItem {
  date: string
  entries: {
    time: string
    content: string
    type: string
  }[]
}

