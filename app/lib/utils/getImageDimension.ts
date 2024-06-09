export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => {
        resolve({ width: img.width, height: img.height });
      }) 
      img.addEventListener('error', (error) => {
        reject(error);
      })
      img.src = url;
    });
  };
  