//1

function isImageFileExtension(fileName) {
    const regEx = /\.(png|jpg|jpeg|gif|svg)$/;
    if (fileName === undefined || fileName === null){
       return false;
    } else if (fileName.match(regEx)){
        return true;
    }
}

//2

function findFileExtension(filename) {  
    return filename.substring(filename.lastIndexOf('.'))
}
findFileExtension('sample.ex.jpeg')

//3 

function isImageFileExtension(filename) {  
    if (filename === null || filename === undefined) 
    return false  //.png, .jpg, .jpeg, .gif, .svg  
return (    filename.endsWith('.png') ||    
            filename.endsWith('.jpg') ||    
            filename.endsWith('jpeg') ||    
            filename.endsWith('.gif') ||    
            filename.endsWith('.svg')  )
        }
        
console.log(isImageFileExtension('sample.png'))
console.log(isImageFileExtension('sample.jpg'))
console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('sample.gif'))
console.log(isImageFileExtension('sample.svg'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))
console.log(isImageFileExtension('sample.sve'))