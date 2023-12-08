import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import vectorLogo from './svg/Vector.svg'
import sumLine from './svg/summary-line.svg'
import union from './svg/union.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      <div className="schedule-interface">
        <div className="calendar-summary">
          <div className="summary-details">
            <p className="h">18 - 24 December, 2023</p>
          </div>
          <img className="summary-line" alt="Summary line" src={sumLine} />
          <div className="upper-info">
            <div className="summary-filters">
              <div className="summary-filter">
                <div className="checker">
                  <img className="vector" alt="Vector" src={vectorLogo} />
                </div>
                <div className="p">Up comming</div>
              </div>
              <div className="div">
                <div className="vector-wrapper">
                  <img className="vector" alt="Vector" src={vectorLogo}  />
                </div>
                <div className="text-wrapper">Enrolled</div>
              </div>
              <div className="summary-union">
                <div className="checker-place">
                  <img className="vector" alt="Vector" src={vectorLogo} />
                </div>
                <div className="p">Completed</div>
              </div>
            </div>
            <div className="summary-title">
              <div className="title">Calendar</div>
              <p className="content">12 Total Enrolled in January</p>
              <img className="path" alt="Path" src="path.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
