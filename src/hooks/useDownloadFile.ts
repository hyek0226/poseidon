export function useDownloadFile(file: string | undefined) {
  try {
    if (file) {
      const downloadUrl = window.URL.createObjectURL(new Blob([file]));
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.download = 'pic.jpg';
      link.href = downloadUrl;
      link.click();
    }
  } catch (error) {
    console.log(error);
  }
}
