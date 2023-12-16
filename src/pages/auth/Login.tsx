import { Button } from "@/components/ui/button";
import logo from "@/components/Main/logo/logo-wide.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from "zod";
import { useNavigate } from "@tanstack/react-router";

const ValidationSchemaLogin = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
  //jika params true maka simpan ke HTTP cookie
  rememberCheck: z.boolean(),
});

// extracting the type
type ValidSchemaLogin = z.infer<typeof ValidationSchemaLogin>;

function LoginPage() {
  // ref & state inside Forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidSchemaLogin>({
    defaultValues: { rememberCheck: false },
    resolver: zodResolver(ValidationSchemaLogin),
  });

  let navigate: any = useNavigate({ from: "/masuk" });

  function handleBack() {
    navigate({ to: "../" });
  }

  return (
    <div className="min-h-screen flex flex-1 justify-center items-center ">
      <div>
        <div className="mb-6">
          <img src={logo} alt="logo" className="max-w-[190px]" />
        </div>
        <Card className="min-w-[300px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Masukan email & password untuk lanjut
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div> */}
            {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div> */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="contoh@gmail.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Masuk</Button>
          </CardFooter>
        </Card>
        <button
          type="button"
          onClick={handleBack}
          className="text-sm opacity-50 hover:opacity-100 text-gray-400 mt-3 flex space-x-1"
        >
          <ArrowLeft className="w-5" />
          <span>Kembali</span>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
