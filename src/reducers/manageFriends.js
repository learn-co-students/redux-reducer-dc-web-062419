export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      const newFriend = [
        {
          name: action.friend.name,
          id: action.friend.id,
          hometown: action.friend.hometown
        }
      ];
      const newFriendArray = state.friends.concat(newFriend);
      return { ...state, friends: newFriendArray };
    case "REMOVE_FRIEND":
      const filteredFriends = state.friends.filter(friend => {
        return action.id !== friend.id;
      });
      return {
        ...state,
        friends: filteredFriends
      };
    default:
      return state;
  }
}
