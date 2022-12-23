import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import * as S from './navigation-menu.styles'

export const Root = S.Root
export const List = S.List

type TriggerProps = React.ComponentProps<typeof S.Trigger>

export const TriggerWithCaret = ({ children, ...props }: TriggerProps) => (
  <S.Trigger {...props}>
    {children}
    <S.Caret aria-hidden />
  </S.Trigger>
)

export const Content = S.Content
export const Link = S.Link
export const NavigationLink = NavigationMenuPrimitive.Link

type IndicatorProps = React.ComponentProps<typeof S.Indicator>

export const IndicatorWithArrow = ({ ...props }: IndicatorProps) => (
  <S.Indicator {...props}>
    <S.Arrow />
  </S.Indicator>
)

export const Item = NavigationMenuPrimitive.Item
export const Viewport = S.Viewport
export const ViewportPosition = S.ViewportPosition
