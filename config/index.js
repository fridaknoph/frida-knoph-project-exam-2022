const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://project-exam-backend.herokuapp.com"
  : "https://project-exam-backend.herokuapp.com";
