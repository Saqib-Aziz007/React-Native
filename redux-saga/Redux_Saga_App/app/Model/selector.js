import {useSelector} from 'react-redux';

export const UsersData = state => {
  console.log({state});
  const users = state?.users;

  return users;
};
