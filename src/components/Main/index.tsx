import * as S from './styles'

const Main = ({
  title = 'just a title',
  description = 'just a description'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
