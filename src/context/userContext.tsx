import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { getUser } from '../api/requests/getUser';
import cookies from '../utils/cookies';
import { AuthStatus, iProfile } from '../utils/types';

interface iUserContext {
  isSignedIn?: AuthStatus;
  setIsSignedIn: Dispatch<SetStateAction<AuthStatus>>;
  userInfo: iProfile;
  setUserInfo: Dispatch<SetStateAction<iProfile>>;
  updateUserProfile: Function
  isAdmin: boolean
  isModer: boolean
}

const defaultProfile = {
  name: '',
  surname: '',
  patronymic: '',
  avatarId: '',
  email: "",
  role: "ROLE_USER",
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
  updateUserProfile: () => { },
  isAdmin: false,
  isModer: false,
});

export const UserContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState<AuthStatus>(undefined);
  const [userInfo, setUserInfo] = useState<iProfile>(defaultProfile);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModer, setIsModer] = useState(false);

  const updateUserProfile = async () => {
    if (cookies.get('accessToken')) {
      const profileStatus = await getUser()
      if (profileStatus.success) {
        console.log("profileStatus")
        console.log(profileStatus)
        if (profileStatus.data.personRole === "ROLE_MODER") {
          setIsModer(true)
        }
        if (profileStatus.data.personRole === "ROLE_ADMIN") {
          setIsAdmin(true)
        }
        setUserInfo({
          ...userInfo,
          name: profileStatus?.data?.name || "",
          id: profileStatus?.data?.id || "",
          avatarId: profileStatus?.data?.avatarId || "",
          surname: profileStatus?.data?.surname || "",
          email: profileStatus?.data?.email || "",
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
    if (!isSignedIn) {
      setIsAdmin(false)
      setIsModer(false)
    }
  }, [isSignedIn]);

  useEffect(() => {
    updateUserProfile()
  }, []);

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        userInfo,
        setUserInfo,
        updateUserProfile,
        isAdmin,
        isModer
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
