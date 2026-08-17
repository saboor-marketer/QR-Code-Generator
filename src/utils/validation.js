export const validateWebsite = (url) => {
  if (!url || url.trim() === '') {
    return 'Website URL is required';
  }
  
  const normalizedUrl = url.trim();
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  
  if (!urlPattern.test(normalizedUrl)) {
    return 'Please enter a valid URL';
  }
  
  return null;
};

export const validateText = (text) => {
  if (!text || text.trim() === '') {
    return 'Text is required';
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || phone.trim() === '') {
    return 'Phone number is required';
  }
  
  const phonePattern = /^[\d\+\-\(\)\s]+$/;
  if (!phonePattern.test(phone.trim())) {
    return 'Please enter a valid phone number';
  }
  
  return null;
};

export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return 'Email is required';
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  
  return null;
};

export const validateLocation = (latitude, longitude) => {
  if (!latitude || latitude.trim() === '') {
    return 'Latitude is required';
  }
  if (!longitude || longitude.trim() === '') {
    return 'Longitude is required';
  }
  
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  
  if (isNaN(lat) || lat < -90 || lat > 90) {
    return 'Please enter a valid latitude (-90 to 90)';
  }
  
  if (isNaN(lon) || lon < -180 || lon > 180) {
    return 'Please enter a valid longitude (-180 to 180)';
  }
  
  return null;
};

export const validateWiFi = (networkName, password) => {
  if (!networkName || networkName.trim() === '') {
    return 'Network name is required';
  }
  return null;
};

export const validateWhatsApp = (phone) => {
  if (!phone || phone.trim() === '') {
    return 'Phone number is required';
  }
  
  const phonePattern = /^[\d\+\-\(\)\s]+$/;
  if (!phonePattern.test(phone.trim())) {
    return 'Please enter a valid phone number';
  }
  
  return null;
};
