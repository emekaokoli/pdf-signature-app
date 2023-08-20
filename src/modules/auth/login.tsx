import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { useSignIn } from "@/hooks/useSignIn";
import { loginDefaultValues, loginResolver } from "@/schema/loginSchema";
import { useEffect } from "react";
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';


export type loginPayload = {
  email: string;
  password: string;
  entry_point: string

};

export function Login() {
  const { isLoggedIn } = useAuth()
  const { state } = useLocation();
  const navigate = useNavigate()
  const { handleSubmit, control, formState: { errors } } = useForm<loginPayload>({
    defaultValues: loginDefaultValues,
    resolver: loginResolver,
  });
  const from = state?.path || '/home';

  const { signIn, isLoading } = useSignIn();

  const onSubmit = (data: loginPayload) => {
    signIn({ payload: data })
    navigate(from, { replace: true })
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [navigate, from]);


  return (
    <Card className="grid grid-flow-col grid-cols-1 justify-start items-start">
      <CardHeader>
        <CardTitle>User Login</CardTitle>
        <CardDescription>
          Login to use the app.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1 flex flex-col justify-start items-start">
            <Label htmlFor="email">Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div>
                  <Input {...field} type="email" id="email" placeholder="email" />
                  {errors.email && <p className="text-red-500">{errors.root?.message}</p>}
                </div>
              )}
              rules={{ required: 'Email is required' }}
            />
            <Label htmlFor="password">Password</Label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div>
                  <Input {...field} type="password" id="password" placeholder="password" />
                  {errors.password && <p className="text-red-500">{errors.root?.message}</p>}
                </div>
              )}
              rules={{ required: 'Password is required' }}
            />
            <Label htmlFor="entry_point">Role</Label>

            <Controller
              name="entry_point"
              control={control}
              render={({ field }) => <Input {...field} id="entry_point" placeholder='User'
                
              />}
            />
          </div>
          <CardFooter>
            <Button type="submit" variant='secondary' disabled={isLoading}>
              {isLoading ? 'Logging In...' : 'Login'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}