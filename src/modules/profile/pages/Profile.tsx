import { useEffect } from 'react';

interface IProfileProps{
  title: string;
}

const Profile = ({ title }: IProfileProps ) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      vista perfil
    </div>
  );
};

export default Profile;
