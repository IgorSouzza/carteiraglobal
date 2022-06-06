import { tc } from '../../utils'

export const wrapper = ({ circleVariant }) => tc(`
  w-full
  bg-white
  shadow-carteira-card

  ${circleVariant ? 'rounded-full p-11 lg:p-11' : 'rounded p-5'}
`)

export const title = tc(`
  text-sm
  font-semibold
  text-carteira-global-green
`)

export const childrenContainer = tc(`
  mt-8
`)
