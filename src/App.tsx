import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { router } from '@/app/routes';

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { background: '#1f2937', color: '#f9fafb', borderRadius: '12px' },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}
