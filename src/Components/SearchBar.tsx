import React from "react";
import { IpData } from "../Data/IpDataInterface";
import styled from "styled-components";

export default function SearchBar({
  handleClick,
  setIP,
  IpValue,
  Ip,
  Handleinput,
  handleKey,
}: {
  handleClick: () => void;
  Ip: string;
  setIP: (ip: string) => void;
  IpValue: any | null;
  setIpValue: React.Dispatch<React.SetStateAction<IpData | null>>;
  Handleinput: () => void;
  handleKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <SearchContainer>
      <Tracker>IP Address Tracker</Tracker>
      <SearchSection>
        <input
          type="text"
          value={Ip}
          placeholder="Search for any IP address or domain"
          onKeyDown={(e) => handleKey(e)}
          onFocus={Handleinput}
          onChange={(e) => setIP(e.target.value)}
        />
        <SearchButton onClick={handleClick}>
          <img src="/icon-arrow.svg" alt="" />
        </SearchButton>
      </SearchSection>
      <InfoData>
        <ArticleContainer>
          <Title>IP Address</Title>
          <Info>{IpValue?.query}</Info>
        </ArticleContainer>
        <Br />
        <ArticleContainer>
          <Title>Location</Title>
          <Info>{IpValue?.city}</Info>
        </ArticleContainer>
        <Br />
        <ArticleContainer>
          <Title>Timezone</Title>
          <Info>{IpValue?.timezone}</Info>
        </ArticleContainer>
        <Br />
        <ArticleContainer>
          <Title>ISP</Title>
          <Info>{IpValue?.isp}</Info>
        </ArticleContainer>
      </InfoData>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  background-image: url("/pattern-bg-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 770px) {
    background-image: url("/pattern-bg-desktop.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const Tracker = styled.h1`
  color: #fff;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.232px;
  margin-top: 2.4rem;
`;
const SearchButton = styled.button`
  background-color: rgba(0, 0, 0, 1);
  border: none;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
`;
const SearchSection = styled.section`
  margin-top: 2.9rem;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);
  border: none;
  height: 3.8rem;
  cursor: pointer;
  @media (min-width: 770px) {
    width: 50rem;
  }
  input {
    border: none;
    padding-left: 2rem;
    @media (min-width: 770px) {
      width: 92.4%;
    }
  }
`;

const Title = styled.p`
  color: #2c2c2c8c;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.458px;
  text-transform: uppercase;
`;
const InfoData = styled.div`
  color: #2c2c2c;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.179px;
  border-radius: 15px;
  background: #fff;
  width: 80%;
  transform: translateY(20%);
  z-index: 1000;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);
  padding: 2.6rem 2.4rem;
  @media (min-width: 770px) {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`;
const Info = styled.p`
  color: #2c2c2c;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.179px;
`;

const ArticleContainer = styled.article``;
const Br = styled.br`
  @media (min-width: 770px) {
    border-right: 2px solid #000;
    content: "";
    display: block;
    width: 1px;
    opacity: 0.15000000596046448;
  }
`;
