import * as React from 'react'
import Link from './link'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import theme from '../../config/theme'
import {fonts} from '../lib/typography'
import MobileNav from './mobile-nav'
import Container from './container'
import {bpMaxSM} from '../lib/breakpoints'
import {lighten} from 'polished'

function HeaderLink({headerColor, ...props}) {
  return (
    <Link
      css={{
        textDecoration: 'none',
        color: headerColor ? headerColor : theme.colors.body_color,
        '&:hover,&:focus': {
          background:
            headerColor === theme.colors.white
              ? 'rgba(40, 28, 77, 0.3)'
              : lighten(0.4, theme.brand.primary),
          color:
            headerColor === theme.colors.white
              ? 'white'
              : theme.colors.link_color_hover,
        },
      }}
      {...props}
    />
  )
}

const NavLink = styled(HeaderLink)({
  padding: '8px 10px',
  borderRadius: '3px',
  background: 'transparent',
  '& + &': {marginLeft: 10},
  [bpMaxSM]: {
    display: 'none',
  },
})

function Header({
  siteTitle,
  headerLink = '/',
  headerColor = 'black',
  maxWidth = 720,
}) {
  const [isScrolledDown, setIsScrolledDown] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setIsScrolledDown(true)
      } else {
        setIsScrolledDown(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  })

  return (
    <header
      css={css`
        z-index: 10;
        position: fixed;
        top: 0;
        width: 100%;
        flex-shrink: 0;
        padding: 10px 0;
        background: ${isScrolledDown
          ? `${theme.colors.purple_dark}EE`
          : 'none'};
        font-family: ${fonts.light};
        transition: all 300ms ease;
      `}
    >
      <Container maxWidth={maxWidth} noVerticalPadding>
        <nav
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <HeaderLink
            to={headerLink}
            aria-label="go to homepage"
            headerColor={headerColor}
            css={{
              position: 'relative',
              fontFamily: fonts.regular,
              display: 'flex',
              alignItems: 'center',
              img: {
                marginBottom: 0,
                maxWidth: '50px',
                position: 'absolute',
                borderRadius: '100%',
                background:
                  headerColor === '#fff' ? 'rgba(40, 28, 77, 0.7)' : '#f1f1f1',
              },
              ':hover, :focus': {
                background: 'transparent',
              },
            }}
          >
            <span>{siteTitle}</span>
          </HeaderLink>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              .mobile-nav {
                display: none;
                visibility: hidden;
                ${bpMaxSM} {
                  display: block;
                  visibility: visible;
                }
              }
            `}
          >
            <MobileNav color={headerColor} />
            <NavLink
              headerColor={headerColor}
              to="/#projects"
              aria-label="View projects page"
            >
              Projects
            </NavLink>
            <NavLink
              headerColor={headerColor}
              to="/#contact"
              aria-label="View about page"
            >
              Contact
            </NavLink>
            <NavLink
              headerColor={headerColor}
              to="/#about"
              aria-label="View about page"
            >
              About
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
