declare module '*.css' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames;
  export = classNames
}

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
