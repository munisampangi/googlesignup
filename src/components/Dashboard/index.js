import {BiSolidDashboard} from 'react-icons/bi'
import {BsTags, BsCash, BsSearch} from 'react-icons/bs'
import {GrSchedulePlay} from 'react-icons/gr'
import {LuUserSquare2, LuUsers2} from 'react-icons/lu'
import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineLike} from 'react-icons/ai'
import {FaBell} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

import './index.css'

const dataBoard = [
  {
    week: 'Week1',
    views1: 200,
    views2: 300,
    views3: 500,
    color: 'red',
  },
  {
    week: 'Week2',
    views1: 500,
    views2: 600,
    views3: 400,
    color: 'green',
  },
  {
    week: 'Week3',
    views1: 800,
    views2: 1000,
    views3: 900,
    color: 'yellow',
  },
  {
    week: 'Week4',
    views1: 700,
    views2: 100,
    views3: 460,
    color: 'pink',
  },
  {
    week: 'Week5',
    views1: 2000,
    views2: 370,
    views3: 780,
    color: 'grey',
  },
]

const pieData = [
  {name: 'bussiness', value: 400, color: 'red'},
  {name: 'users', value: 100, color: 'green'},
  {name: 'total', value: 150, color: 'yellow'},
  {name: 'likes', value: 200, color: 'grey'},
]
const colors = [
  'rgb(153, 248, 153)',
  'rgb(232, 241, 156)',
  'rgb(247, 176, 150)',
  'rgb(149, 192, 245)',
]

const Dashboard = () => (
  <div className="dashboard-container">
    <nav className="sidebar">
      <div className="board-section">
        <h1 className="heading">Board.</h1>
        <ul className="ul-section">
          <li className="li-item">
            <BiSolidDashboard className="side-icons" />
            <span className="side-icon-names">Dashboard</span>
          </li>
          <li className="li-item">
            <BsTags className="side-icons" />
            <span className="side-icon-names">Transctions</span>
          </li>
          <li className="li-item">
            <GrSchedulePlay className="side-icons" />
            <span className="side-icon-names">Schedules</span>
          </li>
          <li className="li-item">
            <LuUserSquare2 className="side-icons" />
            <span className="side-icon-names">Users</span>
          </li>
          <li className="li-item">
            <IoSettingsOutline className="side-icons" />
            <span className="side-icon-names">Settings</span>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </nav>

    <div className="dashboard-section">
      <div className="dashboard-header">
        <h1 className="dashboard-heading">Dashboard</h1>
        <section className="input-section">
          <section className="input-element">
            <input type="search" placeholder="search" className="input" />
            <BsSearch size={15} />
          </section>
          <FaBell />
          <CgProfile />
        </section>
      </div>

      <ul className="dashboard-components">
        <li className="revenue-section">
          <div className="component-section">
            <BsCash className="react-icon" size={30} />
            <div>
              <p>Total Revenue</p>
              <h1 className="component-headings">$2,129,430</h1>
            </div>
          </div>
        </li>
        <li className="bussiness-section">
          <div className="component-section">
            <BsTags className="react-icon" size={30} />
            <div>
              <p className="business-para">Total Business</p>
              <h1 className="component-headings">1,520</h1>
            </div>
          </div>
        </li>
        <li className="likes-section">
          <div className="component-section">
            <AiOutlineLike className="react-icon" size={30} />
            <div>
              <p>Total Likes</p>
              <h1 className="component-headings">9,721</h1>
            </div>
          </div>
        </li>
        <li className="users-section">
          <div className="component-section">
            <LuUsers2 className="react-icon" size={30} />
            <div className="text-content">
              <p>Total Users</p>
              <h1 className="component-headings">892</h1>
            </div>
          </div>
        </li>
      </ul>
      <div className="charts-section">
        <ResponsiveContainer width={850} aspect={4}>
          <LineChart
            data={dataBoard}
            width="300"
            margin={{top: 5, left: 15, bottom: 5, right: 5}}
          >
            <XAxis dataKey="week" />
            <YAxis />
            <Legend />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="views1" stroke="green" />
            <Line type="monotone" dataKey="views2" stroke="red" />
            <Line type="monotone" dataKey="views3" stroke="black" />
          </LineChart>
        </ResponsiveContainer>
        <div className="piechart_data">
          <div className="graph-section">
            <ResponsiveContainer width={500} aspect={3}>
              <PieChart width={500} height={230}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  isAnimationActive={false}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  <Legend />

                  {pieData.map((entry, index) => (
                    <Cell fill={colors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="schedule-section">
            <h4>Todays schedule</h4>

            <section className="section-border">
              <p className="section-font">Meetings with many clients</p>
              <p className="section-font">approx 1200 clients </p>
              <p className="section-font">At sunrise Appartment</p>
            </section>
            <section className="section-border1">
              <p className="section-font">Meetings with many clients</p>
              <p className="section-font">approx 1200 clients </p>
              <p className="section-font">At sunrise Appartment</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Dashboard
