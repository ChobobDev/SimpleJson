import React from 'react';
import styled from 'styled-components';

interface Intro {
  fontSize: string;
  fontWeight: string;
}

const ContentsWrap = styled.section`
  width: 40rem;
  height: 36rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #ccc;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 0.1rem solid #999;
  overflow: hidden;
`;

const ContentsLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
`;

const ContentsInput = styled.input<Intro>`
  width: 34rem;
  height: 4.5rem;
  margin-top: 1rem;
  box-sizing: border-box;
  border-bottom: 0.12rem solid #000;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  &:focus {
    border-bottom: 0.15rem solid #000;
  }
`;

const ContentsTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  margin-top: 1.2rem;
  font-size: 1rem;
  border: 0.12rem solid #000;
  &::placeholder {
    font-size: 1rem;
  }
`;

function Career() {
  return (
    <ContentsWrap>
      <ContentsBox>
        <ContentsLabel>
          업무경험
          <ContentsInput type="text" id="title" placeholder="회사 명" fontSize="1rem" fontWeight="bold" />
          <ContentsInput type="text" id="stack" placeholder="사용 기술 스택" fontSize="1rem" fontWeight="regular" />
          <ContentsTextArea placeholder="활동 설명" />
          <p style={{ margin: '2rem 0 0', fontSize: '1rem' }}>기간</p>
          <ContentsInput type="date" id="date" fontSize="1rem" fontWeight="regular" />
          <ContentsInput type="date" id="date" fontSize="1rem" fontWeight="regular" />
        </ContentsLabel>
      </ContentsBox>
    </ContentsWrap>
  );
}

export default Career;