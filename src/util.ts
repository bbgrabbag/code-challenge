export const throttleFactory = (ms: number) => {
  let timeout: NodeJS.Timeout;
  return (cb: (...args: any) => any, overrideMs?: number) => {
    return (...args: Parameters<typeof cb>): NodeJS.Timeout => {
      clearTimeout(timeout);
      timeout = setTimeout((() => cb(...args)), overrideMs !== undefined ? overrideMs : ms);
      return timeout;
    };
  };
};
