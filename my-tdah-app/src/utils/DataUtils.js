export const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };
  
  export const validateDate = (dateString) => {
    const regex = /^\d{2}\/\d{2}\/\d{2}$/;
    return regex.test(dateString);
  };
  