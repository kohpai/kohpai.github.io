// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// Create a storage reference from our storage service
var storageRef = storage.ref();

// Child references can also take paths delimited by '/'
var weightFileRef = storageRef
    .child('neuralnetworks')
    .child('pedestrian-32x80x1-weights.tar.gz');

weightFileRef.getDownloadURL().then(function(url) {
    console.log("Download URL: ", url);
    window.location.href = url;
}).catch(function(error) {
    console.err(error)
    // Handle any errors
});
