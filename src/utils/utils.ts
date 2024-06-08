export const getImg = (url: string): string => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url.startsWith('http://') ? url.replace('http://', 'https://') : url;
  } else {
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s';
  }
};
