import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const FormSchema = z.object({
  name: z.string().min(1, 'name is required').max(50),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

const CreateAdminForm = () => {
  const form = {
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  };

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });
    if (response.ok) {
      alert('Admin created successfully');
    } else {
      alert('Failed to create admin');
    }
  };
};
