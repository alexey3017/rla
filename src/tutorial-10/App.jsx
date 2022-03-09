import { useState, useMemo } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import link from './assets/img/link.svg';
import location from './assets/img/location.svg';
import { StyledInput } from './components/Input.styled';
import { StyledButton } from './components/Button.styled';

const Container = styled.div`
  max-width: 660px;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const AppUser = styled.div`
  padding: 35px;
  background-color: #1f2a48;
  border: 1px solid #003670;
  border-radius: 10px;
`;

const AppUserInfo = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const AppUserImage = styled.div`
  margin-right: 24px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const AppUserName = styled.h1`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  color: #fff;
`;

const AppUserLogin = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #007afe;
`;
const AppUserAbout = styled.p`
  color: var(--main-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
const AppUserStats = styled.ul`
  display: flex;
  padding: 14px 10px;
  margin-bottom: 22px;
  list-style: none;
  border-radius: 10px;
  background-color: #141c2f;
`;
const AppUserStatsItem = styled.li`
  color: var(--main-color);
  padding: 0 28px;
  font-size: 16px;
  line-height: 20px;
  border-right: 1px solid #1f2a48;
  &:last-child {
    border-right: 0;
  }
`;

const AppUserStatsItemSpan = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  padding-left: 10px;
`;
const AppUserLocation = styled.ul`
  list-style: none;
`;
const AppUserLocationItem = styled.li`
  color: var(--main-color);
  padding-left: 26px;
  margin-bottom: 17px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.02em;
  background-image: url(${location});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 16px;
  &:last-child {
    background-image: url(${link});
  }
`;
const AppUserLocationLink = styled.a`
  text-decoration: none;
  color: var(--main-color);
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

function App() {
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    about: '',
    nickName: '',
    repos: 0,
    followers: 0,
    location: '',
    url: '',
    avatar: '',
  });
  const [isLoading, setIsLoading] = useState({ status: false, message: '' });
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  function debounce(func, timeout = 2000) {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  }

  const setUrl = (user) => {
    window.location.search = `login=${user}`;
  };

  const getUserData = async () => {
    try {
      setIsUserLoaded(false);
      setIsLoading((prevState) => {
        return { ...prevState, status: true, message: 'Loading...' };
      });
      const { data } = await axios.get(
        `https://api.github.com/users/${userInput}`
      );
      console.log(data);
      setIsLoading((prevState) => {
        return { ...prevState, status: false, message: '' };
      });
      setIsUserLoaded(true);
      setUserData((prevState) => {
        return {
          ...prevState,
          name: data.name,
          about: data.bio,
          nickName: data.login,
          repos: data.public_repos,
          followers: data.followers,
          location: data.location,
          url: data.url,
          avatar: data.avatar_url,
        };
      });
      setUrl(userInput);
    } catch (error) {
      setIsUserLoaded(false);
      setIsLoading((prevState) => {
        return { ...prevState, status: false, message: 'User not existing' };
      });
    }
  };
  const onChangeSearch = useMemo(() => debounce(getUserData, 2000), []);

  return (
    <Container>
      <Form>
        <StyledInput
          onChangeSearch={onChangeSearch}
          setUserInput={setUserInput}
          userInput={userInput}
        />
        <StyledButton disabled={isLoading.status} getUserData={getUserData}>
          Найти
        </StyledButton>
      </Form>
      <h2>{isLoading.message}</h2>
      {isUserLoaded && (
        <AppUser>
          <AppUserInfo>
            <AppUserImage>
              <img width='100%' src={userData.avatar} alt='' />
            </AppUserImage>
            <div className='app-user_data'>
              <AppUserName>
                {userData.name}
                <AppUserLogin>@{userData.nickName}</AppUserLogin>
              </AppUserName>
              <AppUserAbout>{userData.about}</AppUserAbout>
            </div>
          </AppUserInfo>
          <AppUserStats>
            <AppUserStatsItem>
              Репозитории
              <AppUserStatsItemSpan>{userData.repos}</AppUserStatsItemSpan>
            </AppUserStatsItem>
            <AppUserStatsItem>
              Подписчиков
              <AppUserStatsItemSpan>{userData.followers}</AppUserStatsItemSpan>
            </AppUserStatsItem>
            <AppUserStatsItem>
              Звёзд
              <AppUserStatsItemSpan>{userData.repos}</AppUserStatsItemSpan>
            </AppUserStatsItem>
          </AppUserStats>
          <AppUserLocation>
            <AppUserLocationItem>{userData.location}</AppUserLocationItem>
            <AppUserLocationItem>
              <AppUserLocationLink href={userData.url}>
                {userData.url}
              </AppUserLocationLink>
            </AppUserLocationItem>
          </AppUserLocation>
        </AppUser>
      )}
    </Container>
  );
}

export default App;
