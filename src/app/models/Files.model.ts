export interface Files {
  files: FileName[],
  every5: FileName[],
  every10: FileName[],
  every15: FileName[],
  every30: FileName[],
}
export interface FileName {
  name:string;
  size:number;
  createdTime:number;
  modifiedTime:number;
}
