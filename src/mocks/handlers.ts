import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_URL_API!}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, isDone: false, name: "Do laundry" },
        { id: 2, isDone: false, name: "Do homework" },
        { id: 3, isDone: false, name: "Code a little" },
      ])
    );
  }),
];
