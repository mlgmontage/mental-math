import { useSelector } from "react-redux";
import { profileSelector } from "../model/profile";

export const ProfileInfo = () => {
  const profile = useSelector(profileSelector);

  return (
    <div className="profile">
      <span>{profile.name}</span>
      <span>{profile.points}</span>
    </div>
  );
};
