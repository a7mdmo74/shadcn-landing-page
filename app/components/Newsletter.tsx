'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('' as string);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast({
      description: 'Subscribed! 🎉',
    });
    console.log('Subscribed!');
    email.length > 4
      ? (console.log('Subscribed!'),
        setEmail(''),
        toast({
          description: 'Subscribed! 🎉',
        }))
      : (console.log('Email is too short!'),
        toast({
          description: 'Email is too short!',
        }));
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{' '}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="someone@gmail.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="secondary">Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

export default Newsletter;
