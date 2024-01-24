import React from 'react'
import './Notifications.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Notifications() {

    const [expanded, setExpanded] = React.useState(0);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const notificationData = [
        {
            "heading": 'Notification 1',
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "date": "12 MAr 2023"
        },
        {
            "heading": 'Notification 1',
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "date": "12 MAr 2023"
        },
        {
            "heading": 'Notification 1',
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "date": "12 MAr 2023"
        },
        {
            "heading": 'Notification 1',
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "date": "12 MAr 2023"
        }


    ]
    return (
        <div className='Notification_component'>
            <div className='Notification_component_sub'>
                <p className='Notification_heading'>All Notifications</p>
                <div className='All_notifications'>
                    {
                        notificationData.map((e, id) => {
                            return (
                                <Accordion key={id} className='Each_notification' expanded={expanded === id} onChange={handleChange(id)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        
                                    >
                                        <div className='Each_notification_heading_section'>
                                            <p className='Each_notification_heading'>{e.heading}</p>
                                            <span className='Each_notification_date'>{e.date}</span>
                                        </div>


                                    </AccordionSummary>
                                    <AccordionDetails className='Each_notification_content'>
                                        {e.content}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
