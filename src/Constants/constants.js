export const BaseUrl ="/media/bruk/New Volume/bridge/2projects/js/react/projects/mainTemplate/final3/public/assets/"
export const API_ROOT = 'http://localhost:4000/api/v1/';

export const NetworkImagePath = 'http://localhost:4000/img/movie/'


export const LocalImagePath = "http://localhost:3000/images/"

export const LocalImage = (path, image)=>{
    return process.env.PUBLIC_URL+ path+ image
}
export const LocalImg=(img)=>{
    return LocalImagePath+img
}
export const NetworkImage=(path, image)=>{
    const pat= path||""
    return NetworkImagePath+ pat+ image
}



// INDEX page limits
//Items, BestItems, Latest Items,
export const CategoryLimit = 6
export const ConfigProductsLimit = 15



export let GenresLimit = 15;

export let GroupsLimit = 7;

export const ColorPrimary ='#0e8ce4'
export const ColorPrimaryDark ='#007bff'
export const ColorRed ='#df3b3b'
