import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!

export default function Home() {
  return (
    <div className={styles.container}>
      <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin ]}
          initialView="timeGridWeek"
          editable
      />
    </div>
  )
}
