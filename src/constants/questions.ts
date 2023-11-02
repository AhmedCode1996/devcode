export type QuestionProps = {
  id: number;
  title: string;
  tags: {
    id: number;
    name: string;
  }[];
  author: {
    id: number;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<any>; // You can define a specific type for answers if needed
  createdAt: Date;
};

export const QUESTIONS: QuestionProps[] = [
  {
    id: 0,
    title: "How to center the div?",
    tags: [
      {
        id: 10,
        name: "react js",
      },
      {
        id: 11,
        name: "next js",
      },
      {
        id: 12,
        name: "vue js",
      },
    ],
    author: {
      id: 100,
      name: "Ahmed Harb",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 99939,
    views: 98385,
    answers: [],
    createdAt: new Date(),
  },
  {
    id: 1,
    title: "Best practices for responsive design?",
    tags: [
      {
        id: 20,
        name: "angular js",
      },
      {
        id: 21,
        name: "svelte js",
      },
      {
        id: 22,
        name: "jquery js",
      },
    ],
    author: {
      id: 101,
      name: "Sarah Smith",
      picture: "./../../public/assets/icons/avatar2.svg",
    },
    upvotes: 7542,
    views: 6832,
    answers: [],
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "How to optimize website performance?",
    tags: [
      {
        id: 30,
        name: "frontend optimization",
      },
      {
        id: 31,
        name: "backend optimization",
      },
      {
        id: 32,
        name: "fullstack optimization",
      },
      {
        id: 33,
        name: "ui/ux optimization",
      },
    ],
    author: {
      id: 102,
      name: "John Doe",
      picture: "./../../public/assets/icons/avatar3.svg",
    },
    upvotes: 13254,
    views: 10982,
    answers: [],
    createdAt: new Date(),
  },
];
