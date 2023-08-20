import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/useRegister";
import { registerDefaultValues, registerResolver } from "@/schema/registerSchama";
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from "react-router-dom";


export type registerPayload = {
  first_name: string
  last_name: string
  role: string
  email: string
  password: string
}

export function Register() {
  const { state } = useLocation();
  const navigate = useNavigate()
  const from = state?.path || '/home';

  const { handleSubmit, control, formState: { errors } } = useForm<registerPayload>({
    defaultValues: registerDefaultValues,
    resolver: registerResolver,
  });

  const { register, isLoading } = useRegister()


  const onSubmit = (data: registerPayload) => {
    register({ payload: data })
    navigate(from, { replace: true })
  };

  return (
    <Card className="grid grid-flow-col grid-cols-1 justify-start items-start">
      <CardHeader>
        <CardTitle>User Login</CardTitle>
        <CardDescription>
          Login to use the app.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1 flex flex-col justify-start items-start">
            <Label htmlFor="first_name">First Name</Label>
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => (
                <div>
                  <Input {...field} type="first_name" id="first_name" placeholder="first name" />
                  {errors.first_name && <p className="text-red-500">{errors.root?.message}</p>}
                </div>
              )}
              rules={{ required: 'first name is required' }}
            />
            <Label htmlFor="last_name">Last Name</Label>
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => (
                <div>
                  <Input {...field} type="last_name" id="last_name" placeholder="last name" />
                  {errors.last_name && <p className="text-red-500">{errors.root?.message}</p>}
                </div>
              )}
              rules={{ required: 'Last name is required' }}
            />
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
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <div>
                  <Input {...field} id="entry_point" placeholder='User | Admin' />
                  {errors.role && <p className="text-red-500">{errors.root?.message}</p>}
                </div>
              )

              }
            />
          </div>
          <CardFooter>
            <Button type="submit" variant='secondary' disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
