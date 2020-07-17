import React from "react";


function handleFileSelect(evt, id, class1 = "thumb", class2 = "img-thumbnail") {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects.
    for (var i = 0, f; (f = files[i]); i++) {
        // Only process image files.
        if (!f.type.match("image.*")) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = ((theFile) => {
            let output = document.getElementById(id);

            if ((imgELement = output.firstElementChild))
                output.removeChild(imgELement);

            if ((imgELement = output.lastChild)) output.removeChild(imgELement);

            return (e) => {
                // Render Image.
                var img = new Image();
                img.src = e.target.result;
                img.alt = escape(theFile.name);
                img.classList.add(class1, class2);

                output.appendChild(img);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}

export default handleFileSelect;