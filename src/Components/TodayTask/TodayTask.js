import React from 'react'
import '../TodayTask/TodayTask.css'


const data = [
    {
        create: 'create',
        check: 'CHECK OUT',
        name: 'Jhon Doe',
        orderid: 77009
    },
    {
        create: 'create',
        check: 'CHECK IN',
        name: 'Jhon Doe',
        orderid: 99898
    },
    {
        create: 'create',
        check: 'CHECK OUT',
        name: 'Jhon Doe',
        orderid: 909090
    },
    {
        create: 'create',
        check: 'CHECK IN',
        name: 'Jhon Doe',
        orderid: 90908
    },
    {
        create: 'create',
        check: 'CHECK OUT',
        name: 'Jhon Doe',
        orderid: 909090
    },
    {
        create: 'create',
        check: 'CHECK IN',
        name: 'Jhon Doe',
        orderid: 90908
    },
    {
        create: 'create',
        check: 'CHECK OUT',
        name: 'Jhon Doe',
        orderid: 909090
    },
    {
        create: 'create',
        check: 'CHECK IN',
        name: 'Jhon Doe',
        orderid: 90908
    }
]

export default function TodayTask() {
    return (
        <div className='today_task_box'>
            <p className='task_title'>TODAY'S TASK THURSDAY, 4th Januarys</p>
            <div className='task_content'>
                {data.map((task, index) => (
                    <div
                        key={index}
                        className='task_box'
                        style={{ borderColor: task.check === 'CHECK OUT' ? '#F01717' : '#14BA6D' }}
                    >
                        <p className='task_name'>{task.create}</p>
                        <p className='check' 
                        style={{ backgroundColor: task.check === 'CHECK OUT' ? '#FBB5B5' : '#ECFDF3' }}
                        >{task.check}</p>
                        <p className='task_name'>For {task.name}</p>
                        <p className='check'
                        style={{ backgroundColor: task.check === 'CHECK OUT' ? '#FBB5B5' : '#ECFDF3' }}
                        >ORDER ID: {task.orderid}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
