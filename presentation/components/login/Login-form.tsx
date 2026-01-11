import { cn } from "@/infraestructure/lib/utils";
import { Button } from "@/presentation/components/ui/button";
import { Card, CardContent } from "@/presentation/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/presentation/components/ui/field";
import { Input } from "@/presentation/components/ui/input";
import Image from "next/image";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-primary object-cover"
                />
                <h1 className="text-2xl font-bold">Bienvenida De vuelta!</h1>
                <p className="text-muted-foreground text-balance">
                  Inicia sesión en tu cuenta! TQM 💖
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Username</FieldLabel>
                <Input
                  id="username"
                  type="username"
                  placeholder="Cielito"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </Field>
              <Field>
                <Button type="submit" className="cursor-pointer">
                  Iniciar sesión
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/images/loginBg.jpg"
              alt="Imagen de fondo de la página de login"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Cualquier duda o problema, ya sabes a quien contactar! 💖
      </FieldDescription>
    </div>
  );
}
