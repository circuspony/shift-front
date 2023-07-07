import React, { ReactElement, useState, Dispatch, SetStateAction, useEffect } from 'react';

interface iUserContext {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userInfo: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserInfo: Dispatch<SetStateAction<any>>;
}

const UserContext = React.createContext<iUserContext>({
  isSignedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsSignedIn: () => {},
  userInfo: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserInfo: () => {}
});

export const UserContextProvider = ({
  token = undefined,
  children
}: {
  token: string | undefined;
  children: ReactElement[];
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstname: 'Тони',
    lastname: 'Старк',
    description: 'Миллионер, криптоинвестор, плейбой',
    personalWebLink: '',
    facebookLink: '',
    twitterLink: '',
    instagramLink: ''
  });
  useEffect(() => {
    if (token != undefined) {
      setIsSignedIn(true);
    }
  }, [token]);
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
