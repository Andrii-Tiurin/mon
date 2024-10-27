import React from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string | Date;
}

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.role}) - {user.email} -{' '}
          {user.lastLogin
            ? new Date(user.lastLogin).toLocaleDateString()
            : 'No last login date'}
          <button onClick={() => onEdit(user)}>Редактировать</button>
          <button onClick={() => onDelete(user.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
