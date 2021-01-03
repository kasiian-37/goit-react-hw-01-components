import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({friends}) {
 return(

<ul className={s.friendList}>
  {friends.map(friend => (<FriendListItem props = {friend} key ={friend.id} />))}
 
</ul>);
}

FriendList.propTypes ={
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
}
export default FriendList;
