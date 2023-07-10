import React, { ReactNode, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { Profile } from '../utils/types';
import cookies from '../utils/cookies';
import { AuthStatus } from '../utils/types';

interface iUserContext {
  isSignedIn?: AuthStatus;
  setIsSignedIn: Dispatch<SetStateAction<AuthStatus>>;
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
  const [isSignedIn, setIsSignedIn] = useState<AuthStatus>(undefined);
  const [userInfo, setUserInfo] = useState(defaultProfile);

  useEffect(() => {
    if (cookies.get('token')) {
      setIsSignedIn(true);
    }
    else {
      setIsSignedIn(false)
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
