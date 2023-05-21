export const parseWeight = (weight) => {
    const regexRange = /^(\d+)\s*-\s*(\d+)$/;
    const regexNumber = /^\d+$/;
  
    if (regexRange.test(weight)) {
      const [, min, max] = weight.match(regexRange);
      return {
        number: parseInt(min),
        subNumber: parseInt(max)
      };
    } else if (regexNumber.test(weight)) {
      return {
        number: parseInt(weight),
        subNumber: 0
      };
    } else {
      return {
        number: 0,
        subNumber: 0
      };
    }
  }