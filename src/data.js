export const API_KEY='AIzaSyBv0I4FXk6J2PVNhFwke6kIk07u17qwZYs';

export const value_converter=(value)=>{
    if(value>1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}