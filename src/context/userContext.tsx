import React, { ReactNode, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { Profile } from '../utils/types';
import cookies from '../utils/cookies';
import { AuthStatus } from '../utils/types';
import { getUser } from '../api/getUser';

interface iUserContext {
  isSignedIn?: AuthStatus;
  setIsSignedIn: Dispatch<SetStateAction<AuthStatus>>;
  userInfo: Profile;
  setUserInfo: Dispatch<SetStateAction<Profile>>;
  authorizeUser: Function
}

const defaultProfile = {
  name: '',
  surname: '',
  patronymic: '',
  bio: 'Миллионер, криптоинвестор, плейбой',
  personalWebLink: '',
  facebookLink: '',
  twitterLink: '',
  instagramLink: '',
  projects: 0,
  money: 0
}

const UserContext = React.createContext<iUserContext>({
  isSignedIn: false,
  setIsSignedIn: () => { },
  userInfo: defaultProfile,
  setUserInfo: () => { },
  authorizeUser: () => { },
});

export const UserContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState<AuthStatus>(undefined);
  const [userInfo, setUserInfo] = useState(defaultProfile);
  const authorizeUser = async () => {
    if (cookies.get('accessToken')) {
      const profileStatus = await getUser()
      if (profileStatus.success) {
        console.log("profileStatus")
        console.log(profileStatus)
        setUserInfo({
          ...userInfo,
          name: profileStatus?.data?.name || "",
          surname: profileStatus?.data?.surname || "",
          patronymic: profileStatus?.data?.patronymic || "",
          bio: profileStatus?.data?.bio || "",
          money: profileStatus?.data?.money || 0,
        })
        setIsSignedIn(true);
        return
      }
    }
    setIsSignedIn(false)
  }

  useEffect(() => {
    authorizeUser()
  }, []);

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        userInfo,
        setUserInfo,
        authorizeUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
