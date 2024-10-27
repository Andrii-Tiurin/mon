import React, { useState } from 'react';

interface UserFormProps {
  initialData?: {
    name: string;
    email: string;
    role: 'admin' | 'editor' | 'user';
    password?: string;
  };
  onSave: (user: { name: string; email: string; role: string; password?: string }) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData = { name: '', email: '', role: 'user', password: '' }, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Роль</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="admin">Администратор</option>
          <option value="editor">Редактор</option>
          <option value="user">Пользователь</option>
        </select>
      </div>
      <div>
        <label>Пароль</label>
        <input
          type="password"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
          placeholder="Введите новый пароль"
        />
      </div>
      <button type="submit">Сохранить</button>
      <button type="button" onClick={onCancel}>
        Отменить
      </button>
    </form>
  );
};

export default UserForm;
