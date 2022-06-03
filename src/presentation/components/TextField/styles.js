import { tc } from '../../utils'

export const wrapper = tc(`
  flex
  flex-col
`)

export const label = tc(`
  w-fit
  mb-2.5
  text-xs
  font-medium
  text-carteira-global-black
`)

export const input = tc(`
  h-9
  bg-carteira-global-gray
  rounded
  border
  border-carteira-global-gray-medium
  pl-5
  pt-4
  pb-3
`)

export const message = tc(`
  text-carteira-global-gray-dark
  text-xxs
  mt-1.5
`)
