import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 20px);
  width: calc(100% - 64px);
  margin: -8px;
  padding: 10px 40px;
  overflow: hidden;
  background-color: #1c2022;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  width: max-content;
`;

interface ContentProps {
  url: string;
}

const Content = styled.div<ContentProps>`
  background-image: url(${props => props.url});
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 5px solid #ffffff;
  border-radius: 10px;

  & > ${Content} {
    margin: 10px 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #ffffff;
  border: 0;
  color: #000000;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default {
  Container,
  Title,
  ContentWrapper,
  Content,
  ButtonWrapper,
  Button
};
