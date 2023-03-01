import './App.css';
import styled from 'styled-components';
import Career from './components/Career';
import GlobalStyles from './GlobalStyles';

const ContentsWrap = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const ContentsBox = styled.div``;


function App() {
  return (
    <>
      <GlobalStyles />
      <ContentsWrap>
        <ContentsBox>
          <Career />
        </ContentsBox>
      </ContentsWrap>
    </>
  );
}

export default App;
