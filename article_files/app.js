var ccon="/c?";var c2con="/c2?";var dcon="/d?";var nwcon="/nw?";var arcon="/archive?";var xsc="&xsc=8fkv4d0dk7";var jp="&callback=JSON_CALLBACK";function foundationCall(){$(document).foundation()}
var ap="https://api";var aq=".midwestradionetwork";var co=".com";function limitText(limitField,limitCount,limitNum){if(limitField.value.length>limitNum){limitField.value=limitField.value.substring(0,limitNum)}else{limitCount.value=limitNum-limitField.value.length}}
function loadOembedVideo() {
    document.querySelectorAll('oembed[url]').forEach(element => {
        var videoUrl = element.attributes.url.value;
        videoUrl = videoUrl.replace('youtu.be/', 'www.youtube.com/embed/');
        videoUrl = videoUrl.replace('youtube.com/watch?v=', 'youtube.com/embed/');
        videoUrl = videoUrl.replace('&feature=youtu.be', '');
        var newEl = document.createElement('p');
        newEl.innerHTML = '<iframe width=\"630\" height="420" src=' + videoUrl + '></iframe>';
        element.parentNode.replaceChild(newEl, element);
    })
}
function AlertFilesize(){
    if(window.ActiveXObject){
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var filepath = document.getElementById('release_foto').value;
        var thefile = fso.getFile(filepath);
        var sizeinbytes = thefile.size;
    }else{
        var sizeinbytes = document.getElementById('release_foto').files[0].size;
    }

    var fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
    fSize = sizeinbytes; i=0;while(fSize>900){fSize/=1024;i++;}

	if (fSExt[i] === 'GB'){ 
		alert("Warning: your image size is "+(Math.round(fSize*100)/100)+" "+fSExt[i]+ " (Maximum 2MB)" ); 
	}
	
	if (fSExt[i] === 'MB'){ 
		if ( (Math.round(fSize*100)/100) > 2 ) {
			alert("Warning: your image file size is "+(Math.round(fSize*100)/100)+" "+fSExt[i]+ " (Maximum 2MB)" ); 
		}
	}	
	
}