'use client'
import { Card } from "@/components/ui/card";
import Logo from "@/components/ui/logo";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleRegisterRequest } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { RegisterValidateForm } from "@/validation/auth-register.schema";
import { useToast } from "@/components/ui/use-toast";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  permission: 'boss' | 'employee' | 'client';
}

export default function SignIn() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterForm>();
  const { toast } = useToast();

  const handleRegister = async (data: RegisterForm) => {
    try {
      const validatedData = RegisterValidateForm(data);
      await handleRegisterRequest(validatedData);
      router.push('/');
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
      <Card className="w-full max-w-[500px] h-full max-h-[500px] border-none p-5 rounded-[10px]">
        <Logo />
        <p className="text-slate-400 mt-1 mb-5">
          Faça seu cadastro usando suas credenciais:
        </p>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleRegister)}
        >
          <label>Nome</label>
          <Input
            type="name"
            placeholder="Nome e sobrenome"
            {...register("name", { required: true })}
            className="rounded-[10px]"
          />
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
          <label>Permissão</label>
          <select {...register("permission")} className="rounded-[10px] bg-transparent outline-none hover:cursor-pointer py-2 text-slate-500 focus:outline-none">
            <option value="boss">Chefe</option>
            <option value="employee">Empregado</option>
            <option value="client" selected={() => alert('Clientes não podem cadastrar um pet')}>Cliente</option>
          </select>
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] w-full rounded-[10px]"
          >
            Cadastre-se
          </Button>
          <p className="text-slate-400 text-center">
            Já possui uma conta?
            <Link href="/" className="ml-1 text-[#0056E2]">
              Clique aqui
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
