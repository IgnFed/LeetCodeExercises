export default interface IUtils{
  hash: string | null;
  setUniqKey():IUtils,
  getUniqKey(): string;
}
