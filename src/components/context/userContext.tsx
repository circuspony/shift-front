import React, { ReactNode, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { Profile } from '../interfaces';
import Cookies from 'universal-cookie';

interface iUserContext {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
  userInfo: Profile;
  setUserInfo: Dispatch<SetStateAction<Profile>>;
}

const defaultProfile = {
  firstname: 'Тони',
  lastname: 'Старк',
  description: 'Миллионер, криптоинвестор, плейбой',
  personalWebLink: '',
  facebookLink: '',
  twitterLink: '',
  instagramLink: '',
  projects: 0
}

const UserContext = React.createContext<iUserContext>({
  isSignedIn: false,
  setIsSignedIn: () => { },
  userInfo: defaultProfile,
  setUserInfo: () => { }
});

export const UserContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(defaultProfile);

  useEffect(() => {
    const cookies = new Cookies()
    if (cookies.get('token')) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
