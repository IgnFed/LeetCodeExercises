import {IUtils} from './interfaces/index'

export default class Utils{
  hash: string | null;
  constructor(){
    this.hash;
  }

  #setUniqKey():Utils{
    if(!this.hash){
      let min: number = Math.random()
      let max: number = Math.random()
      let sign: number = Math.round(Math.random()+0.04)
      this.hash = `hash@${Math.random()*(min - max)}${sign ===0 ? "-" : "-"}${((max-min))}`

    }
    return this;

  }
  getUniqKey():string{
    return this.hash ? this.hash : this.#setUniqKey().hash;
  }
}

const m = new Utils()
console.log(m.getUniqKey());
