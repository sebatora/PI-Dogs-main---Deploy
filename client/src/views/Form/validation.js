const validation = (formData, allDogs) => {

  let errors = {};
  let regexH = /^\d{1,2} ?- ?\d{1,2}( cm)?$/
  let regexW = /^\d{1,2} ?- ?\d{1,2}( kg)?$/
  let regexLS = /^\d{1,2} ?- ?\d{1,2}( years)?$/

  // Name
  if(!formData.name) errors.name = "This field is required";

  if (formData.name.length > 25) errors.name = "Must be less than 25 characters";

  if(!/^[a-zA-Z ]*$/.test(formData.name)) errors.name = "Only letters are allowed";

  // Height

  if(!formData.height) errors.height = "This field is required";
  if(!regexH.test(formData.height)) errors.height = "The format must be min - max cm";

    // Weight

  if(!formData.weight) errors.weight = "This field is required";
  if(!regexW.test(formData.weight)) errors.weight = "The format must be min - max kg";

  // Life Span

  if(!formData.life_span) errors.life_span = "This field is required";
  if(!regexLS.test(formData.life_span)) errors.life_span = "The format must be min - max years";

  return errors;

}

export default validation;