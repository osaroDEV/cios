import { create } from 'zustand';

type Caption = {
  header: string;
  note: string;
};

type CaptionsState = {
  captions: Caption[];
  setCaptions: (captions: Caption[]) => void;
};

export const useCaptionsStore = create<CaptionsState>((set) => ({
  captions: [
    {
      header: 'Unlock Your Coding Potential',
      note: 'Master essential skills and build projects that stand out. Start your journey today!',
    },
    {
      header: 'From Beginner to Builder',
      note: 'Our courses guide you through every step, with hands-on practice and expert support. Level up your career!',
    },
    {
      header: 'Dive into the World of Code',
      note: 'Learn in-demand languages like React, JavaScript, and more. Flexible schedules and interactive lessons await!',
    },
    {
      header: 'Future-Proof Your Skills Today',
            note: 'Join our community of passionate coders and gain the expertise to thrive in the tech industry. Enroll now!',
          },
        ],
        setCaptions: (captions: Caption[]) => set({ captions }),
      }))