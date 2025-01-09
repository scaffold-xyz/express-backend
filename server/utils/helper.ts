export const logInfo = ({ message, data }: { message: string; data: any }) => {
  console.log(`${message}: ${data}`);
};

export const logError = ({ message, data }: { message: string; data: any }) => {
  console.error(`${message}: ${data}`);
};
