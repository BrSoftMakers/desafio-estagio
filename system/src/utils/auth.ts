import { app } from "@/lib/axios";
import { useRouter } from "next/router";

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  permission: 'boss' | 'employee' | 'client';
}

export const handleLoginRequest = async (data: object): Promise<string> => {
  try {
    const user = await app.post("/auth/login", data);
    localStorage.setItem('@token:auth', user.data);
    const router = useRouter();
    router.push('/home');
    return user.data;
  } catch (error) {
    console.error("Login request failed:", error);
    throw error;
  }
};

export const handleRegisterRequest = async ({ name, email, password, permission = 'employee' }: IRegisterUser): Promise<void> => {
  try {
    await app.post("/auth/register", {
      name, email, password, permission
    });
  } catch (error) {
    console.error("Registration request failed:", error);
    throw error;
  }
};
