import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { styled } from 'stitches.config'

export const Root = styled(NavigationMenu.Root, {
  position: 'relative',
})

export const List = styled(NavigationMenu.List, {
  display: 'flex',
  alignItems: 'center',
  gap: 32,
})

export const Item = styled(NavigationMenu.Item, {
  
})

export const Trigger = styled(NavigationMenu.Trigger, {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  color: '#9D446E',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '21px',
})

export const Content = styled(NavigationMenu.Content, {
  position: 'absolute',
  top: 0,
  left: 0,

  marginTop: 20,
})

export const ContentList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: 16,

  background: '#FFFFFF',
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.15)',
  borderRadius: 8,

  overflow: 'visible'
})

export const ContentListItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '12px 75px 12px 12px',
  gap: 4,

  width: '100%',

  borderRadius: 5,

  color: '#586474',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18px',

  cursor: 'pointer',

  '& span': {
    color: '#7C8999',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px',
  },


  '&:hover': {
    background: 'rgba(95, 92, 107, 0.08)',
    color: '#7B3455',

    '& span': {
      color: '#7B3455',
    },
  },
})

export const Link = styled(NavigationMenu.Link, {
  color: '#9D446E',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '21px',
})

// =========================================

export const Communities = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 24,

  maxWidth: 560,

  padding: '24px 24px 26px 24px',

  background: '#FFFFFF',
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.15)',
  borderRadius: 8,
})

export const AboutHuntsville = styled('div', {
  '& h3': {
    marginBottom: 16,

    fontWeight: 500,
    fontSize: 14,
    lineHeight: '21px',
    color: '#58243C',
  }
})

export const Line = styled('div', {
  width: '100%',
  height: 1,
  background: '#8C8A97',
  opacity: 0.4,
  borderRadius: 80,
})

export const Huntsville = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  
  padding: 16,

  background: 'rgba(95, 92, 107, 0.08)',
  borderRadius: '8px',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: 8,

    fontWeight: 500,
    fontSize: 12,
    lineHeight: '27px',
    color: '#7B3455',
  },

  '& span': {
    maxWidth: 200,
    fontWeight: 400,
    fontSize: 10,
    lineHeight: '15px',
    color: '#8C3C62',
  },
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: 5,
  background: '#FBB693',
  borderRadius: 5,
})


export const OurCommunities = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,


  '& h3': {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '21px',
    color: '#58243C'
  }
  
})

export const CommunitiesList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,

  '& li': {
    position: 'relative',
    width: '164px',
    height: '80px',
    background: 'linear-gradient(180deg, rgba(78, 75, 89, 0) 50%, rgba(0, 0, 0, 0.6) 100%)',
    borderRadius: '4px',
    overflow: 'hidden'
  },

  '& span': {
    position: 'absolute',
    bottom: 10,
    left: 10,

    fontWeight: 600,
    fontSize: 10,
    lineHeight: '15px',
    color: '#FFFFFF',
  }
})
