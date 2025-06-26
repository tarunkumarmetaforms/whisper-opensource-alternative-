import { Button } from './components/ui/button'

function MainContent() {
  const data = {
    recent_activity: [
      {
        date: 'TODAY',
        entries: [
          {
            time: '02:07 AM',
            content: 'Audio is silent.',
            type: 'system_message',
          },
          {
            time: '01:44 AM',
            content: 'hello, this is really good.',
            type: 'transcription',
          },
          {
            time: '01:44 AM',
            content: 'Audio is silent.',
            type: 'system_message',
          },
        ],
      },
      {
        date: 'YESTERDAY',
        entries: [
          {
            time: '10:04 PM',
            content: 'The transcription was dismissed.',
            type: 'system_message',
          },
        ],
      },
      {
        date: 'JUNE 14, 2025',
        entries: [
          {
            time: '09:12 PM',
            content:
              'Give me a good project where I can scale up my Python skills. It should be related to something like a chat application or an interesting project. Not necessarily include any other libraries like Pandas and all. I wanted to be simple Python advanced API so I could understand the Python very well better by building it.',
            type: 'transcription',
          },
          {
            time: '09:12 PM',
            content: 'Audio is silent.',
            type: 'system_message',
          },
          {
            time: '08:46 PM',
            content:
              'I want to learn Python in a very good way. I want to use AsyncIO, sleep, Redis, and I want to make an end-to-end project with class models and MongoDB so I can become really good in it. Just suggest me a project where I can do all of this.',
            type: 'transcription',
          },
          {
            time: '08:46 PM',
            content: 'Daha sonra da tembihiz.',
            type: 'transcription',
          },
          {
            time: '08:45 PM',
            content: 'MBC 뉴스 이명박입니다.',
            type: 'transcription',
          },
        ],
      },
    ],
  }
  return (
    <div className=' pt-6 "'>
      {/* Header */}
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-4'>
          <h1 className='text-3xl font-bold'>Welcome back, Tarun </h1>
        </div>
      </div>

      <TIMElINECONTENT data={data?.recent_activity} />
    </div>
  )
}

function App() {
  return (
    <div className='mx-auto w-[95%] space-y-4 flex justify-center pt-10 min-h-screen'>
      <MainContent />
    </div>
  )
}

const TIMElINECONTENT = ({ data }: { data: TimelineItem[] }) => {
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

export default App

interface TimelineItem {
  date: string
  entries: {
    time: string
    content: string
    type: string
  }[]
}
