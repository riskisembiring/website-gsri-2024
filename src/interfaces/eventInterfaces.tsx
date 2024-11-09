export interface Event {
    name: string;
    date: string;
    image: string;
    btnText: string; 
  }
  
export const upcomingEvents: Event[] = [
    {
      name: 'Jadwal Natal GSRI',
      date: '2024-12-25',
      image: "/images/IMG_5917.jpeg",
      btnText: 'Lihat Jadwal'
    },
    {
      name: 'Peresmian Perumahan Pastori GSRI',
      date: '2024-09-17',
      image: "/images/IMG_5912.jpeg",
      btnText: 'Lihat Album'
    },
    {
      name: '',
      date: '2025-01-15',
      image: "/images/soon.jpg",
      btnText: 'Lihat'
    },
  ];
  