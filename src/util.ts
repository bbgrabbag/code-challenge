export const throttleFactory = (ms: number) => {
  let timeout: NodeJS.Timeout;
  return (cb: (...args: any) => any) => {
    return (...args: Parameters<typeof cb>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => cb(...args), ms);
    };
  };
};
