'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { navigationItems } from './index';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MobileMenu() {
  const location = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <Sheet open={open} onOpenChange={(state: any) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      {/* @ts-ignore */}
      <SheetContent>
        <div className="mt-5 flex items-center px-2 space-y-1 flex-col">
          {navigationItems.map((item, index) => (
            <Link
              onClick={() => setOpen(false)}
              key={index}
              href={item.href}
              className={cn(
                location === item.href
                  ? 'bg-muted'
                  : 'hover:bg-muted hover:bg-opacity-75',
                'group flex items-center px-2 py-2 text-md font-semibold rounded-md'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
