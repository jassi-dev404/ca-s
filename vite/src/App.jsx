import GradientASCII from './GradientASCII.jsx'
import TechText from './TechText.jsx'
import nitikImg from './assets/nitik.png';
import soundiesImg from './assets/soundies.jpeg'
import './App.css'

function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ width: '100%', height: '180px', position: 'relative' }}>
        <TechText
          text="Cool Animals & Stuff"
          fontWeight={500}
          fontSize={100}
          reveal="letter"
          dashLength={2}
          dashGap={2}
          specks={32}
          intro="type"
          introDuration={2.2}
          clickKick
          guides={false}
          fontFamily="monospace"
          letterSpacing={-0.02}
          accentColor="#ffffff"
          reach={200}
          softness={0.7}
          lineStyle="dashed"
          strokeWidth={1}
          speed={1}
          bounce={0.4}
          selection
          labels
          color="currentColor"
          align="center"
          verticalAlign="top"
          paddingTop={20}
          sweep
        />
      </div>
      <h1 style={{ fontSize: '1.8rem', padding: '0 20px', margin: 0 }}>
        helloings, welcome to ca&s.com (not a real link) in this website i will showcase some animals i find cool:
      </h1>
      <img
        src={nitikImg}
        alt="nitik"
        style={{ height: '300px', width: 'auto', objectFit: 'contain' }}
        href="cool.com"
      />
      <p style={{ fontSize: '1.2rem', margin: 0 }}>
        this animal does not do much, its kinda cool
      </p>
      <p style={{ fontSize: '1.2rem', margin: 0 }}>
        his website is <a href='https://www.nitikpsn.xyz/' target='_blank' class="text-blue-400">nitikpsn.xyz</a>
      </p>

      <img
        src={soundiesImg}
        alt="nitik"
        style={{ height: '300px', width: 'auto', objectFit: 'contain',}}
        href="cool.com"
        class="pt-10"
      />
      <p style={{ fontSize: '1.2rem', margin: 0 }}>
        soundies i got because i went from 8th place to 0 :_)
      </p>

    </div>
  )
}

export default App