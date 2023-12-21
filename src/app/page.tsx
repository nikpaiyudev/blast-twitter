import Header from './components/Header'
import Leaderboard from './components/Leaderboard'
import Twitter from './components/Twitter'

export default function Home() {
  return (
    <div className='container m-auto p-20 linear-background h-screen'>
      <Header />
      <Twitter />
      <Leaderboard />
    </div>

  )
}
