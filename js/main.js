// console.log("Running...")
const {Howl, Howler} = require('./howler');


$(function () {
    // var fileUploader = $("#file-uploader").dxFileUploader({
    //     multiple: true,
    //     accept: "*",
    //     value: [],
    //     uploadMode: "instantly",
    //     uploadUrl: "/files",
    //     onValueChanged: function(e) {
    //         var files = e.value;
    //         if(files.length > 0) {
    //             $("#selected-files .selected-item").remove();
    //             $.each(files, function(i, file) {

    //                 console.log("RUNNING...");
    //                 // file.name
    //                 // file.size
    //                 // file.type
    //                 // file.lastModifiedDate
    //             });
    //         }
    //     }
    // }).dxFileUploader("instance");
    
    // $("#accept-option").dxSelectBox({
    //     dataSource: [
    //         {
    //             // value: "*",
    //             value: "image/*",
    //             value: "video/*",
    //         }
    //     ],
    //     // valueExpr: "value",
    //     // displayExpr: "name",
    //     // value: "*",
    //     onValueChanged: function(e) {
    //         fileUploader.option("accept", e.value);
    //     }
    // });

    // console.log('RUNNING...');


    $("#file-manager").dxFileManager({
        name: "fileManager",
        rootFolderName: "tinyffs",
        fileSystemProvider: fileSystem,
        currentPath: "media",
        permissions: {
            // create: true,
            // copy: true,
            // move: true,
            // delete: true,
            // rename: true,
            // upload: true,
            download: true
        },
        upload:{
            maxFileSize: 1000000,
            chunkSize: 500000
        },
        allowedFileExtensions: [".js", ".json", ".css", ".jpg", ".mp3"],
        // allowedFileExtensions: ["*"],
		onSelectedFileOpened: function(e) {
            // var popup = $("#photo-popup").dxPopup("instance");
            // console.log(e.file.dataItem.path);


            playSong(e);

            // popup.option({
            //     "title": e.file.name,
            //     "contentTemplate": "<img src=\"" + e.file.dataItem.path + "\" class=\"photo-popup-image\" />"
            // });
            // popup.show();
        },


        // contextMenuItemClick
        
        // BROKEN UPLOAD STUFF
        // uploadFileChunk: function(file, uploadInfo) {
        //     // your code
        //     console.log(file);
        //     console.log(uploadInfo);
        // }


        // uploadFileChunk: function(e) {
        //     console.log(e);
        // }
    });

    
    
    var currSound = null
    
    function playSong(e){

        if(currSound != e.file.dataItem.path){
            var sound = new Howl({
                src: [e.file.dataItem.path]
              });
              
            currSound = e.file.dataItem.path
            sound.play();
        }
        
    }


    // PHOTO POP UP 
    // $("#photo-popup").dxPopup({
    //     maxWidth: 800,
	// 	// maxHeight: 1080,
    //     closeOnOutsideClick: true,
    //     onContentReady: function(e) {
    //         var $contentElement = e.component.content();  
    //         $contentElement.addClass("photo-popup-content");
    //       }
	// });
});