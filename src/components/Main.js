import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Timer from "./Timer";
import {
  webSearchFunc,
  newsSearchFunc,
  newsTrendFunc,
  imageSearchFunc,
  imageTrendFunc,
  videoSearchFunc,
  videoTrendFunc,
} from "../api/api";
// import { mockApi } from "../api/mockapi";
import Cards from "./Cards";
// import Dropdown from "./Dropdown";

const Main = () => {
  const [shouldShrink, setShouldShrink] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [shouldShowData, setShouldShowData] = useState(false);
  const [data, setData] = useState([]);
  const [searchEmptyTime, setSearchEmptyTime] = useState("");
  const [callApi, setCallApi] = useState(null);
//   const [option, setOption] = useState("search");
  const [hitApi, setHitApi] = useState(false);

  const handleSearchClose = () => {
    setInputValue("");
  };

  const storeTime = (value) => {
    setSearchEmptyTime(value);
  };

  const handleSearch = (searchtype) => {
    if (inputValue) {
      setShouldShrink(true);
      setShouldShowData(true);
      setCallApi(searchtype);
      setHitApi(true);
    }
  };

  const handleApiCall = async () => {
    switch (callApi) {
      case "search":
        await webSearchFunc(inputValue)
          .then((response) => setData(response))
          .catch((error) => setData(error));
        break;
      case "news":
        await newsTrendFunc()
          .then((response) => setData(response))
          .catch((error) => setData(error));
        break;
      case "newsSearch":
        await newsSearchFunc(inputValue)
          .then((response) => setData(response))
          .catch((error) => setData(error));
        break;
      case "image":
        await imageTrendFunc()
          .then((response) => setData(response))
          .catch((error) => setData(error));
        break;
      case "imageSearch":
        await imageSearchFunc(inputValue)
          .then((response) => setData(response))
          .catch((error) => setData(error));
        break;
      case "video":
        await videoTrendFunc()
          .then((response) => setData(response))
          .catch((error) => setData(error));
        break;
      case "videoSearch":
        await videoSearchFunc(inputValue)
          .then((response) => setData(response))
          .catch((error) => setData(error));
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    if (hitApi) {
      handleApiCall();
      setHitApi(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hitApi]);

  useEffect(() => {
    if (shouldShrink && !inputValue && searchEmptyTime === "1:00") {
      setShouldShrink(false);
      setShouldShowData(false);
      setSearchEmptyTime("");
      setData([]);
      setCallApi(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, searchEmptyTime]);

  return (
    <MainContainer>
      <Container shouldShrink={shouldShrink}>
        <TitleHead shouldShrink={shouldShrink}>Searchify</TitleHead>
        <InputCont shouldShrink={shouldShrink}>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleSearch(callApi === null ? "search" : callApi)
            }
            value={inputValue}
          />
          {inputValue && (
            <CloseSearch onClick={handleSearchClose}>
              <CloseIcon />
            </CloseSearch>
          )}
          <SearchButton
            onClick={() => handleSearch(callApi === null ? "search" : callApi)}
          >
            <SearchIcon />
          </SearchButton>
        </InputCont>
        {shouldShrink && !inputValue && (
          <TimerContent>
            <Timer storeTime={storeTime} />
          </TimerContent>
        )}
      </Container>
      {shouldShrink && (
        <Tabs shouldShrink={shouldShrink}>
          <TabBtn
            onClick={() => {
              if (callApi === "newsSearch") {
                setCallApi("search");
              } else {
                handleSearch("newsSearch");
              }
            }}
            color={
              callApi === "newsSearch" || callApi === "news" ? "white" : "black"
            }
            background={
              callApi === "newsSearch" || callApi === "news"
                ? "black"
                : "transparent"
            }
          >
            News
          </TabBtn>
          <TabBtn
            onClick={() => {
              if (callApi === "imageSearch") {
                setCallApi("search");
              } else {
                handleSearch("imageSearch");
              }
            }}
            color={
              callApi === "imageSearch" || callApi === "image"
                ? "white"
                : "black"
            }
            background={
              callApi === "imageSearch" || callApi === "image"
                ? "black"
                : "transparent"
            }
          >
            Image
          </TabBtn>
          <TabBtn
            onClick={() => {
              if (callApi === "videoSearch") {
                setCallApi("search");
              } else {
                handleSearch("videoSearch");
              }
            }}
            color={
              callApi === "videoSearch" || callApi === "video"
                ? "white"
                : "black"
            }
            background={
              callApi === "videoSearch" || callApi === "video"
                ? "black"
                : "transparent"
            }
          >
            Video
          </TabBtn>
        </Tabs>
      )}
      <DataDisplay shouldShowData={shouldShowData}>
        {Object.keys(data).length > 0 &&
          (data.success ? (
            data.data.length > 0 ? (
              Object.keys(data.data).map((i, index) => {
                const res = data.data[i];
                return (
                  <Cards
                    key={`${i}-${index}`}
                    name={res.name}
                    desp={
                      callApi === "search" ||
                      callApi === "news" ||
                      callApi === "newsSearch"
                        ? res.description
                        : null
                    }
                    link={res.url || res.webSearchUrl}
                    image={
                      callApi === "search"
                        ? null
                        : res?.image?.thumbnail?.contentUrl || res?.thumbnailUrl
                    }
                    sxStyle={
                      callApi !== "search" &&
                      callApi !== "news" &&
                      callApi !== "newsSearch"
                        ? {
                            display: "flex",
                            justifyContent: "center",
                            width: "15rem",
                          }
                        : {
                            width: "25rem",
                          }
                    }
                  />
                );
              })
            ) : (
              <div>No data</div>
            )
          ) : (
            <div>Somwthing Went Wrong</div>
          ))}
      </DataDisplay>
    </MainContainer>
  );
};

export default Main;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.shouldShrink ? "left" : "center")};
  column-gap: 0.8rem;
  margin: 1rem 0 0 0;
  width: ${(props) => (props.shouldShrink ? "97%" : "45%")};
`;

const TabBtn = styled.button`
  border: 0.1rem solid black;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => (props.shouldShrink ? "0.75rem" : "1rem")};
  padding: ${(props) => (props.shouldShrink ? "0.4rem" : "0.5rem")};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: lightcyan;
`;

const shrinkAndMove = keyframes`
  from {}
  to {
    font-size: 1.5rem;
    flex-direction: row;
    width: 100%;
    padding: 1rem 0 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5rem;
  animation: ${(props) => (props.shouldShrink ? shrinkAndMove : "none")} 0.5s
    forwards;
  max-width: 100%;
`;

const DataDisplay = styled.div`
  margin-top: 20px;
  background: transparent;
  width: 100%;
  height: ${(props) => (props.shouldShowData ? "100%" : "0%")};
  transition: height 0.5s;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const InputCont = styled.div`
  padding: ${(props) => (props.shouldShrink ? "0.3rem 1rem" : "0.8rem 1rem")};
  border: 0.1rem solid black;
  width: ${(props) => (props.shouldShrink ? "25%" : "100%")};
  display: flex;
  justify-content: space-between;
  border-radius: 2rem;
  input {
    outline: none;
    width: 100%;
    margin-right: 0.4rem;
    border: none;
    background: transparent;
  }
`;

const TitleHead = styled.div`
  padding: ${(props) =>
    props.shouldShrink ? "0 0.5rem 0 1rem" : "0 0 0.8rem 0"};
`;

const SearchButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CloseSearch = styled.button`
  padding: 0;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const TimerContent = styled.div`
  margin-left: 1rem;
`;
