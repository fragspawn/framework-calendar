import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './App.css'

const CATEGORIES = {
  BUSY: { id: 'busy', label: 'Busy', color: '#EF4444' },
  FREE: { id: 'free', label: 'Free', color: '#10B981' },
  TENTATIVE: { id: 'tentative', label: 'Tentative', color: '#F59E0B' },
}

export default function App() {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Busy - Teams Meeting',
      start: new Date().toISOString().split('T')[0] + 'T09:00:00',
      end: new Date().toISOString().split('T')[0] + 'T10:00:00',
      category: 'busy',
      backgroundColor: CATEGORIES.BUSY.color,
      borderColor: '#DC2626',
    },
  ])
  const [selectedCategory, setSelectedCategory] = useState('busy')
  const [editingEvent, setEditingEvent] = useState(null)

  const handleDateSelect = (selectInfo) => {
    const title = `${CATEGORIES[selectedCategory.toUpperCase()]?.label || selectedCategory} - New Event`
    const newEvent = {
      id: String(Math.random()),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      category: selectedCategory,
      backgroundColor: CATEGORIES[selectedCategory.toUpperCase()].color,
      borderColor: CATEGORIES[selectedCategory.toUpperCase()].color,
    }
    setEvents([...events, newEvent])
  }

  const handleEventClick = (clickInfo) => {
    setEditingEvent(clickInfo.event)
  }

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id))
    setEditingEvent(null)
  }

  const updateEventCategory = (id, newCategory) => {
    setEvents(
      events.map(e =>
        e.id === id
          ? {
              ...e,
              category: newCategory,
              title: e.title.replace(/^[^-]+/, CATEGORIES[newCategory.toUpperCase()].label),
              backgroundColor: CATEGORIES[newCategory.toUpperCase()].color,
              borderColor: CATEGORIES[newCategory.toUpperCase()].color,
            }
          : e
      )
    )
  }

  const handleEventDrop = (dropInfo) => {
    const event = dropInfo.event
    setEvents(
      events.map(e =>
        e.id === event.id
          ? {
              ...e,
              start: event.startStr,
              end: event.endStr,
            }
          : e
      )
    )
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Calendar Framework - Free/Busy Manager</h1>
        <p>Select a date range to add free/busy blocks</p>
      </header>

      <div className="app-content">
        <aside className="sidebar">
          <div className="control-panel">
            <h2>Add Event</h2>
            <div className="category-selector">
              <label>Select Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {Object.values(CATEGORIES).map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="legend">
              <h3>Categories</h3>
              {Object.values(CATEGORIES).map(cat => (
                <div key={cat.id} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: cat.color }}
                  ></span>
                  <span>{cat.label}</span>
                </div>
              ))}
            </div>

            {editingEvent && (
              <div className="event-editor">
                <h3>Edit Event</h3>
                <p className="event-title">{editingEvent.title}</p>
                <p className="event-time">
                  {editingEvent.start} to {editingEvent.end}
                </p>
                <div className="category-selector">
                  <label>Change Category:</label>
                  <select
                    value={editingEvent.extendedProps?.category || 'busy'}
                    onChange={(e) => {
                      updateEventCategory(editingEvent.id, e.target.value)
                      setEditingEvent(null)
                    }}
                  >
                    {Object.values(CATEGORIES).map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteEvent(editingEvent.id)
                  }}
                >
                  Delete Event
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditingEvent(null)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </aside>

        <main className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            views={{
              timeGridWeek: {
                dayHeaderFormat: { weekday: 'long' },
              },
            }}
            weekends={true}
            headerToolbar={{
              left: '',
              center: '',
              right: '',
            }}
            slotMinTime="00:00:00"
            slotMaxTime="24:00:00"
            scrollTime="06:00:00"
            businessHours={{
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: '06:00',
              endTime: '18:00',
            }}
            selectConstraint="businessHours"
            eventConstraint="businessHours"
            events={events}
            selectable={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            editable={true}
            eventDrop={handleEventDrop}
            height="700px"
            expandRows={true}
          />
        </main>
      </div>
{/*
      <div className="events-list">
        <h2>Events ({events.length})</h2>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div
                className="event-color-bar"
                style={{ backgroundColor: event.backgroundColor }}
              ></div>
              <div className="event-details">
                <h4>{event.title}</h4>
                <p className="event-time">
                  {new Date(event.start).toLocaleString()} to{' '}
                  {new Date(event.end).toLocaleTimeString()}
                </p>
                <button
                  className="btn btn-small"
                  onClick={() => setEditingEvent({ ...event, id: event.id, extendedProps: { category: event.category } })}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
    </div>
  )
}
