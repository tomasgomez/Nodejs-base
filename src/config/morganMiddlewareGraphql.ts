import morgan, { StreamOptions } from "morgan";

import { IncomingMessage } from "http";

import Logger from "../lib/logger";

interface Request extends IncomingMessage {
  body: {
    query: String;
  };
}

const stream: StreamOptions = {
  write: (message) =>
    Logger.http(message.substring(0, message.lastIndexOf("\n"))),
};

const skip = () => {
  const env = process.env.NODE_ENV || "DEV";
  return env !== "DEV";
};

const registerGraphQLToken = () => {
  morgan.token("graphql-query", (req: Request) => `GraphQL ${req.body.query}`);
};

registerGraphQLToken();

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms\n:graphql-query",
  { stream, skip }
);

export default morganMiddleware;