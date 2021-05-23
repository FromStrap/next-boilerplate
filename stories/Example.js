import PropTypes from 'prop-types'
import tw from 'twin.macro'
import styled from 'styled-components'

const ButtonStyled = styled.div`
  width: fit-content;
  ${tw`px-4 py-2 bg-red-400 rounded-lg text-white cursor-pointer hover:bg-red-500 transition-colors font-bold`}
`

export const Example = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

Example.propTypes = {
  /**  Receive value of button */
  children: PropTypes.string.isRequired
}
