import { Fragment, useState } from 'react'
import Tick from './components/Tick.tsx'
import Spacer from './components/Spacer.tsx'
import NextSteps from './components/nextSteps'
import AppBox from '../components/AppBox.tsx'
import Logo from './components/Logo.tsx'
import AppTitle from '../components/AppTitle.tsx'
import AppTypography from '../components/AppTypography.tsx'
import AppCode from '../components/AppCode.tsx'
import AppButton from '../components/AppButton.tsx'

function HomePage() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((prevState) => prevState + 1)
  }

  return (
    <Fragment>
      <AppBox
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          placeContent: 'center',
          placeItems: 'center',
          flexGrow: 1,
          '@media (max-width:1024px)': {
            px: 2.5,
            pt: 4,
            pb: 3,
            gap: 2.25,
          },
        }}
      >
        <Logo />
        <AppBox>
          <AppTitle value={'Get Started'} type={'title'} />
          <AppTypography
            value={[
              'Edit ',
              <AppCode key="app-file" value={'src/App.tsx'} />,
              ' and save to test ',
              <AppCode key="hmr" value={'HMR'} />,
            ]}
          />
        </AppBox>
        <AppButton value={count} onClick={handleClick} />
      </AppBox>
      <Tick />
      <NextSteps />
      <Tick />
      <Spacer />
    </Fragment>
  )
}

export default HomePage
