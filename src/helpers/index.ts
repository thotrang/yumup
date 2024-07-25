export function isImageOrVideo(filePath: string): string {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'];
    const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv', '.webm', '.mpeg'];

    // Extract the file extension
    const fileExtension = filePath.toLowerCase();

    // Check if the file extension is in the list of image or video extensions
    if (imageExtensions.includes(fileExtension)) {
        return 'image';
    } else if (videoExtensions.includes(fileExtension)) {
        return 'video';
    } else {
        return 'neither';
    }
}