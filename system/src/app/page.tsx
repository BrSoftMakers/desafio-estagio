'use client'

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Logo from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleLoginRequest } from "@/utils/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/auth";
import { redirect } from "next/navigation";
import { LoginValidateForm } from "@/validation/auth-login.schema";
import { useToast } from "@/components/ui/use-toast";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { login } = useContext(AuthContext);
  const token = typeof window !== 'undefined' ? localStorage.getItem('@token:auth') : null;
  const { toast } = useToast();
  const { register, handleSubmit } = useForm<LoginForm>();

  useEffect(() => {
    if (token) {
      redirect('/home');
    }
  }, [token]);

  const handleLogin = async (data: LoginForm) => {
    try {
      const validatedData = LoginValidateForm(data);
      const userToken = await handleLoginRequest(validatedData);
      await login(userToken);
    } catch (error) {
      console.error(error);

      let errorMessage: string = "An error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      toast({
        description: errorMessage,
      });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-full max-w-[500px] h-full max-h-[500px] p-5 rounded-[10px] border-none">
        <Logo />
        <p className="text-slate-400 mt-1 mb-5">
          Faça login usando suas credenciais:
        </p>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleLogin)}
        >
          <label>E-mail</label>
          <Input
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
            className="rounded-[10px]"
          />
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Senha"
            {...register("password", { required: true })}
            className="rounded-[10px]"
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] w-full rounded-[10px]"
          >
            Login
          </Button>
          <p className="text-slate-400 text-center">
            Não possui uma conta?
            <Link href="/register" className="ml-1 text-[#0056E2]">
              Clique aqui
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
