import { LoginForm } from "@/presentation/components/login/Login-form";

export default function LoginPage() {
  return (
    <main className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <section className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </section>
    </main>
  );
}
