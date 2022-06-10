// https://www.youtube.com/watch?v=s9qgTlpYDuA

interface ErrorMiddleware extends Error {
  status?: number;
}

export default ErrorMiddleware;
