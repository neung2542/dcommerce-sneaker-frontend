export type Item = {
    name: string;
    route: string;
    description?: string;
  };
  
  export const navItems: Item[] = [
    { name: 'Feed', route: '/' },
    { name: 'In Stock', route: '/launch' },
    { name: 'Upcoming', route: '/upcoming' }
  ];