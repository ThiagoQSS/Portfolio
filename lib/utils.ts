export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength)
    return false;
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (
    error instanceof Error ||
    (error && typeof error === "object" && "message" in error)
  ) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;;
  } else {
    message = "An unknown error occurred.";
  }

  return message;
};
