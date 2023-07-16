const ulrInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("clic", async () => {
    try{
        const response = await fetch(urlInput.value);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
    } catch(error){
        alert("Failed to Download your Admit Card")
    }
});