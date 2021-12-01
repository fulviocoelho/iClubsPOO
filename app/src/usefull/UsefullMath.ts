import IRandomNumber from "../interfaces/IRandomNumber";

export default class UsefullMath {
    public randomNumber({ start, end }: IRandomNumber = { start: 1, end: 1000 }){
        return Math.floor(Math.random() * (start - end + 1)) + end;
    }
}