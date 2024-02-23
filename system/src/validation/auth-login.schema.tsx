import { z, ZodError } from "zod";

interface ValidatedForm {
  email: string;
  password: string;
}

const isStrongPassword = (password: string): boolean => {
  const hasMinLength = password.length >= 6;
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);

  return hasMinLength && hasSpecialChar && hasUpperCase && hasLowerCase;
};

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().refine((password) => isStrongPassword(password), {
    message:
      "A senha deve ter no mínimo 6 caracteres: 1 letra maiúscula, 1 letra minúscula e um caracter especial."
  })
});

export const LoginValidateForm = (data: unknown): ValidatedForm => {
  try {
    return formSchema.parse(data) as ValidatedForm;
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(error.errors.map((e) => e.message).join("\n"));
    }
    throw error;
  }
};

const formData = {
  email: "example@example.com",
  password: "StrongPassword123!"
};

try {
  const validatedData = validateForm(formData);
  console.log("Valid data:", validatedData);
} catch (error: any) {
  console.error("Validation error:", error.message);
}
