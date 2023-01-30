import fs from 'fs';
import AWS from 'aws-sdk';

//create a new s3 bucket with open permissions
const s3 = new AWS.S3({
    region: "eu-west-1"
});

const bucketName = "tayyabjaved.comimages";



const images = fs.readdirSync("./images");

function uploadFile(image){

}

const links = [];

images.forEach((image)=>{

    //upload each image to the bucket and set the content type to be an image

    const fileContent = fs.readFileSync(`./images/${image}`);

    const params = {
        Bucket: bucketName,
        Key: image,
        Body: fileContent,
        ContentType: "image/png",
        ACL: "public-read"
    };



    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
    
    //get the link to the image and add it to the links array
    const link = `https://${bucketName}.s3.eu-west-1.amazonaws.com/${image}`;
    links.push(link);
    

    


});

fs.writeFileSync("imagelinks.txt",JSON.stringify(links,null,2),(err)=>{});