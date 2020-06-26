import Head from 'next/head'
import Header from '../components/header'
import Centered from '../components/centered'
import Card from '../components/card'

const LandingPage = () => (
  <div className="container">
    <Head>
      <title>MinElev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header title="MinElev" />
      <Centered>
        <Card style={{ padding: 30, lineHeight: 1.5 }}>
          Hei der!<br />
          MinElev er stengt for skoleåret 2019/2020, og åpner opp igjen før skolestart neste skoleår.
          <br /><br />

          <img src="https://media.giphy.com/media/cjbxJXhNXDMjhlr1S8/source.gif"/>
          <br /><br />

          God sommer! 😎 ☀️
        </Card>
      </Centered>
    </main>
  </div>
)

export default LandingPage
