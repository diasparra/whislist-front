import NextStepCard from './NextStepCard.tsx'
import NextStepLink from './NextStepLink.tsx'
import AppSvg from '../../../components/AppSvg.tsx'
import AppImage from '../../../components/AppImage.tsx'
import AppList from '../../../components/AppList.tsx'
import AppBox from '../../../components/AppBox.tsx'

export default function NextSteps() {
  const socialNetworks = [
    ['github-icon', 'GitHub', 'https://github.com/vitejs/vite'],
    ['discord-icon', 'Discord', 'https://chat.vite.dev/'],
    ['x-icon', 'X.com', 'https://x.com/vite_js'],
    ['bluesky-icon', 'Bluesky', 'https://bsky.app/profile/vite.dev'],
  ]

  return (
    <AppBox
      component="section"
      sx={{
        display: 'flex',
        borderTop: '1px solid var(--border)',
        textAlign: 'left',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <NextStepCard
        icon="documentation-icon"
        title="Documentation"
        description="Your questions, answered"
        divider
      >
        <AppBox
          component="ul"
          sx={{
            listStyle: 'none',
            p: 0,
            display: 'flex',
            gap: 1,
            mt: 4,
            flexWrap: {
              xs: 'wrap',
              md: 'nowrap',
            },
            justifyContent: {
              xs: 'center',
              md: 'flex-start',
            },
          }}
        >
          <AppList
            items={[
              <NextStepLink
                href="https://vite.dev/"
                label="Explore Vite"
                image={
                  <AppImage
                    src={'vite'}
                    sx={{
                      height: 18,
                      width: 'auto',
                    }}
                  />
                }
              />,
              <NextStepLink
                href="https://react.dev/"
                label="Learn more"
                image={
                  <AppImage
                    src={'react'}
                    sx={{
                      height: 18,
                      width: 'auto',
                    }}
                  />
                }
              />,
            ]}
          />
        </AppBox>
      </NextStepCard>

      <NextStepCard
        icon="social-icon"
        title="Connect with us"
        description="Join the Vite community"
      >
        <AppBox
          component="ul"
          sx={{
            listStyle: 'none',
            p: 0,
            display: 'flex',
            gap: 1,
            mt: 4,
            flexWrap: 'wrap',
          }}
        >
          {socialNetworks.map(([icon, label, href]) => (
            <AppBox component={'li'} key={label}>
              <NextStepLink
                href={href}
                label={label}
                icon={
                  <AppSvg
                    name={icon}
                    sx={{
                      height: 18,
                      width: 18,
                    }}
                  />
                }
              />
            </AppBox>
          ))}
        </AppBox>
      </NextStepCard>
    </AppBox>
  )
}
