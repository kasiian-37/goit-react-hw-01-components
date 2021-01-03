import PropTypes from "prop-types";

import s from '../Profile/Profile.module.css';

function Profile({avatar,name,tag,location,stats}) {
    return(<div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={s.avatar} width='240'
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li >
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>);
    
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}
export default Profile;