// https://github.com/19majkel94/type-graphql/issues/73#issuecomment-386833394
export function ofType<T>(Type: new (...args: any[]) => T) {
  return (object: T) => {
    return Object.assign(new Type(), object);
  };
}
