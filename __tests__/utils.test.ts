import {getImg} from '../src/utils/utils';

describe('testing utility function', () => {
  it('should return given url', () => {
    const url = 'https://example.com/image.jpg';
    const result = getImg(url);
    expect(result).toBe(url);
  });
  it('should convert http to valid https url', () => {
    const url = 'http://example.com/image.jpg';
    const expected = 'https://example.com/image.jpg';
    const result = getImg(url);
    expect(result).toBe(expected);
  });

  it('should return a default image url if given parameters is not http/https', () => {
    const url = 'ftp://example.com/image.jpg';
    const expected =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s';
    const result = getImg(url);
    expect(result).toBe(expected);
  });

  it('should return a default image url if given parameters is empty string', () => {
    const url = '';
    const expected =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s';
    const result = getImg(url);
    expect(result).toBe(expected);
  });
});
