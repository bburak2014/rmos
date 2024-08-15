 
'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    setError(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { userName, password } = Object.fromEntries(formData) as {
      userName: string;
      password: string;
    };

    try {
      const response = await axios.post('/api/login', {
        userName,
        password,
      });

      if (response.status === 200) {
         router.push('/dashboard'); 
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="userName" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

